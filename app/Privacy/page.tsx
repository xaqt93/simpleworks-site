import Link from "next/link";
import type { CSSProperties } from "react";

export default function PrivacyPage() {
  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <Link href="/" style={backStyle} aria-label="Back to home">
          ← Back
        </Link>

        <h1 style={titleStyle}>Privacy Policy</h1>
        <p style={subtitleStyle}>Last updated: {new Date().toLocaleDateString()}</p>

        <div style={contentStyle}>
          <h2 style={h2Style}>The short version</h2>
          <p>
            Simple Date is built to be private by default. We don’t sell your data. We don’t use
            location services. You control what you share.
          </p>

          <h2 style={h2Style}>What we collect</h2>
          <ul>
            <li>Account info (email/phone) to run your account and keep it secure.</li>
            <li>Zip code (manually entered) to help suggest dates in a fair area.</li>
            <li>Availability and notification preferences to schedule dates you actually want.</li>
            <li>Safety contacts (if you add them) to support safety features.</li>
          </ul>

          <h2 style={h2Style}>What we don’t do</h2>
          <ul>
            <li>We do not sell personal data.</li>
            <li>We do not use your device’s GPS/location services.</li>
            <li>We do not run ads based on your personal data.</li>
          </ul>

          <h2 style={h2Style}>Where your data is stored</h2>
          <p>
            Data is stored in our backend (currently Firebase/Firestore) so the app can function
            (matching, preferences, safety contacts, notifications).
          </p>

          <h2 style={h2Style}>Deleting your data</h2>
          <p>
            You can request deletion of your account and related data. We’ll add an in-app deletion
            option before launch.
          </p>

          <h2 style={h2Style}>Contact</h2>
          <p>
            Questions? Email us at: <a href="mailto:hello@simpleworks.app" style={linkStyle}>hello@simpleworks.app</a>
          </p>

          <p style={finePrintStyle}>
            This page is a starter draft and will be refined before launch.
          </p>
        </div>
      </div>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  padding: "48px 24px",
  background:
    "radial-gradient(1200px 800px at 20% 20%, rgba(120, 220, 230, 0.55), transparent 55%), radial-gradient(900px 700px at 80% 35%, rgba(120, 160, 255, 0.45), transparent 55%), radial-gradient(900px 700px at 40% 85%, rgba(180, 120, 255, 0.28), transparent 60%), linear-gradient(180deg, #071a2d 0%, #071f33 40%, #081f35 100%)",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const cardStyle: CSSProperties = {
  width: "100%",
  maxWidth: 860,
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 28,
  padding: "28px 22px",
  boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
  backdropFilter: "blur(10px)",
};

const backStyle: CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  color: "rgba(255,255,255,0.85)",
  fontWeight: 600,
  marginBottom: 18,
};

const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(34px, 4.5vw, 46px)",
  fontWeight: 850,
  letterSpacing: "-0.02em",
};

const subtitleStyle: CSSProperties = {
  marginTop: 10,
  marginBottom: 18,
  color: "rgba(255,255,255,0.75)",
};

const contentStyle: CSSProperties = {
  marginTop: 18,
  color: "rgba(255,255,255,0.85)",
  lineHeight: 1.65,
};

const h2Style: CSSProperties = {
  marginTop: 22,
  marginBottom: 10,
  fontSize: 18,
};

const linkStyle: CSSProperties = {
  color: "white",
  textDecoration: "underline",
};

const finePrintStyle: CSSProperties = {
  marginTop: 26,
  fontSize: 13,
  color: "rgba(255,255,255,0.55)",
};