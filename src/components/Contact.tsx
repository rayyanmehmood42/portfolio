import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong gradient-border relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16"
        >
          {/* Inner glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl" />

          <div className="relative">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
              Let's build
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Got an idea worth <span className="text-gradient-primary">shipping?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              I take on a handful of premium projects each quarter. Tell me about yours
              and I'll reply within 24 hours.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@nova.dev"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_oklch(0.65_0.27_295/0.7)]"
              >
                <Mail className="h-4 w-4" />
                hello@nova.dev
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Book a call
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available now
              </div>
              <div>Avg. response: 4 hours</div>
              <div>Based remotely · Worldwide</div>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© 2026 Nova Reyes. Crafted with obsession.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
            <a href="#" className="hover:text-foreground">X</a>
            <a href="#" className="hover:text-foreground">Fiverr</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
