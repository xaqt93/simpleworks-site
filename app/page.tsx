"use client";

import Link from "next/link";
import React, { useState } from "react";

const appStoreShots = [
  "/app-store/App Store Screen Shot 0.png",
  "/app-store/App Store Screen Shot 1.png",
  "/app-store/App Store Screen Shot 2.png",
  "/app-store/App Store Screen Shot 3.png",
  "/app-store/App Store Screen Shot 4.png",
  "/app-store/App Store Screen Shot 5.png",
];

export default function Home() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 20px 72px",
        background:
          "radial-gradient(1200px 800px at 20% 20%, rgba(120, 220, 230, 0.55), transparent 55%), radial-gradient(900px 700px at 80% 35%, rgba(120, 160, 255, 0.45), transparent 55%), radial-gradient(900px 700px at 40% 85%, rgba(180, 120, 255, 0.28), transparent 60%), linear-gradient(180deg, #071a2d 0%, #071f33 40%, #081f35 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 980 }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "auto minmax(0, 1fr) auto",
            gap: 22,
            alignItems: "center",
            marginBottom: 18,
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 28,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.24)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src="/simple-date-icon.png"
              alt="Simple Date app icon"
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
              }}
            />
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 999,
                marginBottom: 14,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.88)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              Now Live in Orlando, FL
            </div>

            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 58px)",
                margin: "0 0 8px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Simple Date
            </h1>

            <p
              style={{
                margin: "0 0 8px",
                fontSize: "clamp(17px, 2.2vw, 22px)",
                color: "rgba(255,255,255,0.84)",
                lineHeight: 1.45,
                maxWidth: 560,
              }}
            >
              Because dating should feel human again.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.5,
              }}
            >
              Lifestyle • Blind-date inspired • Built for iPhone • Orlando, FL
            </p>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 700,
              minWidth: 132,
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.22)",
              whiteSpace: "nowrap",
              cursor: "not-allowed",
            }}
          >
            Coming soon
          </div>
        </section>

        <section
          style={{
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: "22px 22px 20px",
              borderRadius: 28,
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.16)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              textAlign: "left",
              marginBottom: 18,
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.68)",
              }}
            >
              App Description
            </p>

            <p
              style={{
                margin: "0 0 14px",
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.6,
              }}
            >
              No swiping. No profiles. Just real dates. We set it up—you just show up.
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                maxWidth: 760,
              }}
            >
              Dating should feel human again.
            </h2>

            {isDescriptionExpanded ? (
              <>
                <p
                  style={{
                    margin: "18px 0 14px",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.82)",
                    maxWidth: 760,
                  }}
                >
                  No swiping. No endless chatting. No guessing. Simple Date sets up real dates—so you can just show up.
                </p>

                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.74)",
                    maxWidth: 760,
                  }}
                >
                  Tell us when you’re available. We match you with someone compatible. A date is set at a real place. You meet in person. That’s it.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginBottom: 16,
                    maxWidth: 760,
                  }}
                >
                  {[
                    "No profiles to judge",
                    "One match at a time",
                    "Built to get you off the app and into real life",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 16,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    margin: "0 0 14px",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.62)",
                    maxWidth: 760,
                  }}
                >
                  We do not verify users or run background checks. Always use your best judgment when meeting someone new.
                </p>

                <p
                  style={{
                    margin: "0 0 18px",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.78)",
                    fontWeight: 600,
                    maxWidth: 760,
                  }}
                >
                  Currently available in Orlando, Florida. More cities coming soon.
                </p>
              </>
            ) : null}

            <button
              type="button"
              onClick={() => setIsDescriptionExpanded((value) => !value)}
              style={{
                marginTop: isDescriptionExpanded ? 0 : 18,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "white",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.14)",
              }}
            >
              {isDescriptionExpanded ? "Show Less" : "Read More"}
            </button>
          </div>

          <div
            style={{
              padding: "22px 22px 20px",
              borderRadius: 28,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  Screenshots
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 14,
                overflowX: "auto",
                overflowY: "hidden",
                paddingBottom: 6,
                scrollSnapType: "x proximity",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {appStoreShots.map((shot, index) => (
                <div
                  key={shot}
                  style={{
                    flex: "0 0 180px",
                    borderRadius: 24,
                    padding: 8,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    scrollSnapAlign: "start",
                  }}
                >
                  <img
                    src={shot}
                    alt={`Simple Date screenshot ${index + 1}`}
                    style={{
                      width: "100%",
                      aspectRatio: "1290 / 2796",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 980,
            margin: "0",
          }}
        >
          <Link href="/howitworks" style={pillStyle}>
            How it Works
          </Link>
          <Link href="/cities" style={pillStyle}>
            City Roadmap
          </Link>
          <Link href="/waitlist" style={pillStyle}>
            Join Waitlist
          </Link>
        </div>

        <div
          style={{
            marginTop: 34,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/privacy" style={footerLinkStyle}>
            Privacy
          </Link>
          <Link href="/user-agreement" style={footerLinkStyle}>
            User Agreement
          </Link>
          <Link href="/support" style={footerLinkStyle}>
            Support
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
  padding: "13px 20px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "white",
  textDecoration: "none",
  minWidth: 180,
  fontWeight: 600,
  backdropFilter: "blur(8px)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
};

const footerLinkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.01em",
};