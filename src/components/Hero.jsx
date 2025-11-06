import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <Star className="h-3.5 w-3.5" /> Curated digital resources
        </span>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Buy premium PDFs and digital files from trusted creators
        </h2>
        <p className="max-w-2xl text-pretty text-sm text-gray-600 md:text-base">
          Explore study guides, design templates, business playbooks and more. Instant access after purchase.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#catalog" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
            Browse catalog
          </a>
          <a href="#how" className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
            How it works
          </a>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {["Secure checkout", "Instant delivery", "Quality checked", "Lifetime access"].map((t) => (
            <div key={t} className="rounded-xl border border-gray-200 bg-white p-3 text-center text-xs text-gray-600">
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-32 bg-gradient-to-t from-white" />
    </section>
  );
}
