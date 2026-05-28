export default function FatneckPage() {
  return (
    <main className="work-page">
      <div className="work-shell">
        <section className="work-media">
          <img
            src="/fatneckW.png"
            alt="Fatneck side view"
            className="work-image"
          />

          <img
            src="/fatneck-frontW.png"
            alt="Fatneck front view"
            className="work-image"
          />
        </section>

        <section className="work-info">
          <h1>FATNECK</h1>

          <div className="work-rule" />

          <div className="work-details">
            <p>
              <span>Sculptor</span> J. K. Campbell
            </p>
            <p>
              <span>Medium</span> Concrete
            </p>
            <p>
              <span>Dimensions</span> H 3ft × W 3ft × D 1.5ft
            </p>
            <p>
              <span>Date</span> c. 2003
            </p>
            <p>
              <span>Edition</span> Unique
            </p>
          </div>

          <div className="work-copy">
            <p>
              Fatneck sits somewhere between caricature, monument, and mask. At
              first glance the piece appears almost humorous — the exaggerated
              neck, the simplified cranial forms, the heavy compression of the
              features — yet the longer it is observed, the less comic it
              becomes. The sculpture begins to feel ceremonial, even
              architectural, as though the head has been reduced into essential
              structural masses rather than treated as portraiture in the
              traditional sense.
            </p>

            <p>
              What gives the piece strength is its refusal to chase realism. The
              forms are aggressively simplified, but not careless. Large
              uninterrupted surfaces collide with abrupt geometric cuts,
              producing a tension between softness and force. The exaggerated
              neck and jaw create an unusual sense of load-bearing weight, as
              though the figure has been shaped by pressure, repetition, and
              endurance. In this respect, the work sits closer to monumental
              expressionist portraiture and severe civic sculpture than to
              conventional portraiture.
            </p>

            <p>
              There is also a strange duality in the head, especially in
              profile. The figure appears stubborn, durable, and physically
              grounded, yet simultaneously detached and introspective. The eye
              is reduced almost to a slit beneath the brow ridge, producing a
              withdrawn internal quality rather than outward expression. This
              restraint keeps the exaggeration serious rather than comic.
            </p>

            <p>
              The work functions especially well under cinematic lighting
              because the planes are clean and deliberate. Large areas of shadow
              allow the silhouette to dominate first before details slowly
              emerge. This gives the sculpture an almost archival or
              industrial-era photographic quality, particularly when treated in
              monochrome or warm desaturated tones.
            </p>

            <p>
              The strongest aspect of the piece may be its restraint. Fatneck
              communicates identity and psychological weight with little
              descriptive detail. Mass, contour, and negative space carry the
              work rather than surface ornamentation.
            </p>

            <p>
              For me, the piece also carries thoughts around labour and
              endurance — the private battles of monotonous work, day after day,
              often for poor reward. The monumentality is turned toward the
              ordinary grafter rather than the general, the statesman, or the
              heroic figure.
            </p>

            <p>
              Conceptually, Fatneck can be read as a study of labour and
              endurance, a symbolic working-man archetype, an industrial mask, or
              simply as compressed human form under pressure. The sculpture does
              not over-explain itself. It leaves enough ambiguity for projection,
              and I hope that is part of what stays with the viewer after they
              have seen it.
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