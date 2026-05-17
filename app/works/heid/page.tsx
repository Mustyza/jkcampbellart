export default function HeidPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0d0d0c",
        color: "#c8b48a",
        padding: "2rem",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          border: "1px solid rgba(170,130,70,0.45)",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          minHeight: "90vh",
        }}
      >
        <section
          style={{
            padding: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid rgba(170,130,70,0.45)",
          }}
        >
          <img
            src="/heid-main.png"
            alt="Heid sculpture"
            style={{
              width: "100%",
              maxHeight: "78vh",
              objectFit: "contain",
              border: "1px solid rgba(170,130,70,0.55)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.65)",
            }}
          />
        </section>

        <section
          style={{
            padding: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              letterSpacing: "0.22em",
              fontWeight: 400,
              margin: "0 0 2rem",
              color: "#d4b16f",
            }}
          >
            HEID
          </h1>

          <div
            style={{
              width: "180px",
              height: "1px",
              background: "rgba(170,130,70,0.65)",
              marginBottom: "2rem",
            }}
          />

          <div
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: "#c9b88e",
            }}
          >
            <p>
              Heid reflects on the relentless physical labour endured throughout
              human history, particularly during the industrial age, where entire
              populations of men, women, and children were absorbed into systems
              built around production, repetition, and economic output. The
              sculpture explores the idea of human beings gradually reduced into
              automatons — valued primarily for function, endurance, and
              productivity within factories, industries, and labour systems that
              demanded continuous physical sacrifice.
            </p>

            <p>
              The compressed geometric forms surrounding the head suggest
              pressure, control, routine, and mechanical structure, while the
              human face remains partially visible beneath them. The figure
              exists somewhere between person and machine, shaped by systems
              that seek efficiency over individuality and obedience over thought.
            </p>

            <p>
              The work reflects on how industrial society often reframed forms
              of exploitation as opportunity, presenting relentless labour as
              progress while reducing people to economic utility. In many cases,
              what was surrendered was not only physical strength, but time
              itself — time taken from fathers and mothers, husbands and wives,
              and from children who grew up in the shadow of labour systems that
              demanded life in exchange for survival. Shelter, sustenance, and
              employment were offered in return, yet often at the cost of
              personal freedom, human presence, and the quiet erosion of the
              individual spirit.
            </p>

            <p>
              Although rooted in the industrial past, the sculpture also speaks
              to the present moment. As physical labour once shaped the machine
              age, emerging technologies and artificial intelligence now
              introduce a new paradox — one in which human physical graft risks
              becoming increasingly devalued by systems driven by automation,
              efficiency, and digital control. The masters may have changed
              form, from industrial machinery to algorithmic systems, yet the
              underlying tension remains familiar: the reduction of human beings
              toward economic function within structures larger than themselves.
            </p>

            <p>
              The work also reflects on the mechanisation of conflict throughout
              modern history. Just as the machine gun transformed the First World
              War and mechanised divisions reshaped the battlefields of the
              Second, contemporary digital warfare increasingly distances human
              beings from the direct reality of violence itself. Autonomous
              systems, remote technologies, and drone warfare suggest another
              stage in the long evolution of industrialised power — where
              individuals risk becoming components within vast technological
              structures directed far beyond their control.
            </p>

            <p>
              Yet despite this pressure, the sculpture retains an inner sense of
              awareness beneath its rigid structure. The expression is
              intentionally restrained, suggesting endurance, observation, and
              the persistence of an internal life that cannot be fully
              mechanised. Beneath systems, routine, labour, warfare, and
              technological change, the individual mind remains sovereign —
              carrying memory, imagination, and what might be described as a
              private universe within.
            </p>

            <p>
              The surface remains tactile and imperfect, preserving the physical
              evidence of handwork and material process. This is central to the
              piece. Although Heid engages with themes of mechanisation and
              industrial control, it remains grounded in human craft, physical
              labour, and the enduring presence of individual consciousness
              beneath imposed systems.
            </p>
          </div>

          <blockquote
            style={{
              marginTop: "2rem",
              color: "#d4a45f",
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            “Paid fae the heid doon, son!
            <br />
            Git back tae wurk!”
          </blockquote>

          <nav
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(170,130,70,0.45)",
              display: "flex",
              gap: "2rem",
              letterSpacing: "0.18em",
              fontSize: "0.85rem",
            }}
          >
            <a href="/works" style={linkStyle}>
              WORKS
            </a>
            <a href="/" style={linkStyle}>
              HOME
            </a>
          </nav>
        </section>
      </div>
    </main>
  );
}

const linkStyle = {
  color: "#b8965c",
  textDecoration: "none",
};