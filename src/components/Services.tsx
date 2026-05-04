import { motion } from "framer-motion";
import { Bot, LayoutDashboard, Sparkles, Workflow, Smartphone, Rocket } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI SaaS Development",
    desc: "End-to-end LLM products: RAG, agents, fine-tuned models, vector search, billing.",
    tag: "Most popular",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Web Apps",
    desc: "Full-stack platforms with TanStack, Next.js, Postgres and edge-native infra.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    desc: "Conversion-focused interfaces and design systems that scale across products.",
  },
  {
    icon: Workflow,
    title: "Automation & APIs",
    desc: "Type-safe APIs, integrations and workflow automation that save 100+ hrs/month.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first PWAs",
    desc: "Installable, offline-capable progressive web apps with native-grade feel.",
  },
  {
    icon: Rocket,
    title: "MVP in 4 Weeks",
    desc: "From Figma to production. Investor-ready, fully responsive, payment integrated.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            Services
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            What I build for <span className="text-gradient-primary">ambitious teams</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Premium engineering and design — packaged for speed, priced for scale.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass gradient-border group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />

              {s.tag && (
                <div className="absolute right-5 top-5 rounded-full border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--neon-cyan)]">
                  {s.tag}
                </div>
              )}

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
