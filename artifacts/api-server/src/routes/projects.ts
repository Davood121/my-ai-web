import { Router, type IRouter } from "express";
import { eq, inArray } from "drizzle-orm";
import { db, projectsTable, membersTable, projectMembersTable } from "@workspace/db";
import {
  CreateProjectBody,
  UpdateProjectBody,
  GetProjectParams,
  GetProjectResponse,
  UpdateProjectParams,
  UpdateProjectResponse,
  DeleteProjectParams,
  GetProjectsResponse,
  GetFeaturedProjectsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

function serializeMember(m: typeof membersTable.$inferSelect) {
  return {
    ...m,
    createdAt: m.createdAt instanceof Date ? m.createdAt.toISOString() : m.createdAt,
  };
}

function serializeProject(
  project: typeof projectsTable.$inferSelect,
  memberIds: number[],
  members: typeof membersTable.$inferSelect[]
) {
  return {
    ...project,
    createdAt: project.createdAt instanceof Date ? project.createdAt.toISOString() : project.createdAt,
    memberIds,
    members: members.map(serializeMember),
  };
}

async function getProjectWithMembers(projectId: number) {
  const [project] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.id, projectId));

  if (!project) return null;

  const pmRows = await db
    .select()
    .from(projectMembersTable)
    .where(eq(projectMembersTable.projectId, projectId));

  const memberIds = pmRows.map((r) => r.memberId);
  let members: typeof membersTable.$inferSelect[] = [];
  if (memberIds.length > 0) {
    members = await db
      .select()
      .from(membersTable)
      .where(inArray(membersTable.id, memberIds));
  }

  return serializeProject(project, memberIds, members);
}

router.get("/projects", async (req, res): Promise<void> => {
  const projects = await db
    .select()
    .from(projectsTable)
    .orderBy(projectsTable.sortOrder);

  const projectsWithMembers = await Promise.all(
    projects.map(async (project) => {
      const pmRows = await db
        .select()
        .from(projectMembersTable)
        .where(eq(projectMembersTable.projectId, project.id));
      const memberIds = pmRows.map((r) => r.memberId);
      let members: typeof membersTable.$inferSelect[] = [];
      if (memberIds.length > 0) {
        members = await db
          .select()
          .from(membersTable)
          .where(inArray(membersTable.id, memberIds));
      }
      return serializeProject(project, memberIds, members);
    })
  );

  res.json(GetProjectsResponse.parse(projectsWithMembers));
});

router.post("/projects", async (req, res): Promise<void> => {
  const parsed = CreateProjectBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid project body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { memberIds, ...projectData } = parsed.data;

  const [project] = await db
    .insert(projectsTable)
    .values({
      ...projectData,
      tags: projectData.tags ?? [],
    })
    .returning();

  if (memberIds && memberIds.length > 0) {
    await db.insert(projectMembersTable).values(
      memberIds.map((memberId) => ({ projectId: project.id, memberId }))
    );
  }

  const full = await getProjectWithMembers(project.id);
  res.status(201).json(GetProjectResponse.parse(full));
});

router.get("/projects/:id", async (req, res): Promise<void> => {
  const params = GetProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const full = await getProjectWithMembers(params.data.id);
  if (!full) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  res.json(GetProjectResponse.parse(full));
});

router.patch("/projects/:id", async (req, res): Promise<void> => {
  const params = UpdateProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateProjectBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid update body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { memberIds, ...projectData } = parsed.data;

  const [project] = await db
    .update(projectsTable)
    .set(projectData)
    .where(eq(projectsTable.id, params.data.id))
    .returning();

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  if (memberIds !== undefined) {
    await db
      .delete(projectMembersTable)
      .where(eq(projectMembersTable.projectId, project.id));
    if (memberIds.length > 0) {
      await db.insert(projectMembersTable).values(
        memberIds.map((memberId) => ({ projectId: project.id, memberId }))
      );
    }
  }

  const full = await getProjectWithMembers(project.id);
  res.json(UpdateProjectResponse.parse(full));
});

router.delete("/projects/:id", async (req, res): Promise<void> => {
  const params = DeleteProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  await db
    .delete(projectMembersTable)
    .where(eq(projectMembersTable.projectId, params.data.id));

  const [project] = await db
    .delete(projectsTable)
    .where(eq(projectsTable.id, params.data.id))
    .returning();

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  res.sendStatus(204);
});

router.get("/stats/summary", async (_req, res): Promise<void> => {
  const projects = await db.select().from(projectsTable);
  const members = await db.select().from(membersTable);

  const liveProjects = projects.filter((p) => p.status === "live").length;
  const inProgressProjects = projects.filter((p) => p.status === "in_progress").length;
  const featuredCount = projects.filter((p) => p.featured).length;

  res.json({
    totalProjects: projects.length,
    totalMembers: members.length,
    liveProjects,
    inProgressProjects,
    featuredCount,
  });
});

router.get("/stats/featured", async (_req, res): Promise<void> => {
  const projects = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.featured, true))
    .orderBy(projectsTable.sortOrder);

  const projectsWithMembers = await Promise.all(
    projects.map(async (project) => {
      const pmRows = await db
        .select()
        .from(projectMembersTable)
        .where(eq(projectMembersTable.projectId, project.id));
      const memberIds = pmRows.map((r) => r.memberId);
      let members: typeof membersTable.$inferSelect[] = [];
      if (memberIds.length > 0) {
        members = await db
          .select()
          .from(membersTable)
          .where(inArray(membersTable.id, memberIds));
      }
      return serializeProject(project, memberIds, members);
    })
  );

  res.json(GetFeaturedProjectsResponse.parse(projectsWithMembers));
});

export default router;
