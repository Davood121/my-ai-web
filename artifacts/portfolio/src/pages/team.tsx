import { useGetMembers } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Activity } from "lucide-react";
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
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
          The <span className="text-primary">Collective</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          We are a tight-knit team of designers, engineers, and digital craftsmen dedicated to building exceptional experiences.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members?.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-8 relative z-10">
                <Avatar className="w-24 h-24 border-2 border-white/10 group-hover:border-primary transition-colors duration-500">
                  <AvatarImage src={member.avatarUrl || ''} />
                  <AvatarFallback className="bg-muted text-2xl font-display text-muted-foreground">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <div className="text-primary font-mono text-sm tracking-wider uppercase mb-6">{member.role}</div>
                
                <p className="text-muted-foreground mb-8 line-clamp-4 font-light">
                  {member.bio || "Crafting digital experiences."}
                </p>

                <div className="mt-auto flex gap-3 pt-6 border-t border-white/10">
                  {member.githubUrl && (
                    <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.websiteUrl && (
                    <a href={member.websiteUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
