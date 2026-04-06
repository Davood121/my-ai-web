import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-display font-bold text-sm">S</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
              ShowPath
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors relative ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-white"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Davood121/my-ai-web"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-display font-bold border-b border-white/5 pb-6 ${
                    location === link.href ? "text-primary" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/Davood121/my-ai-web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground pt-4"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">View Source on GitHub</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-20 flex flex-col relative z-10">
        {children}
      </main>

      <footer className="border-t border-white/5 py-16 mt-auto relative z-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-xs">S</span>
                </div>
                <span className="font-display font-bold text-white text-lg">ShowPath</span>
              </div>
              <p className="text-muted-foreground text-sm">
                A student project showcase — built with passion, shared with the world.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <a
                href="https://github.com/Davood121/my-ai-web"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                Open Source on GitHub
              </a>
              <p className="text-muted-foreground/50 text-xs">
                Made with dedication by students, for the world.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
