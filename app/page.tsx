export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#111" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
        <img src="/landing.png" alt="J. K. Campbell Sculpture" style={{ width: "100%", display: "block" }} />

        <a href="/works" aria-label="Works" style={{
          position: "absolute", top: "4%", left: "6%", width: "10%", height: "5%", display: "block"
        }} />

        <a href="mailto:contact@occoltic.com" aria-label="Contact" style={{
          position: "absolute", top: "4%", right: "6%", width: "12%", height: "5%", display: "block"
        }} />
      </div>
    </main>
  );
}