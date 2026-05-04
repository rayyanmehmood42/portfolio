import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aiSaas from "@/assets/project-ai-saas.jpg";
import fintech from "@/assets/project-fintech.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import aiChat from "@/assets/project-ai-chat.jpg";
import analytics from "@/assets/project-analytics.jpg";

const projects = [
  {
    title: "Lumen AI",
    desc: "AI-powered analytics SaaS with real-time RAG and natural language queries.",
    tags: ["Next.js", "OpenAI", "Postgres"],
    image: aiSaas,
    span: "lg:col-span-2",
  },
  {
    title: "Vault Finance",
    desc: "Crypto portfolio tracker with on-chain data and predictive alerts.",
    tags: ["TanStack", "Web3", "Edge"],
    image: fintech,
    span: "lg:col-span-1",
  },
  {
    title: "Northstar Commerce",
    desc: "Headless e-commerce admin with AI-driven inventory & merchandising.",
    tags: ["React", "Stripe", "Shopify"],
    image: ecommerce,
    span: "lg:col-span-1",
  },
  {
    title: "Neon Chat",
    desc: "Mobile-first AI assistant with custom voice and multi-modal input.",
    tags: ["PWA", "Whisper", "GPT-4"],
    image: aiChat,
    span: "lg:col-span-1",
  },
  {
    title: "Pulse Analytics",
    desc: "Real-time product analytics platform serving 50M+ events/day.",
    tags: ["TypeScript", "Clickhouse", "tRPC"],
    image: analytics,
    span: "lg:col-span-1",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
              Selected work
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Products people <span className="text-gradient-primary">love using</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A glimpse into recent SaaS, dashboard and AI products shipped for clients
            across 12 countries.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`glass gradient-border group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 ${p.span}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)]/20 via-transparent to-[var(--neon-blue)]/20 opacity-60" />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              <div className="relative flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-gradient-primary group-hover:shadow-glow">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
