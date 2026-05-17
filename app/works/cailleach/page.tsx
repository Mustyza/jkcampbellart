export default function CailleachPage() {
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            padding: "5rem 4rem",
            alignItems: "center",
            borderRight: "1px solid rgba(170,130,70,0.45)",
          }}
        >
          <img src="/cailleach-main.png" alt="Cailleach front view" style={imageStyle} />
          <img src="/cailleach-side.png" alt="Cailleach side view" style={imageStyle} />
        </section>

        <section
          style={{
            padding: "5rem 4rem",
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
            CAILLEACH
          </h1>

          <div
            style={{
              width: "180px",
              height: "1px",
              background: "rgba(170,130,70,0.65)",
              marginBottom: "2.5rem",
            }}
          />

          <div style={{ fontSize: "1rem", lineHeight: 1.75, color: "#c9b88e" }}>
            <p>
              The Cailleach is a figure from Scottish and Irish Gaelic folklore
              associated with winter, storms, wilderness, mountains, and the old
              rhythms of the land. She appears throughout oral tradition in many
              forms — sometimes creator, destroyer, guardian, or simply the
              spirit of the harsh northern landscape itself.
            </p>

            <p>
              The decision to represent the Cailleach in owl form came very
              early in the making of the sculpture. Only later, after becoming
              deeply immersed in the piece, did it occur to me to properly
              research whether the Cailleach had historically been associated
              with owl imagery. Very little direct folklore could be found
              confirming this beyond a handful of uncertain modern references.
              By that stage, the connection between the figure and the owl
              already felt inseparable, so the sculpture continued forward as a
              personal interpretation rather than a historical reconstruction.
            </p>

            <p>
              For me, the owl carries the feeling of winter, silence, endurance,
              watchfulness, and something ancient tied to the northern landscape.
            </p>

            <p>
              As the sculpture developed, the owl gripping the coiled oak branch
              began to symbolise something stubborn and enduring. Not a dying
              culture, but one that refuses to disappear quietly. The same
              feeling reaches beyond the inheritance of any one people. Older
              cultures throughout the world carry memory through language,
              craft, folklore, ritual, music, and connection to the land. Much
              of that now feels under pressure within a pervasive technological
              world.
            </p>

            <p>
              Yet I do not see the figure as mourning defeat. For me, she
              represents endurance. What is ancient does not vanish overnight.
              Like water moving around stone, culture adapts, survives, and
              reshapes itself while still carrying echoes of where it began.
            </p>

            <p>
              Ultimately, I leave the piece open to interpretation, and invite
              you to make of it what you will.
            </p>
          </div>

          <nav
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(170,130,70,0.45)",
              display: "flex",
              gap: "2rem",
              letterSpacing: "0.18em",
              fontSize: "0.85rem",
            }}
          >
            <a href="/works" style={linkStyle}>WORKS</a>
            <a href="/" style={linkStyle}>HOME</a>
          </nav>
        </section>
      </div>
    </main>
  );
}

const imageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  border: "1px solid rgba(170,130,70,0.55)",
  boxShadow: "0 25px 70px rgba(0,0,0,0.65)",
};

const linkStyle = {
  color: "#b8965c",
  textDecoration: "none",
};