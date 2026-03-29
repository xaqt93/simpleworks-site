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

let firestoreDbPromise: Promise<any> | null = null;

async function getFirestoreDb() {
  if (!firestoreDbPromise) {
    firestoreDbPromise = (async () => {
      const [{ initializeApp, getApps }, { getFirestore }] = await Promise.all([
        import("firebase/app"),
        import("firebase/firestore"),
      ]);

      const missingConfig = Object.entries(firebaseConfig)
        .filter(([, value]) => !value)
        .map(([key]) => key);

      if (missingConfig.length > 0) {
        throw new Error(`Missing Firebase config: ${missingConfig.join(", ")}`);
      }

      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }

  return firestoreDbPromise;
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

      const db = await getFirestoreDb();
      const { addDoc, collection, query, where, getDocs, serverTimestamp } =
        await import("firebase/firestore");

      const waitlistRef = collection(db, "waitlist");
      const existingEmailQuery = query(waitlistRef, where("email", "==", email));
      const existingEmailSnapshot = await getDocs(existingEmailQuery);

      if (!existingEmailSnapshot.empty) {
        setWaitlistMessage("You’re already on the waitlist 💌");
        setWaitlistMessageType("success");
        return;
      }

      await addDoc(waitlistRef, {
        email,
        createdAt: serverTimestamp(),
        source: "website",
      });

      setWaitlistEmail("");
      setWaitlistMessage("You’re on the waitlist 🎉");
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
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            margin: "0 auto 14px",
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
            marginTop: 12,
            marginBottom: 18,
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.5,
          }}
        >
          Because dating should feel human again.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 999,
            marginBottom: 12,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.88)",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          Launching in Orlando, FL
        </div>

        <div
          style={{
            margin: "0 auto 32px",
            padding: "18px 16px",
            maxWidth: 560,
            borderRadius: 22,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            style={{
              margin: "0 0 18px",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.68)",
            }}
          >
            April 25, 2026
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(70px, 1fr))",
              gap: 12,
            }}
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "14px 8px",
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(24px, 4vw, 34px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            margin: "0 auto 28px",
            padding: "22px 18px 18px",
            maxWidth: 560,
            borderRadius: 24,
            background: "rgba(255,255,255,0.11)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
            backdropFilter: "blur(14px)",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              marginBottom: 14,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.82)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Join the waitlist
          </div>

          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(24px, 3vw, 30px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Get first dibs when Simple Date lands.
          </h2>

          <p
            style={{
              margin: "0 0 18px",
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Joining the waitlist gets you launch updates, early access news, and first crack at Orlando when the app goes live.
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              value={waitlistEmail}
              onChange={(event) => setWaitlistEmail(event.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              aria-label="Email address"
              style={{
                flex: "1 1 280px",
                minWidth: 0,
                padding: "14px 16px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(7, 26, 45, 0.42)",
                color: "white",
                fontSize: 15,
                outline: "none",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 168,
                padding: "14px 20px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.22)",
                background:
                  "linear-gradient(135deg, rgba(120,220,230,0.9) 0%, rgba(120,160,255,0.92) 100%)",
                color: "#041525",
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: "0.01em",
                cursor: isSubmitting ? "default" : "pointer",
                opacity: isSubmitting ? 0.75 : 1,
                boxShadow: "0 14px 30px rgba(64, 146, 255, 0.28)",
              }}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          <p
            style={{
              minHeight: 22,
              margin: "12px 0 0",
              fontSize: 14,
              color:
                waitlistMessageType === "error"
                  ? "rgba(255, 176, 176, 0.96)"
                  : "rgba(188, 255, 214, 0.96)",
            }}
          >
            {waitlistMessage || "No spam. Just the good stuff."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/cities"
            style={{
              ...pillStyle,
              background: "rgba(255,255,255,0.28)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            Available Cities
          </Link>
          <Link href="/howitworks" style={pillStyle}>
            How it works
          </Link>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <Link href="/privacy" style={footerLinkStyle}>
            Privacy
          </Link>
          <Link href="/user-agreement" style={footerLinkStyle}>
            User Agreement
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