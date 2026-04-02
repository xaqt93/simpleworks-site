import Link from "next/link";
import type { CSSProperties } from "react";

export default function HowItWorksPage() {
  return (
    <main style={pageStyle}>
      {/* Top nav */}
      <div style={topRowStyle}>
        <Link href="/" style={pillLinkStyle} aria-label="Back to home">
          ← Home
        </Link>
      </div>

      {/* Hero */}
      <section style={heroStyle}>
        <div style={badgeStyle}>How it works</div>
        <h1 style={titleStyle}>A blind date that feels… simple.</h1>
        <p style={subtitleStyle}>
          No swiping. No paywalls. No weird games. Just a calm, guided flow that gets you matched, gets you out the
          door, and (ideally) gets the app deleted.
        </p>
      </section>

      {/* Tutorial cards */}
      <section style={gridStyle}>
        <StepCard
          number="01"
          title="Set your vibe"
          icon="🧠"
          body={
            <>
              Tell Simple Date what you’re looking for, your dealbreakers, and how much notice you want before a date.
              You stay in control.
            </>
          }
          tip="Pro tip: ‘Same day’ is fun. ‘3 days’ is peaceful."
        />

        <StepCard
          number="02"
          title="Pick your week"
          icon="🗓️"
          body={
            <>
              Choose the days you’re open and the time windows that work best (morning, afternoon, evening, anytime).
              You can even pick multiple windows on the same day.
            </>
          }
          tip="If you choose ‘Anytime works’, we’ll use the other person’s window."
        />

        <StepCard
          number="03"
          title="Get matched"
          icon="✨"
          body={
            <>
              When we find someone compatible with overlapping availability, we propose a date day & time that matches
              both of you.
            </>
          }
          tip="If there’s no overlap, we don’t force it. No match is better than a bad one."
        />

        <StepCard
          number="04"
          title="Confirm + check in"
          icon="✅"
          body={
            <>
              Both people confirm. Then Simple Date uses gentle check-ins to keep things safe and make sure nobody gets
              stuck in limbo.
            </>
          }
          tip="This is not emergency services — it’s a safety layer, not a substitute."
        />

        <StepCard
          number="05"
          title="End the date, decide what’s next"
          icon="💬"
          body={
            <>
              When the date ends, you’ll get a simple prompt: <b>See them again?</b> If you both say yes, then you can
              exchange numbers.
            </>
          }
          tip="If one person ends and the other doesn’t respond, we handle it gently — and safely."
        />

        <StepCard
          number="06"
          title="Delete us (seriously)"
          icon="🧼"
          body={
            <>
              Simple Date is designed to be used and then… not needed anymore. It’s not a game. It’s a tool for real
              life.
            </>
          }
          tip="The best compliment we can get is you uninstalling."
        />
      </section>

      {/* Rules + Safety */}
      <section style={twoColWrapStyle}>
        <div style={panelStyle}>
          <h2 style={h2Style}>The vibe rules</h2>
          <ul style={listStyle}>
            <li style={liStyle}>
              <b>Be real.</b> Don’t lie about major things. If someone feels misled, they can report it.
            </li>
            <li style={liStyle}>
              <b>Show up.</b> If you can’t make it, end the date instead of ghosting.
            </li>
            <li style={liStyle}>
              <b>Respect boundaries.</b> If someone ends the date, that’s the end.
            </li>
            <li style={liStyle}>
              <b>Don’t be weird.</b> You know what that means.
            </li>
          </ul>
        </div>

        <div style={panelStyle}>
          <h2 style={h2Style}>Safety features (MVP)</h2>
          <ul style={listStyle}>
            <li style={liStyle}>
              <b>Safety contacts.</b> Add up to two trusted people.
            </li>
            <li style={liStyle}>
              <b>Check-ins.</b> Gentle prompts if a date runs long or responses are missed.
            </li>
            <li style={liStyle}>
              <b>Privacy-first.</b> We don’t need your live location. Zip code is enough for matching.
            </li>
            <li style={liStyle}>
              <b>Transparent by design.</b> No creepy data selling. Ever.
            </li>
          </ul>
          <p style={finePrintStyle}>
            Simple Date does not provide emergency services. If you are in immediate danger, call local emergency
            services.
          </p>
        </div>
      </section>

      <footer style={footerStyle}>
        <Link href="/privacy" style={footerLinkStyle}>
          Privacy
        </Link>
        <Link href="/user-agreement" style={footerLinkStyle}>
          User Agreement
        </Link>
        <Link href="/support" style={footerLinkStyle}>
          Support
        </Link>
      </footer>
    </main>
  );
}

