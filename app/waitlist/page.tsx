"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

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

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("We’ll only use this for launch updates.");
  const [messageType, setMessageType] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      setMessage("Enter your email to join the waitlist.");
      setMessageType("error");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setMessage("That email doesn’t look right.");
      setMessageType("error");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("Joining waitlist...");
      setMessageType("idle");

      const missingConfig = getMissingFirebaseConfig();
      if (missingConfig.length > 0) {
        throw new Error(`Missing Firebase config: ${missingConfig.join(", ")}`);
      }

      const documentId = createWaitlistDocumentId(trimmedEmail);
      const endpoint = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/waitlist/${documentId}?key=${firebaseConfig.apiKey}`;

      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            email: { stringValue: trimmedEmail },
            source: { stringValue: "website" },
            createdAt: { stringValue: new Date().toISOString() },
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Waitlist save response:", errorText);
        throw new Error(errorText || "Failed to save waitlist entry.");
      }

      setEmail("");
      setMessage("You’re on the waitlist 🎉");
      setMessageType("success");
    } catch (error) {
      console.error("Waitlist signup failed:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setMessage(errorMessage);
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

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
          Be first to know when Simple Date launches in your city. Drop your email below and we’ll keep you in the loop.
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
          <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
                color:
                  messageType === "error"
                    ? "rgba(255, 176, 176, 0.96)"
                    : messageType === "success"
                      ? "rgba(188, 255, 214, 0.96)"
                      : "rgba(255,255,255,0.62)",
              }}
            >
              {message}
            </p>

            <button type="submit" style={primaryButtonStyle} disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
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
          <Link href="/cities" style={pillStyle}>
            City Roadmap
          </Link>
          <Link href="/howitworks" style={pillStyle}>
            How it Works
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
  opacity: 1,
  boxShadow: "0 14px 30px rgba(64, 146, 255, 0.28)",
};

const footerLinkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.01em",
};