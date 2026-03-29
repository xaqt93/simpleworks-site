

import Link from "next/link";

export default function WaitlistPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        background:
          "radial-gradient(circle at top, rgba(85,180,255,0.22), transparent 32%), linear-gradient(180deg, #07111f 0%, #0b1f36 48%, #0f2c4a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 999,
            marginBottom: 22,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.82)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Orlando early access
        </div>

        <h1
          style={{
            margin: "0 0 14px",
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            fontWeight: 800,
          }}
        >
          Join the Simple Date waitlist.
        </h1>

        <p
          style={{
            maxWidth: 620,
            margin: "0 auto 30px",
            fontSize: "clamp(17px, 2.2vw, 20px)",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          Be first to know when Simple Date launches in Orlando. Drop your email below and we’ll keep you in the loop.
        </p>

        <div
          style={{
            margin: "0 auto 24px",
            padding: "24px",
            maxWidth: 620,
            borderRadius: 28,
            background: "rgba(255,255,255,0.11)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            textAlign: "left",
          }}
        >
          <label
            htmlFor="waitlist-email"
            style={{
              display: "block",
              marginBottom: 10,
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            Email address
          </label>

          <input
            id="waitlist-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(7, 26, 45, 0.42)",
              color: "white",
              fontSize: 16,
              outline: "none",
              boxSizing: "border-box",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          />

          <p
            style={{
              margin: "12px 0 18px",
              fontSize: 14,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.62)",
            }}
          >
            We’ll wire this into Firebase next so signups save straight to your waitlist collection.
          </p>

          <button type="button" style={primaryButtonStyle}>
            Join Waitlist
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={pillStyle}>
            Back Home
          </Link>
          <Link href="/howitworks" style={pillStyle}>
            How it works
          </Link>
        </div>
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
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "white",
  textDecoration: "none",
  minWidth: 150,
  fontWeight: 600,
  fontSize: 16,
};

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "15px 20px",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,0.22)",
  background:
    "linear-gradient(135deg, rgba(120,220,230,0.9) 0%, rgba(120,160,255,0.92) 100%)",
  color: "#041525",
  fontSize: 16,
  fontWeight: 800,
  letterSpacing: "0.01em",
  cursor: "pointer",
  boxShadow: "0 14px 30px rgba(64, 146, 255, 0.28)",
};