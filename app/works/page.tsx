const works = [
  { title: "Cailleach", href: "/works/cailleach", img: "/cailleach.png" },
  { title: "Heid", href: "/works/heid", img: "/heid.png" },
  { title: "Doors", href: "/works/doors", img: "/doors.png" },
  { title: "Babymaker", href: "/works/babymaker", img: "/babymaker.png" },
  { title: "Fatneck", href: "/works/fatneck", img: "/fatneck.png" },
  { title: "Shroud", href: "/works/shroud", img: "/shroud-main.jpg" },
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