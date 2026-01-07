import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background:
          "radial-gradient(1200px 800px at 20% 20%, rgba(120, 220, 230, 0.55), transparent 55%), radial-gradient(900px 700px at 80% 35%, rgba(120, 160, 255, 0.45), transparent 55%), radial-gradient(900px 700px at 40% 85%, rgba(180, 120, 255, 0.28), transparent 60%), linear-gradient(180deg, #071a2d 0%, #071f33 40%, #081f35 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            margin: "0 auto 20px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
          }}
        >
          <img
              src="/simple-date-icon.png"
              alt="Simple Date app icon"
              style={{
                width: 56,
                height: 56,
              borderRadius: 14,
              }}
/>
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 6vw, 64px)",
            margin: 0,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Simple Date
        </h1>

        <p
          style={{
            marginTop: 16,
            marginBottom: 28,
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
          }}
        >
          Because dating should feel human again.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/how-it-works" style={pillStyle}>
            How it works
          </Link>
          <Link href="/privacy" style={pillStyle}>
            Privacy
          </Link>
        </div>

        <p
          style={{
            marginTop: 36,
            fontSize: 14,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Coming soon.
        </p>
      </div>
    </main>
  );
}

const pillStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "white",
  textDecoration: "none",
  fontWeight: 600,
};