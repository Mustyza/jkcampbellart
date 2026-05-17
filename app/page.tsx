export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        flexDirection: "column",
      }}
    >
      <img
        src="/landing.png"
        alt="J. K. Campbell Sculpture"
        style={{
          width: "100%",
          maxWidth: "1600px",
          height: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      />

      <a
        href="mailto:contact@occoltic.com"
        style={{
          marginTop: "1.5rem",
          color: "#8f8572",
          textDecoration: "none",
          fontSize: "0.85rem",
          letterSpacing: "0.08em",
          fontFamily: "serif",
        }}
      >
        Contact — contact@occoltic.com
      </a>
    </main>
  );
}