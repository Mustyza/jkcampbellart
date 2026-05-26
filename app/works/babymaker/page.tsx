export default function BabymakerPage() {
  return (
    <main className="work-page">
      <div
        className="work-shell"
        style={{
          gridTemplateColumns: "1.45fr 1.35fr",
        }}
      >
        <section className="work-media work-media-two">
          <img
            src="/babymaker-frontW.png"
            alt="Babymaker front"
            className="work-image"
            style={{
              objectFit: "contain",
              alignSelf: "center",
            }}
          />

          <img
            src="/babymaker-sideW.png"
            alt="Babymaker side"
            className="work-image"
            style={{
              objectFit: "contain",
              alignSelf: "center",
            }}
          />
        </section>

        <section className="work-info">
          <h1>BABYMAKER</h1>

       <div className="work-rule" />

  <div className="work-details">
    <p>
      <span>Sculptor</span> J. K. Campbell
    </p>
    <p>
      <span>Medium</span> Bronze
    </p>
    <p>
      <span>Dimensions</span> H 4ft × W 2ft × D 2.5ft
    </p>
    <p>
      <span>Date</span> c. 2003
    </p>
    <p>
      <span>Edition</span> Edition of 3
    </p>
  </div>

  <div className="work-copy">

So the order should be:

            <p>
              Babymaker is a bronze sculpture concerned with creation,
              fertility, and the ancient image of the mother. Standing at around
              four feet high, the work carries the presence of something older
              than portraiture: part earth figure, part idol, part surviving
              fragment of a forgotten ritual object. The title is deliberately
              blunt, almost crude, yet that directness gives the piece much of
              its force. It refuses to dress motherhood in polite language.
              Instead, it presents the mother as physical, generative,
              enduring, and elemental.
            </p>

            <p>
              The sculpture draws quietly on the long human memory of mother
              figures — Mother Earth, Isis, Inanna, and the many unnamed women
              and goddesses through whom cultures have imagined life itself
              taking form. Yet Babymaker is not soft or sentimental. Its
              strength lies in the tension between fertility and severity. The
              body appears protective and abundant, but also marked by weight,
              pressure, and consequence. The figure seems to stride forward like
              a mother coming to scold her unruly children. Along the back, the
              jagged ridge rises like a bristling spine. It is not simply a
              wound or scar, but Mother Earth with her back up — angered by the
              behaviour of her current offspring, humanity.
            </p>

            <p>
              There is something powerful in the way the work treats creation
              not as comfort, but as force. It hints at the old truth that
              destruction and renewal are not opposites, but parts of the same
              turning. Here, Mother Earth is not passive or endlessly forgiving;
              she appears as a force of judgement against humanity’s blatant
              disregard for the planet, against a world treated as little more
              than a resource to be drained for profit, along with the souls
              trapped within — and forced to serve — that ravenous insanity.
              Life does not move in a clean straight line; it coils, returns,
              breaks, reforms, and begins again. In that sense, Babymaker
              belongs to the spiral more than the circle: a motion of energy
              passing through matter, loss, birth, and return. In bronze, it has
              the feeling of an object built to endure — not merely as
              sculpture, but as a statement about origin, survival, and the
              difficult dignity of bringing life into a damaged world.
            </p>
          </div>

          <nav className="work-nav">
            <a href="/">HOME</a>
            <a href="mailto:contact@occoltic.com">CONTACT</a>
          </nav>
        </section>
      </div>
    </main>
  );
}
