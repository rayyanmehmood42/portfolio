import { motion } from "framer-motion";

const stack = [
  "TypeScript", "React", "Next.js", "TanStack", "Node.js", "Bun", "Postgres",
  "Supabase", "OpenAI", "Anthropic", "LangChain", "Vector DBs", "Tailwind",
  "Framer Motion", "Stripe", "AWS", "Cloudflare", "Docker", "tRPC", "Zod",
];

export function TechStack() {
  // duplicate for seamless marquee
  const row = [...stack, ...stack];

  return (
    <section id="stack" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            Tech stack
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Tools sharp enough to ship <span className="text-gradient-primary">10x faster</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee gap-3">
            {row.map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="glass gradient-border whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
