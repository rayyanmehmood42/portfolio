import { motion } from "framer-motion";
import { Code2, Cpu, Palette } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI-first thinking",
    desc: "Shipping LLM-powered features that actually move metrics — not demos.",
  },
  {
    icon: Code2,
    title: "Production-grade code",
    desc: "Type-safe, tested, observable. Built to scale from day one.",
  },
  {
    icon: Palette,
    title: "Design that converts",
    desc: "Every pixel earns its place. Premium feel, measurable outcomes.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-16 md:grid-cols-2 md:items-center"
        >
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
              About me
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              I build <span className="text-gradient-primary">AI-native</span> products founders are proud to ship.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm <span className="text-foreground">Rayyan Mehmood</span> — a software engineer
              and UI/UX specialist focused on building <span className="text-foreground">AI SaaS</span> and
              scalable digital products. I work with founders, agencies and growing
              teams who care deeply about how their software looks, feels, and performs.
            </p>
            <p className="mt-4 text-muted-foreground">
              My expertise spans <span className="text-foreground">custom web applications</span>,
              <span className="text-foreground"> AI integrations</span>, automation systems and
              high-converting interfaces. From the first wireframe to the last deployment,
              I take ownership of the entire product — architecture, design, and delivery.
            </p>
            <p className="mt-4 text-muted-foreground">
              My mission is simple: help businesses grow faster through technology that
              actually works. Every line of code and every pixel I ship is built around
              real outcomes — more users, better retention, stronger brand.
            </p>
            <p className="mt-4 text-muted-foreground">
              I obsess over <span className="text-foreground">innovation</span>,
              <span className="text-foreground"> performance</span> and
              <span className="text-foreground"> clean design</span> — because in 2026,
              "good enough" software is invisible. Premium products win.
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass gradient-border group flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
