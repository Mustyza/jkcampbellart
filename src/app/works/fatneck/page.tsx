import Link from "next/link";

export default function FatneckPage() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#e6dcc7]">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-16">
        <div>
          <img
            src="/works/fatneck.jpg"
            alt="Fatneck sculpture by J. K. Campbell"
            className="w-full border border-[#b89b5e]/25 object-cover grayscale"
          />
        </div>

        <aside className="flex flex-col justify-between border-l border-[#b89b5e]/30 pl-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b89b5e]">
              J. K. Campbell
            </p>

            <h1 className="text-3xl font-light tracking-[0.18em] md:text-5xl">
              FATNECK
            </h1>

            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8f846e]">
              Carved sculpture · 2019
            </p>

            <div className="mt-10 space-y-5 text-sm leading-7 text-[#cfc4ad]">
              <p>
                Fatneck is a compact modernist head sculpture, reduced into
                broad planes, compressed profile, and heavy mass.
              </p>

              <p>
                The work sits between caricature, monument, and mask. Its
                exaggerated neck and simplified facial structure give it a
                blunt physical presence while retaining a quiet, sculptural
                restraint.
              </p>
            </div>
          </div>

          <Link
            href="/works"
            className="mt-10 text-xs uppercase tracking-[0.28em] text-[#b89b5e] hover:text-[#e6dcc7]"
          >
            Back to Works
          </Link>
        </aside>
      </section>
    </main>
  );
}