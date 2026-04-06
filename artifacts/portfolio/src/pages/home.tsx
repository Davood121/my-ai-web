import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Users, Box } from "lucide-react";
import { useGetSummary, useGetFeaturedProjects } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: summary, isLoading: isSummaryLoading } = useGetSummary();
  // Using useGetProjects and filtering locally just in case useGetFeaturedProjects is missing, but prompt said to use it.
  const { data: featuredProjects, isLoading: isProjectsLoading } = useGetFeaturedProjects();

  return (
    <div className="flex flex-col min-h-full">
      <section className="relative flex-1 flex flex-col justify-center items-center text-center px-6 py-32 md:py-48 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-sm font-medium text-primary glow-box">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            New Projects Added
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-tight mb-8">
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">
              Digital Frontier
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            An award-winning collective pushing the boundaries of web experiences, 
            interactive design, and software engineering.
          </p>

          <Link href="/projects">
            <Button size="lg" className="h-14 px-8 text-lg font-medium rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
              Start the Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] opacity-20 pointer-events-none translate-x-[20%]" />
      </section>

      <section className="py-24 bg-card border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <StatCard 
              icon={<Box className="w-6 h-6" />}
              label="Total Projects"
              value={isSummaryLoading ? null : summary?.totalProjects}
            />
            <StatCard 
              icon={<Activity className="w-6 h-6" />}
              label="Live in Production"
              value={isSummaryLoading ? null : summary?.liveProjects}
            />
            <StatCard 
              icon={<Users className="w-6 h-6" />}
              label="Core Members"
              value={isSummaryLoading ? null : summary?.totalMembers}
            />
          </div>
        </div>
      </section>

      {featuredProjects && featuredProjects.length > 0 && (
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-display font-bold mb-4">Featured Work</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  A curated selection of our most ambitious projects.
                </p>
              </div>
              <Link href="/projects" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.id}`} className="block group">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-6">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-card">
                          <Box className="w-12 h-12 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <Link href="/projects">
                <Button variant="outline" className="w-full border-white/10">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: number | null | undefined }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl glass-card relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="text-5xl font-display font-bold mb-2">
        {value === null || value === undefined ? (
          <Skeleton className="h-12 w-24 mx-auto" />
        ) : (
          value
        )}
      </div>
      <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
}
