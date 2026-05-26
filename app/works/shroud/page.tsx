export default function ShroudPage() {
  return (
    <main className="work-page">
      <div className="work-shell">
        <section className="work-media">
          <img
            src="/shroud-main.jpg"
            alt="Shroud photographic study"
            className="work-image"
          />
        </section>

        <section className="work-info">
          <h1>SHROUD</h1>

          <div className="work-rule" />

          <div className="work-details">
            <p>
              <span>Sculptor</span> J. K. Campbell
            </p>
            <p>
              <span>Medium</span> Photograph
            </p>
            <p>
              <span>Dimensions</span> Variable
            </p>
            <p>
              <span>Date</span> c. 2003
            </p>
          </div>

          <div className="work-copy">
            <p>
              Shroud is a photographic study produced as part of a sculptural
              design process. The image explores concealment, presence, and the
              human form reduced to weight, cloth, posture, and silence.
            </p>

            <p>
              The seated figure is hidden beneath fabric, leaving the body
              visible only through gravity, folds, pressure, and shadow. The
              absence of the face creates a strange tension between portrait and
              object, living figure and memorial form.
            </p>

            <p>
              Further text will be developed for this work.
            </p>
          </div>

          <nav className="work-nav">
            <a href="/works">WORKS</a>
            <a href="/">HOME</a>
          </nav>
        </section>
      </div>
    </main>
  );
}