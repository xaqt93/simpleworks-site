"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

const launchDate = new Date("2026-04-25T00:00:00-04:00");

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getMissingFirebaseConfig() {
  return Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);
}

function createWaitlistDocumentId(email: string) {
  return email.toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function formatTimeLeft() {
  const now = new Date();
  const difference = launchDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistMessage, setWaitlistMessage] = useState("");
  const [waitlistMessageType, setWaitlistMessageType] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  async function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = waitlistEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setWaitlistMessage("Enter your email to join the waitlist.");
      setWaitlistMessageType("error");
      return;
    }

    if (!emailRegex.test(email)) {
      setWaitlistMessage("That email doesn’t look quite right.");
      setWaitlistMessageType("error");
      return;
    }

    try {
      setIsSubmitting(true);
      setWaitlistMessage("");
      setWaitlistMessageType("idle");

      const missingConfig = getMissingFirebaseConfig();

      if (missingConfig.length > 0) {
        throw new Error(`Missing Firebase config: ${missingConfig.join(", ")}`);
      }

      const documentId = createWaitlistDocumentId(email);
      const endpoint = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/waitlist/${documentId}?key=${firebaseConfig.apiKey}`;

      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            email: { stringValue: email },
            source: { stringValue: "website" },
            createdAt: { stringValue: new Date().toISOString() },
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to save waitlist entry.");
      }

      setWaitlistMessage("You’re on the waitlist 🎉");
      setWaitlistEmail("");
      setWaitlistMessageType("success");
    } catch (error) {
      console.error("Failed to join waitlist:", error);
      setWaitlistMessage("Something went wrong. Please try again.");
      setWaitlistMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <div style={{ textAlign: "left", marginBottom: 16 }}>
          <Link href="/" style={footerLinkStyle}>
            ← Back
          </Link>
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 5vw, 56px)",
            margin: 0,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Support
        </h1>

        <p
          style={{
            marginTop: 12,
            marginBottom: 24,
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
          }}
        >
          Need help with Simple Date? You’re in the right place.
        </p>

        <div style={{ textAlign: "left", marginTop: 24 }}>
          <h2 style={sectionHeaderStyle}>Contact Support</h2>
          <p style={textStyle}>
            For any questions, issues, or account concerns, email us at:
          </p>
          <p style={{ ...textStyle, fontWeight: 600 }}>
            support@simpleworks.app
          </p>
        </div>

        <div style={{ textAlign: "left", marginTop: 32 }}>
          <h2 style={sectionHeaderStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "How does Simple Date work?",
              a: "Simple Date removes swiping. You’re matched automatically based on preferences and availability, and the app helps set up a real date for you.",
            },
            {
              q: "Why don’t I see profiles or photos?",
              a: "Simple Date is designed to focus on real connections instead of appearances. Matches are based on compatibility, not swiping.",
            },
            {
              q: "What happens after I get matched?",
              a: "Once both users confirm, the app helps coordinate a date at a selected location and time. After the date, you can choose whether to continue.",
            },
            {
              q: "Is my personal information visible to others?",
              a: "No. Sensitive details like your phone number and email are never shown to other users.",
            },
            {
              q: "What if someone doesn’t show up?",
              a: "No-shows are tracked. Users who repeatedly miss dates may be restricted or removed to keep the experience fair.",
            },
            {
              q: "How do I delete my account?",
              a: "You can delete your account in the app settings or contact support and we’ll take care of it for you.",
            },
            {
              q: "Is Simple Date safe?",
              a: "We prioritize safety with reporting tools, moderation, and user feedback systems. However, always use your best judgment when meeting someone new.",
            },
            {
              q: "Do you run background checks?",
              a: "No. We do not perform background checks. Users are responsible for their own safety and awareness.",
            },
          ].map((item) => (
            <div key={item.q} style={{ marginBottom: 20 }}>
              <p style={{ ...textStyle, fontWeight: 700 }}>{item.q}</p>
              <p style={textStyle}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "left", marginTop: 32 }}>
          <h2 style={sectionHeaderStyle}>Safety Tips</h2>
          <ul style={{ ...textStyle, paddingLeft: 20 }}>
            <li>Meet in public places.</li>
            <li>Tell a friend where you’re going.</li>
            <li>Arrange your own transportation.</li>
            <li>Trust your instincts—leave if something feels off.</li>
          </ul>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <Link href="/privacy" style={footerLinkStyle}>Privacy</Link>
          <Link href="/user-agreement" style={footerLinkStyle}>User Agreement</Link>
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
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "white",
  textDecoration: "none",
  minWidth: 150,
  fontWeight: 600,
};

const footerLinkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
};

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 8,
};

const textStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.6,
};