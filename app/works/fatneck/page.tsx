export default function FatneckPage() {
  return (
    <main className="work-page">
      <div className="work-shell">
        <section className="work-media">
          <img
            src="/fatneck.png"
            alt="Fatneck side view"
            className="work-image"
          />

          <img
            src="/fatneck-front.png"
            alt="Fatneck front view"
            className="work-image"
          />
        </section>

        <section className="work-info">
          <h1>FATNECK</h1>

          <div className="work-rule" />

          <div className="work-details">
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
              neck and jaw structure create an unusual sense of load-bearing
              weight, almost like a column supporting an overbuilt ideological
              structure above it. In this respect the work quietly recalls
              aspects of German Expressionist sculpture and early monumental
              modernist design — where psychological presence mattered more than
              anatomical fidelity.
            </p>

            <p>
              There is also a strange duality in the head, especially in
              profile. The figure appears stubborn, durable, and physically
              grounded, yet simultaneously detached and introspective. The eye
              is reduced almost to a slit beneath the brow ridge, producing a
              withdrawn internal quality rather than outward expression. This
              restraint prevents the sculpture from collapsing into parody. A
              lesser treatment of the same exaggeration could easily have become
              cartoonish, but here the massing and rhythm maintain seriousness.
            </p>

            <p>
              The work functions especially well under cinematic lighting
              because the planes are clean and deliberate. Large areas of shadow
              allow the silhouette to dominate first before details slowly
              emerge. This gives the sculpture an almost archival or
              industrial-era photographic quality, particularly when treated in
              monochrome or warm desaturated tones. The Bauhaus and
              Expressionist associations emerge naturally from the structure
              itself rather than from decorative styling applied afterwards.
            </p>

            <p>
              From a sculptural standpoint, the strongest aspect may be the
              economy of information. The piece communicates identity and
              psychological weight with remarkably little descriptive detail.
              There is confidence in allowing mass, contour, and negative space
              to carry the work rather than surface ornamentation. That
              restraint is usually a sign that the maker understands form
              structurally rather than illustratively.
            </p>

            <p>Conceptually, Fatneck can be read several ways:</p>

            <ul>
              <li>as a study of labour and endurance,</li>
              <li>as a symbolic “working man” archetype,</li>
              <li>as an industrial mask,</li>
              <li>
                or simply as an exploration of compressed human form under
                pressure.
              </li>
            </ul>

            <p>
              Importantly, the sculpture does not over-explain itself. It leaves
              enough ambiguity for projection, which is one reason it remains
              memorable after viewing.
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