"use client";

export function Hero({ projectCount }: { projectCount: number }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                              linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {projectCount} projects live
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Everything I build,
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            in one place.
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          A living directory of projects, experiments, and products.
          Explore, click through, and see what's next.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-indigo-100 hover:shadow-lg hover:shadow-indigo-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Browse projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
