import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Rocket, Users, Layers, Star } from "lucide-react";
import { useGetSummary, useGetFeaturedProjects } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: summary, isLoading: isSummaryLoading } = useGetSummary();
  const { data: featuredProjects, isLoading: isProjectsLoading } = useGetFeaturedProjects();

  return (
    <div className="flex flex-col min-h-full">

      {/* Hero */}
      <section className="relative flex-1 flex flex-col justify-center items-center text-center px-6 py-36 md:py-52 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-10 text-sm font-medium text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Student Project Showcase
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-8">
            We build things{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent glow-text">
              that matter.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            A group of students turning ideas into real software — one project at a time. 
            Scroll through our journey and see what we've built together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="h-14 px-10 text-base font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/team">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base font-medium rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                Meet the Team
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/15 rounded-full blur-[140px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[100px] opacity-25 pointer-events-none translate-x-[10%]" />

        {/* Floating dots decoration */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-primary opacity-50" />
      </section>

      {/* Stats */}
      <section className="py-20 bg-card border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <StatCard
              icon={<Layers className="w-5 h-5" />}
              label="Projects Built"
              value={isSummaryLoading ? null : summary?.totalProjects}
              sublabel="and counting"
            />
            <StatCard
              icon={<Rocket className="w-5 h-5" />}
              label="Live in Production"
              value={isSummaryLoading ? null : summary?.liveProjects}
              sublabel="deployed & running"
            />
            <StatCard
              icon={<Users className="w-5 h-5" />}
              label="Team Members"
              value={isSummaryLoading ? null : summary?.totalMembers}
              sublabel="collaborating together"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {!isProjectsLoading && featuredProjects && featuredProjects.length > 0 && (
        <section className="py-36 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-20"
            >
              <div>
                <div className="flex items-center gap-2 text-primary text-sm font-mono tracking-widest uppercase mb-4">
                  <Star className="w-4 h-4" />
                  Featured Work
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                  Our best projects,<br />hand-picked.
                </h2>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm uppercase tracking-wider">
                See Full Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/projects/${project.id}`} className="block group cursor-pointer">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card mb-5">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-muted relative overflow-hidden">
                          <span className="font-display text-5xl font-bold text-white/5 select-none">{project.title[0]}</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                      {/* Status badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                          project.status === 'live'
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : project.status === 'in_progress'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                        }`}>
                          {project.status === 'live' ? 'Live' : project.status === 'in_progress' ? 'In Progress' : 'Archived'}
                        </span>
                      </div>

                      {/* Hover arrow */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <ArrowRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 text-center md:hidden">
              <Link href="/projects">
                <Button variant="outline" className="w-full border-white/10">
                  See All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-mono mb-6">The full story awaits</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter">
              Ready to walk<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                the path?
              </span>
            </h2>
            <Link href="/projects">
              <Button size="lg" className="h-14 px-10 text-base font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
                Begin the Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | null | undefined;
  sublabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-6 p-8 rounded-2xl glass-card relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-4xl font-display font-bold text-white mb-0.5">
          {value === null || value === undefined ? (
            <Skeleton className="h-10 w-12" />
          ) : (
            value
          )}
        </div>
        <div className="text-white/80 font-medium text-sm">{label}</div>
        <div className="text-muted-foreground text-xs mt-0.5">{sublabel}</div>
      </div>
    </motion.div>
  );
}
