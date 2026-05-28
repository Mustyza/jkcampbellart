const works = [
  { title: "Cailleach", href: "/works/cailleach", img: "/cailleachW.png" },
  { title: "Heid", href: "/works/heid", img: "/heidW.png" },
  { title: "Doors", href: "/works/doors", img: "/doorsW.png" },
  { title: "Babymaker", href: "/works/babymaker", img: "/babymakerW.png" },
  { title: "Fatneck", href: "/works/fatneck", img: "/fatneckW.png" },
  { title: "Shroud", href: "/works/shroud", img: "/shroud-mainW.jpg" },
  { title: "Petrospheres", href: "/works/petrospheres", img: "/balls1W.png" },
];

export default function Works() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#d8d0c0",
        padding: "3rem",
      }}
    >
      <a
        href="/"
        style={{
          color: "#8f8572",
          textDecoration: "none",
          letterSpacing: "0.12em",
        }}
      >
        ← HOME
      </a>

      <h1
        style={{
          fontFamily: "serif",
          letterSpacing: "0.25em",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        WORKS
      </h1>

      <section className="works-intro">
        <p>
          Many of the sculptures shown here were conceived with architectural space in mind —
          public building foyers, corporate interiors, private spaces, and civic settings.
          Some stand as finished works in their own right, while others may also be read as
          maquettes for larger envisioned pieces.
        </p>

        <p className="works-signature">J. K. Campbell</p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "3rem auto",
        }}
      >
        {works.map((work) => (
          <a
            key={work.title}
            href={work.href}
            style={{
              color: "#d8d0c0",
              textDecoration: "none",
            }}
          >
            <img
              src={work.img}
              alt={work.title}
              style={{
                width: "100%",
                display: "block",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              }}
            />
            <p
              style={{
                fontFamily: "serif",
                letterSpacing: "0.18em",
                textAlign: "center",
              }}
            >
              {work.title}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}