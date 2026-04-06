import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Lightbulb, Heart, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-48">

      {/* Header */}
      <div className="container mx-auto px-6 mb-24 max-w-4xl">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 text-primary text-sm font-mono tracking-widest uppercase mb-6">
            <BookOpen className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
            Students who<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              ship real things.
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-4xl space-y-20">

        <motion.div {...fadeUp}>
          <p className="text-2xl md:text-3xl text-white font-medium leading-snug">
            We started this showcase because we wanted one place to show the world what we've built —
            not just assignments, but real projects we care about.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="text-lg text-muted-foreground space-y-6 font-light leading-relaxed">
          <p>
            We're a group of students who share a belief: the best way to learn is to build.
            Instead of just studying theory, we spend our spare time turning ideas into working software —
            websites, tools, experiments, and apps that solve real problems.
          </p>
          <p>
            ShowPath is our shared gallery. Every project here represents hours of late-night debugging,
            learning new technologies, and pushing past what we thought we could do. It's a living record
            of our growth, and we're proud of every single entry.
          </p>
          <p>
            We built this platform to share our work openly — with classmates, professors, recruiters,
            and anyone curious about what students with ambition can create.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Lightbulb className="w-5 h-5" />}
            title="Learn by Doing"
            description="Every project teaches us something new. We build first, then understand — and that's how we grow fastest."
            color="primary"
          />
          <ValueCard
            icon={<Heart className="w-5 h-5" />}
            title="Built Together"
            description="Collaboration is at the heart of everything we do. Different perspectives, shared goals, better results."
            color="accent"
          />
          <ValueCard
            icon={<Globe className="w-5 h-5" />}
            title="Shared with the World"
            description="We open-source our work and document our process. Learning in public makes everyone better."
            color="green"
          />
        </motion.div>

        {/* Quote */}
        <motion.div {...fadeUp} className="relative border-l-2 border-primary pl-8 py-4">
          <p className="text-2xl font-display font-medium text-white italic leading-relaxed">
            "The projects here span different technologies and ideas, but they all share one thing —
            they were made by people who genuinely wanted to build something."
          </p>
          <p className="text-muted-foreground text-sm mt-4">— The ShowPath Team</p>
        </motion.div>

        {/* What this platform is */}
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-4xl font-display font-bold text-white">What is ShowPath?</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            ShowPath is a portfolio platform built from scratch by students, for students. It's not a template —
            every line of code, every design decision, and every feature was thought through and built by our team.
            The platform itself is one of our projects.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We built it with a full backend API, a PostgreSQL database, and a React frontend. The source code
            is open on GitHub. If you want to fork it, learn from it, or build your own version, go ahead —
            that's the spirit of this entire project.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
          <Link href="/projects" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Browse Our Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/team" className="inline-flex items-center justify-center h-14 px-10 rounded-full glass-card border border-white/10 text-white text-base font-medium hover:bg-white/5 transition-colors">
            Meet the Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "primary" | "accent" | "green";
}) {
  const colorClass = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    green: "bg-green-500/10 text-green-400",
  }[color];

  return (
    <div className="glass-card p-8 rounded-3xl group hover:border-white/20 transition-colors duration-300">
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
