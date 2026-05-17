import Image from "next/image";
import Link from "next/link";

const works = [
  {
    title: "Fatneck",
    href: "/works/fatneck",
    image: "/works/fatneck.png",
    type: "Sculpture",
    year: "2026",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#d8d0bd]">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="mb-10 border-b border-[#3a3327] pb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-[#8f8068]">
            J. K. Campbell
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.22em] text-[#e7dfcf] sm:text-5xl">
            Works
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a99d89] sm:text-base">
            Selected sculptural works. Each piece is shown as an individual
            object rather than decoration, with restrained presentation and
            direct access to the full work page.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group block border border-[#2c271f] bg-[#11100d] transition duration-300 hover:border-[#7b6a4e]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h2 className="text-xl font-light uppercase tracking-[0.18em] text-[#e4dccb]">
                    {work.title}
                  </h2>

                  <span className="text-xs tracking-[0.22em] text-[#847862]">
                    {work.year}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.32em] text-[#8d816d]">
                  {work.type}
                </p>

                <p className="mt-5 text-sm text-[#b4aa97] transition group-hover:text-[#e4dccb]">
                  View work
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}