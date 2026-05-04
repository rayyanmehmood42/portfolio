export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 40%, var(--background) 100%)",
        }}
      />
      {/* Floating orbs */}
      <div
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: "var(--neon-purple)" }}
      />
      <div
        className="absolute top-[30%] right-[-10%] h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-float-slow"
        style={{ background: "var(--neon-blue)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "var(--neon-pink)", animationDelay: "-12s" }}
      />
    </div>
  );
}
