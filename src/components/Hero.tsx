import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Hero glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary opacity-20 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
          Available for new projects · Q2 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafting{" "}
          <span className="text-gradient-primary">AI-native</span>
          <br />
          products that{" "}
          <span className="relative inline-block">
            <span className="text-gradient">convert.</span>
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-primary opacity-70 blur-sm" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          I'm <span className="text-foreground">Nova Reyes</span> — a senior full-stack engineer
          designing premium AI SaaS, custom web apps and conversion-driven UI/UX
          for ambitious founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_oklch(0.65_0.27_295/0.7)]"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10"
          >
            View work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-4"
        >
          {[
            { v: "120+", l: "Projects shipped" },
            { v: "$8M+", l: "Client revenue" },
            { v: "4.9/5", l: "Avg. rating" },
          ].map((s) => (
            <div
              key={s.l}
              className="glass gradient-border rounded-2xl px-4 py-5 text-center"
            >
              <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