function StepCard(props: {
  number: string;
  title: string;
  icon: string;
  body: React.ReactNode;
  tip: string;
}) {
  return (
    <article style={cardStyle}>
      <div style={cardTopStyle}>
        <div style={numberPillStyle}>{props.number}</div>
        <div style={iconStyle} aria-hidden="true">
          {props.icon}
        </div>
      </div>

      <h3 style={h3Style}>{props.title}</h3>
      <p style={bodyStyle}>{props.body}</p>
      <div style={tipStyle}>
        <span style={tipLabelStyle}>Tip</span>
        <span style={tipTextStyle}>{props.tip}</span>
      </div>
    </article>
  );
}

// Styles

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  padding: "32px 20px 48px",
  color: "rgba(255,255,255,0.92)",
  background:
    "radial-gradient(1000px 600px at 20% 10%, rgba(90, 214, 215, 0.45), transparent 60%), radial-gradient(900px 700px at 85% 25%, rgba(117, 168, 255, 0.35), transparent 55%), radial-gradient(900px 700px at 30% 95%, rgba(255, 155, 135, 0.22), transparent 60%), linear-gradient(135deg, #0b1f3a 0%, #0f2b4f 45%, #0b1f3a 100%)",
};

const topRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 980,
  margin: "0 auto",
};


const pillLinkStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.10)",
  color: "rgba(255,255,255,0.92)",
  textDecoration: "none",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  fontWeight: 600,
  letterSpacing: 0.2,
};

const heroStyle: CSSProperties = {
  maxWidth: 980,
  margin: "22px auto 18px",
  padding: "22px 18px 10px",
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: "uppercase",
};

const titleStyle: CSSProperties = {
  margin: "14px 0 8px",
  fontSize: 44,
  lineHeight: 1.08,
  letterSpacing: -0.6,
};

const subtitleStyle: CSSProperties = {
  margin: 0,
  maxWidth: 760,
  fontSize: 18,
  lineHeight: 1.6,
  opacity: 0.9,
};

const gridStyle: CSSProperties = {
  maxWidth: 980,
  margin: "10px auto 26px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 14,
  padding: "0 18px",
};

const cardStyle: CSSProperties = {
  borderRadius: 22,
  padding: 16,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
};

const cardTopStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
};

const numberPillStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: 0.8,
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
};

const iconStyle: CSSProperties = {
  fontSize: 22,
  lineHeight: "22px",
  opacity: 0.95,
};

const h3Style: CSSProperties = {
  margin: "6px 0 6px",
  fontSize: 18,
  letterSpacing: -0.2,
};

const bodyStyle: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 14.5,
  lineHeight: 1.6,
  opacity: 0.9,
};

const tipStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: 10,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
};

const tipLabelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  padding: "4px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const tipTextStyle: CSSProperties = {
  fontSize: 13,
  opacity: 0.9,
};

const twoColWrapStyle: CSSProperties = {
  maxWidth: 980,
  margin: "6px auto 20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 14,
  padding: "0 18px",
};

const panelStyle: CSSProperties = {
  borderRadius: 22,
  padding: 18,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
};

const h2Style: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 18,
  letterSpacing: -0.2,
};

const listStyle: CSSProperties = {
  margin: 0,
  paddingLeft: 18,
};

const liStyle: CSSProperties = {
  margin: "8px 0",
  lineHeight: 1.55,
  opacity: 0.92,
};

const finePrintStyle: CSSProperties = {
  marginTop: 12,
  fontSize: 12.5,
  lineHeight: 1.5,
  opacity: 0.75,
};

const footerStyle: CSSProperties = {
  maxWidth: 980,
  margin: "34px auto 0",
  padding: "0 18px",
  display: "flex",
  justifyContent: "center",
  gap: 16,
  flexWrap: "wrap",
};

const footerLinkStyle: CSSProperties = {
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.01em",
};