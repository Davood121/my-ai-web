import { useGetProjects } from "@workspace/api-client-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Github, ExternalLink, Activity } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Projects() {
  const { data: projects, isLoading } = useGetProjects();
  const containerRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Activity className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-8">
          <Activity className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">No Projects Yet</h2>
        <p className="text-muted-foreground max-w-md">Our gallery is currently empty. Check back soon as we prepare to unveil our latest creations.</p>
      </div>
    );
  }

  // Sort projects by sortOrder
  const sortedProjects = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="bg-background pt-32 pb-48" ref={containerRef}>
      <div className="container mx-auto px-6 mb-32 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
          The <span className="text-primary">Journey</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Every project here is something we built ourselves — scroll through the full journey and see how our work has grown.
        </p>
      </div>

      <div className="relative">
        {/* Central connecting line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-32 md:gap-64">
          {sortedProjects.map((project, index) => (
            <ProjectChapter 
              key={project.id} 
              project={project} 
              index={index} 
              total={sortedProjects.length} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectChapter({ project, index, total }: { project: any, index: number, total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  const statusColor = {
    live: "bg-green-500/20 text-green-400 border-green-500/30",
    in_progress: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    archived: "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }[project.status] || "bg-primary/20 text-primary border-primary/30";

  const statusLabel = {
    live: "Live",
    in_progress: "In Progress",
    archived: "Archived"
  }[project.status] || project.status;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={`container mx-auto px-6 relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
    >
      {/* Chapter Number */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-16 h-16 rounded-full bg-background border border-white/10 items-center justify-center text-xl font-display font-bold text-white z-20">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2">
        <motion.div 
          style={{ y }}
          className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden glass-card group"
        >
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted/50">
              <span className="font-display text-4xl text-white/10 font-bold">{project.title}</span>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 md:opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
            {project.tags?.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="bg-black/50 backdrop-blur-md border-white/20 text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Chapter {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
          <Badge variant="outline" className={statusColor}>
            {statusLabel}
          </Badge>
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 hover:text-primary transition-colors">
          <Link href={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {project.description}
        </p>

        {project.members && project.members.length > 0 && (
          <div className="flex items-center gap-2 mb-10">
            <div className="flex -space-x-3">
              {project.members.slice(0, 4).map((member: any) => (
                <Avatar key={member.id} className="border-2 border-background w-10 h-10">
                  <AvatarImage src={member.avatarUrl || ''} />
                  <AvatarFallback className="bg-muted text-xs">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">Team of {project.members.length}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <Link href={`/projects/${project.id}`}>
            <a className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Link>
          
          <div className="flex gap-2">
            {project.externalUrl && (
              <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
