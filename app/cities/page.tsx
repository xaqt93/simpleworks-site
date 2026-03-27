import Link from "next/link";
import type { CSSProperties } from "react";

const launchGroups = [
  {
    season: "Launching April 25, 2026",
    title: "Orlando goes first",
    description:
      "Simple Date is launching city by city on purpose — starting with Orlando, where the first real dates begin.",
    highlight: true,
    cities: ["Orlando, FL"],
  },
  {
    season: "Summer 2026",
    title: "Next up",
    description:
      "The first expansion wave is all about warm-weather cities, weekend energy, and getting more people off the apps and into real life.",
    cities: ["Nashville, TN", "Austin, TX", "Tampa, FL", "Miami, FL"],
  },
  {
    season: "Fall 2026",
    title: "The big expansion",
    description:
      "This is where the map starts to feel real. Bigger metros, more coverage, and a lot more chances for the right people to cross paths.",
    cities: [
      "Dallas, TX",
      "San Francisco Bay Area, CA",
      "Denver, CO",
      "Atlanta, GA",
      "San Diego, CA",
    ],
  },
  {
    season: "Winter 2027",
    title: "Quietly growing",
    description:
      "A mix of southwest cities and hometown-feeling markets that deserve a dating app that actually feels human.",
    cities: [
      "Phoenix, AZ",
      "El Paso, TX",
      "Albuquerque, NM",
      "Mission Viejo, CA",
      "Sacramento, CA",
    ],
  },
  {
    season: "Spring 2027",
    title: "A much bigger map",
    description:
      "By spring, Simple Date starts stretching coast to coast — bigger cities, more momentum, and a lot more anticipation.",
    cities: [
      "Portland, OR",
      "Seattle, WA",
      "Chicago, IL",
      "New York City, NY",
      "St. Louis, MO",
      "Columbus, OH",
      "Los Angeles, CA",
      "Las Vegas, NV",
    ],
  },
];

export default function CitiesPage() {
  return (
    <main style={pageStyle}>
      <div style={glowOrbOneStyle} />
      <div style={glowOrbTwoStyle} />

      <div style={shellStyle}>
        <div style={topRowStyle}>
          <Link href="/" style={pillLinkStyle} aria-label="Back to home">
            ← Home
          </Link>

          <div style={topRightStyle}>
            <Link href="/howitworks" style={pillLinkStyle}>
              How it works
            </Link>
            <Link href="/privacy" style={pillLinkStyle}>
              Privacy
            </Link>
          </div>
        </div>

        <section style={heroStyle}>
          <div style={badgeStyle}>Available Cities</div>
          <h1 style={titleStyle}>Launching city by city.</h1>
          <p style={subtitleStyle}>
            Orlando is first. Then we grow from there — one city, one launch wave, and a lot of real dates at a time.
          </p>
        </section>

        <section style={heroCardStyle}>
          <div style={heroCardTopStyle}>
            <div>
              <p style={heroEyebrowStyle}>First launch city</p>
              <h2 style={heroCardTitleStyle}>Orlando, FL</h2>
              <p style={heroCardTextStyle}>
                April 25, 2026. That’s where Simple Date stops being an idea and becomes reality. 
              </p>
            </div>

            <div style={launchBadgeWrapStyle}>
              <div style={launchBadgeStyle}>April 25, 2026</div>
              <div style={launchPulseStyle}>
                <span style={pulseDotStyle} />
                First launch wave
              </div>
            </div>
          </div>
        </section>

        <section style={timelineWrapStyle}>
          {launchGroups.map((group) => (
            <article
              key={group.season}
              style={{
                ...timelineCardStyle,
                ...(group.highlight ? highlightCardStyle : null),
              }}
            >
              <div style={timelineCardTopStyle}>
                <div>
                  <div style={seasonPillStyle}>{group.season}</div>
                  <h2 style={groupTitleStyle}>{group.title}</h2>
                  <p style={groupDescriptionStyle}>{group.description}</p>
                </div>
              </div>

              <div style={cityGridStyle}>
                {group.cities.map((city) => (
                  <div
                    key={city}
                    style={{
                      ...cityChipStyle,
                      ...(group.highlight ? highlightChipStyle : null),
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section style={bottomNoteWrapStyle}>
          <div style={bottomNoteCardStyle}>
            <h2 style={bottomNoteTitleStyle}>More cities are coming.</h2>
            <p style={bottomNoteTextStyle}>
              We’re rolling this out in waves so the experience stays intentional, polished, and worth the wait.
            </p>
            <div style={bottomButtonsStyle}>
              <Link href="/" style={ctaButtonStyle}>
                Back Home
              </Link>
              <Link href="/howitworks" style={ctaButtonGhostStyle}>
                How it works
              </Link>
            </div>
          </div>
        </section>

        <footer style={footerStyle}>
          <span style={{ opacity: 0.9 }}>© {new Date().getFullYear()} Simple Date</span>
          <span style={{ opacity: 0.7 }}>Built to feel human.</span>
        </footer>
      </div>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  padding: "32px 20px 48px",
  color: "rgba(255,255,255,0.92)",
  background:
    "radial-gradient(1000px 600px at 20% 10%, rgba(90, 214, 215, 0.45), transparent 60%), radial-gradient(900px 700px at 85% 25%, rgba(117, 168, 255, 0.35), transparent 55%), radial-gradient(900px 700px at 30% 95%, rgba(255, 155, 135, 0.22), transparent 60%), linear-gradient(135deg, #0b1f3a 0%, #0f2b4f 45%, #0b1f3a 100%)",
  position: "relative",
  overflow: "hidden",
};

const shellStyle: CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const glowOrbOneStyle: CSSProperties = {
  position: "absolute",
  top: 140,
  left: -120,
  width: 280,
  height: 280,
  borderRadius: "50%",
  background: "rgba(100, 215, 225, 0.16)",
  filter: "blur(60px)",
  pointerEvents: "none",
};

const glowOrbTwoStyle: CSSProperties = {
  position: "absolute",
  top: 420,
  right: -120,
  width: 300,
  height: 300,
  borderRadius: "50%",
  background: "rgba(137, 165, 255, 0.14)",
  filter: "blur(70px)",
  pointerEvents: "none",
};

const topRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1080,
  margin: "0 auto",
  gap: 12,
  flexWrap: "wrap",
};

const topRightStyle: CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
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
  maxWidth: 1080,
  margin: "28px auto 18px",
  padding: "10px 8px 0",
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
  fontSize: "clamp(38px, 7vw, 62px)",
  lineHeight: 1.02,
  letterSpacing: -1.2,
  maxWidth: 760,
};

const subtitleStyle: CSSProperties = {
  margin: 0,
  maxWidth: 720,
  fontSize: "clamp(17px, 2vw, 20px)",
  lineHeight: 1.65,
  opacity: 0.9,
};

const heroCardStyle: CSSProperties = {
  maxWidth: 1080,
  margin: "0 auto 18px",
  padding: "24px 22px",
  borderRadius: 28,
  border: "1px solid rgba(255,255,255,0.16)",
  background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "0 24px 60px rgba(0,0,0,0.24)",
};

const heroCardTopStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
  flexWrap: "wrap",
};

const heroEyebrowStyle: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.64)",
};

const heroCardTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(28px, 5vw, 42px)",
  lineHeight: 1.04,
  letterSpacing: -0.8,
};

const heroCardTextStyle: CSSProperties = {
  margin: "10px 0 0",
  maxWidth: 620,
  fontSize: 15.5,
  lineHeight: 1.65,
  opacity: 0.88,
};

const launchBadgeWrapStyle: CSSProperties = {
  display: "grid",
  gap: 10,
  minWidth: 210,
};

const launchBadgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 16px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.14)",
  fontWeight: 700,
  textAlign: "center",
};

const launchPulseStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  fontSize: 13,
  fontWeight: 600,
  color: "rgba(255,255,255,0.86)",
};

