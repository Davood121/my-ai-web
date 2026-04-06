import { useGetProject, useGetProjects, getGetProjectQueryKey } from "@workspace/api-client-react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Activity, ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "0", 10);
  
  const { data: project, isLoading } = useGetProject(id, { 
    query: { enabled: !!id, queryKey: getGetProjectQueryKey(id) } 
  });
  
  const { data: allProjects } = useGetProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 px-6 container mx-auto">
        <Skeleton className="h-8 w-24 mb-12" />
        <Skeleton className="h-24 w-3/4 mb-8" />
        <Skeleton className="h-8 w-1/2 mb-12" />
        <Skeleton className="w-full aspect-video rounded-3xl mb-16" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/projects" className="text-primary hover:underline">Return to Gallery</Link>
      </div>
    );
  }

  const relatedProjects = allProjects
    ? allProjects.filter(p => p.id !== project.id).slice(0, 2)
    : [];

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
    <article className="min-h-screen bg-background pb-32">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-12 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Gallery
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="outline" className={statusColor}>
              {statusLabel}
            </Badge>
            {project.tags?.map(tag => (
              <Badge key={tag} variant="outline" className="bg-white/5">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 max-w-5xl">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Abstract background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      </div>

      {/* Main Image */}
      <div className="container mx-auto px-6 mb-24 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass-card"
        >
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted/30">
              <span className="font-display text-4xl text-white/10 font-bold">{project.title}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none">
            {project.longDescription ? (
              <div dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
            ) : (
              <p>No detailed description available for this project.</p>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Actions */}
            <div className="flex flex-col gap-4">
              {project.externalUrl && (
                <a 
                  href={project.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-between w-full h-14 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Live Site <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-between w-full h-14 px-6 rounded-xl glass-card hover:bg-white/10 transition-colors text-white"
                >
                  View Source Code <Github className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Team */}
            {project.members && project.members.length > 0 && (
              <div>
                <h3 className="text-xl font-display font-bold mb-6 border-b border-white/10 pb-4">Contributors</h3>
                <div className="flex flex-col gap-4">
                  {project.members.map(member => (
                    <Link key={member.id} href="/team" className="flex items-center gap-4 group">
                      <Avatar className="w-12 h-12 border border-white/10 group-hover:border-primary transition-colors">
                        <AvatarImage src={member.avatarUrl || ''} />
                        <AvatarFallback className="bg-muted">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white group-hover:text-primary transition-colors">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.role}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="container mx-auto px-6 mt-32 pt-32 border-t border-white/5">
          <h2 className="text-4xl font-display font-bold mb-12">More from the Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map(rp => (
              <Link key={rp.id} href={`/projects/${rp.id}`} className="group block">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card mb-6">
                  {rp.imageUrl ? (
                    <img src={rp.imageUrl} alt={rp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-muted/30" />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                <p className="text-muted-foreground line-clamp-1">{rp.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
