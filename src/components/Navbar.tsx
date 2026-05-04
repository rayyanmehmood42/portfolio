import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2"
    >
      <nav
        className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 px-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-90 blur-[2px]" />
            <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-white">
              N
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Nova<span className="text-gradient-primary">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_oklch(0.65_0.27_295/0.6)]"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}