const pulseDotStyle: CSSProperties = {
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: "#9df0ff",
  boxShadow: "0 0 0 8px rgba(157,240,255,0.14)",
};

const timelineWrapStyle: CSSProperties = {
  maxWidth: 1080,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 16,
};

const timelineCardStyle: CSSProperties = {
  borderRadius: 24,
  padding: 20,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.2)",
  minHeight: 250,
  display: "flex",
  flexDirection: "column",
};

const highlightCardStyle: CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(118, 208, 255, 0.12))",
  border: "1px solid rgba(180, 235, 255, 0.28)",
};

const timelineCardTopStyle: CSSProperties = {
  marginBottom: 18,
};

const seasonPillStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "7px 11px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.76)",
};

const groupTitleStyle: CSSProperties = {
  margin: "14px 0 8px",
  fontSize: 26,
  lineHeight: 1.08,
  letterSpacing: -0.5,
};

const groupDescriptionStyle: CSSProperties = {
  margin: 0,
  fontSize: 14.5,
  lineHeight: 1.65,
  opacity: 0.85,
};

const cityGridStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginTop: "auto",
};

const cityChipStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 14px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 1.3,
};

const highlightChipStyle: CSSProperties = {
  background: "rgba(255,255,255,0.18)",
  border: "1px solid rgba(255,255,255,0.24)",
};

const bottomNoteWrapStyle: CSSProperties = {
  maxWidth: 1080,
  margin: "18px auto 0",
};

const bottomNoteCardStyle: CSSProperties = {
  borderRadius: 28,
  padding: "22px 20px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 16px 46px rgba(0,0,0,0.22)",
};

const bottomNoteTitleStyle: CSSProperties = {
  margin: 0,
  fontSize: 24,
  letterSpacing: -0.4,
};

const bottomNoteTextStyle: CSSProperties = {
  margin: "8px 0 16px",
  fontSize: 15,
  opacity: 0.88,
  lineHeight: 1.65,
  maxWidth: 680,
};

const bottomButtonsStyle: CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const ctaButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.14)",
  color: "rgba(255,255,255,0.92)",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaButtonGhostStyle: CSSProperties = {
  ...ctaButtonStyle,
  background: "rgba(255,255,255,0.08)",
};

const footerStyle: CSSProperties = {
  maxWidth: 1080,
  margin: "18px auto 0",
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
  fontSize: 13,
  opacity: 0.85,
};