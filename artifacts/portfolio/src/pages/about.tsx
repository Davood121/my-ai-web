import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code2, Paintbrush, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-48">
      <div className="container mx-auto px-6 mb-32 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
          Our <span className="text-primary">Manifesto</span>
        </h1>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert prose-lg md:prose-xl max-w-none font-light leading-relaxed text-muted-foreground"
        >
          <p className="text-2xl md:text-3xl text-white font-medium mb-12 leading-snug">
            We believe that software should be treated as an art form. Every pixel, every interaction, and every line of code matters.
          </p>

          <p>
            STUDIO.X was founded on a simple principle: build things that make people feel something. In a sea of templates and generic frameworks, we strive for intention. We are a collective of independent thinkers, designers, and engineers who treat digital products as crafted artifacts rather than manufactured commodities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20 not-prose">
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Intentional Design</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Aesthetics are not an afterthought. We design for emotional impact first, and utility second.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Relentless Craft</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We sweat the details. Performance, animations, and accessibility are built in from day one.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Impactful Delivery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">We ship. Ideas are cheap, execution is everything. We pride ourselves on putting real work into the world.</p>
            </div>
          </div>

          <h2 className="text-4xl font-display font-bold text-white mt-16 mb-8">What is this space?</h2>
          <p>
            This portfolio is our digital gallery. It is a living, breathing archive of our best work. We built this platform not just to show what we've done, but to show <em>how</em> we do it. The projects here span industries, technologies, and scales, but they all share our signature commitment to quality.
          </p>

          <p>
            If you're looking for a partner to build something extraordinary, or if you simply appreciate the craft, you are in the right place.
          </p>

          <div className="mt-20 not-prose">
            <Link href="/projects" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-black text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Explore the Gallery <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
