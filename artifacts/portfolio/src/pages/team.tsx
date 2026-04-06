import { useGetMembers } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Activity, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {
  const { data: members, isLoading } = useGetMembers();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Activity className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-48">
      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 text-primary text-sm font-mono tracking-widest uppercase mb-6">
            <Users className="w-4 h-4" />
            The People
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
            The students<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              behind the work.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            We're a small team of students who love building things. Each project here has our names on it —
            and we're proud of every single one.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        {!members || members.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-3">No members yet</h2>
            <p className="text-muted-foreground max-w-sm">Team members will appear here once added.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-500"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

                {/* Avatar */}
                <div className="mb-8 relative z-10 flex items-start justify-between">
                  <Avatar className="w-20 h-20 border-2 border-white/10 group-hover:border-primary/40 transition-all duration-500">
                    <AvatarImage src={member.avatarUrl || ''} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-white text-2xl font-display font-bold">
                      {member.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  {/* Social icons top right */}
                  <div className="flex gap-2">
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.websiteUrl && (
                      <a
                        href={member.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-primary font-mono text-xs tracking-wider uppercase mb-5">
                    {member.role}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {member.bio || "Building things that matter."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
