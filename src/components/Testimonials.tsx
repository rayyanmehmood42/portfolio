import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Lumen AI",
    quote:
      "Nova shipped our entire AI platform in 5 weeks. We closed our seed round 3 days after launch. Worth every dollar.",
    initials: "SC",
  },
  {
    name: "Marcus Webb",
    role: "CTO, Vault Finance",
    quote:
      "Hands down the best engineer I've worked with on Fiverr. The polish and attention to detail is on another level.",
    initials: "MW",
  },
  {
    name: "Priya Anand",
    role: "Product Lead, Northstar",
    quote:
      "Our conversion rate doubled within a month of the redesign. Nova doesn't just build — he understands business.",
    initials: "PA",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            Testimonials
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Trusted by founders <span className="text-gradient-primary">worldwide</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass gradient-border relative flex flex-col rounded-3xl p-7"
            >
              <Quote className="h-8 w-8 text-[var(--neon-purple)] opacity-60" />
              <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-white shadow-glow">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[var(--neon-cyan)] text-[var(--neon-cyan)]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
