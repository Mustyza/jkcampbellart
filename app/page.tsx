export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-wrap">
        {/* DESKTOP / WIDESCREEN */}
        <img
          src="/landing.png"
          alt="J. K. Campbell Sculpture"
          className="landing-img landing-desktop"
        />

        {/* MOBILE / PHONE */}
        <div className="landing-mobile">
          <img
            src="/Landingmob.png"
            alt="J. K. Campbell Sculpture mobile landing"
            className="landing-img landing-mobile-img"
          />

          <p className="mobile-copyright">
            © J. K. Campbell. All Rights Reserved.
          </p>

          <a
            href="/works"
            aria-label="Works"
            className="mobile-hit mobile-works"
          />

          <a
            href="mailto:contact@occoltic.com"
            aria-label="Contact"
            className="mobile-hit mobile-contact"
          />
        </div>

        {/* DESKTOP INVISIBLE CLICK AREAS */}
        <a
          href="/works"
          aria-label="Works"
          className="desktop-hit desktop-works"
        />

        <a
          href="mailto:contact@occoltic.com"
          aria-label="Contact"
          className="desktop-hit desktop-contact"
        />
      </div>
    </main>
  );
}