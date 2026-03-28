import Link from "next/link";
import type { CSSProperties } from "react";

export default function PrivacyPage() {
  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <Link href="/" style={backStyle} aria-label="Back to home">
          ← Back
        </Link>

        <h1 style={titleStyle}>Simple Date Privacy Policy</h1>
        <p style={subtitleStyle}>Last updated: {new Date().toLocaleDateString()}</p>

        <div style={contentStyle}>
          <h2 style={h2Style}>1. Who We Are</h2>
          <p>
            The Simple Date mobile application and associated websites
            (collectively the “Service”) are operated by Simple Works and Applications, LLC. We are
            responsible for the collection, storage and processing of personal
            information through the Service. If you have questions, contact support
            at{" "}
            <a href="mailto:support@simplework.app" style={linkStyle}>
              support@simplework.app
            </a>
            .
          </p>

          <h2 style={h2Style}>2. Information We Collect</h2>
          <p>We collect the following information when you register and use the Service:</p>
          <ul style={listStyle}>
            <li>
              <strong>Account Information:</strong> Legal first and last name, email
              address, phone number and ZIP code. This information helps enhance the
              app and verify users.
            </li>
            <li>
              <strong>Profile Information:</strong> Details you choose to share,
              including photographs and descriptions. We encourage you not to include
              personal contact information in your profile.
            </li>
            <li>
              <strong>Device Information:</strong> We collect device information
              (device identifier, model and operating system) and may collect
              location data if you enable location services to facilitate matching.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect data about how you use
              the Service, including messages (to identify trends and improve user
              experience), interactions with other users, feedback after dates and
              reasons for canceling or declining matches.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and
              similar technologies to recognize and remember you.
            </li>
          </ul>

          <h2 style={h2Style}>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ol style={listStyle}>
            <li>Provide our services and features.</li>
            <li>Verify users and maintain a safe environment.</li>
            <li>
              Improve the app by analyzing user behavior, including reasons for
              canceling dates.
            </li>
            <li>Contact you with information about updates or changes.</li>
            <li>Investigate fraud, enforce our Terms, and protect our legal rights.</li>
            <li>
              Send you promotional content if you opt-in (you may opt out at any
              time).
            </li>
          </ol>

          <h2 style={h2Style}>4. Legal Basis for Processing</h2>
          <p>
            We process your data based on your consent (e.g., when you provide
            information), our legitimate interests (e.g., improving safety and
            preventing fraud), and to perform the contract between you and Simple
            Works and Applications.
          </p>

          <h2 style={h2Style}>5. Disclosure of Information</h2>
          <p>
            We do not sell your personal data. We disclose personal information only
            in limited circumstances:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Service Providers:</strong> We share data with service
              providers (e.g., hosting or payment processors) to help deliver our
              services.
            </li>
            <li>
              <strong>Compliance and Safety:</strong> We may disclose information if
              required by law or to enforce our Terms or protect the safety of users.
            </li>
            <li>
              <strong>Payment disputes:</strong> We may provide necessary information
              to process payments and resolve disputes.
            </li>
            <li>
              <strong>Merger or acquisition:</strong> If Simple Works and Applications is involved in
              a merger or sale, we will notify you before transferring personal data.
            </li>
          </ul>

          <h2 style={h2Style}>6. Data Retention and Deletion</h2>
          <p>
            We keep personal information only as long as needed for the purposes
            described above and as permitted by law. When your account is deleted, it
            is removed from public view. We may retain certain data:
          </p>
          <ol style={listStyle}>
            <li>For legal compliance (e.g., tax or accounting records).</li>
            <li>
              To evidence compliance with applicable law (e.g., details of accounts
              that were blocked).
            </li>
            <li>To resolve disputes.</li>
            <li>
              For legitimate business interests such as fraud prevention and
              enhancing safety — for example, to prevent a banned user from creating
              another account.
            </li>
          </ol>
          <p>
            When we no longer need your data for these purposes, we will delete it
            securely. Please note that information you share with others may still be
            accessible because we cannot control the actions of other users or
            third-party services.
          </p>

          <h2 style={h2Style}>7. Your Rights</h2>
          <ul style={listStyle}>
            <li>
              <strong>Access and deletion:</strong> You may request access to the
              personal information we hold about you and request deletion, subject to
              certain exceptions.
            </li>
            <li>
              <strong>Opt-out of marketing:</strong> You may opt out of marketing
              communications at any time.
            </li>
            <li>
              <strong>Do not track:</strong> We do not track users across third-party
              services and do not knowingly permit third parties to collect personal
              information about users’ online activities.
            </li>
            <li>
              <strong>California residents:</strong> You have additional rights under
              the California Consumer Privacy Act, including rights to know what
              personal information we collect and to request deletion.
            </li>
          </ul>

          <h2 style={h2Style}>8. Security</h2>
          <p>
            We take reasonable security measures to protect your information from
            unauthorized access, loss or misuse. However, no internet transmission is
            completely secure. We recommend that you log out after use, keep your
            password confidential, and update it periodically.
          </p>

          <h2 style={h2Style}>9. Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal information from anyone under 18
            years of age. If we become aware that a minor has registered, we will
            delete the account and associated information.
          </p>

          <h2 style={h2Style}>10. International Transfers</h2>
          <p>
            Our services are operated in the United States. Your information may be
            transferred and stored outside of your home country. We implement
            appropriate safeguards to protect your data during such transfers.
          </p>

          <h2 style={h2Style}>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The most current
            version will always be available in the app or on our website, and we
            will notify you of material changes.
          </p>

          <h2 style={h2Style}>12. Florida Residents: Additional Rights and Information</h2>
          <p>
            The Florida Digital Bill of Rights (FDBR) provides certain rights to
            Florida residents with respect to the processing of personal data.
            Although the FDBR applies primarily to very large businesses, Simple Date
            voluntarily extends the following rights to Florida residents:
          </p>
          <ol style={listStyle}>
            <li>
              <strong>Right to know and access.</strong> You may request confirmation
              of whether we are processing your personal data and obtain access to
              that data.
            </li>
            <li>
              <strong>Right to correct.</strong> You may request that we correct
              inaccuracies in your personal data.
            </li>
            <li>
              <strong>Right to delete.</strong> You may request deletion of personal
              data provided by or obtained about you.
            </li>
            <li>
              <strong>Right to portability.</strong> You may request a copy of your
              personal data in a portable and, to the extent technically feasible,
              readily usable format.
            </li>
            <li>
              <strong>Right to opt out.</strong> You may opt out of (i) targeted
              advertising, (ii) the sale of your personal data, (iii) profiling, or
              (iv) the collection of personal data through voice or facial
              recognition technologies.
            </li>
          </ol>

          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:legal@simplework.app" style={linkStyle}>
              legal@simplework.app
            </a>{" "}
            with the subject line “Florida Privacy Request.” We will authenticate
            your request and respond within 45 days, with the possibility of a
            15-day extension if reasonably necessary. We will not discriminate
            against you for exercising these rights. We may decline a request to
            correct information if we offer a self-service mechanism for correction,
            as permitted by the FDBR.
          </p>

          <p>
            We continue to limit data collection to what is reasonably necessary, to
            provide clear privacy notices, and to maintain reasonable
            administrative, technical and physical safeguards to protect your
            information. We do not knowingly process data for children under 18 and
            will delete such data if discovered.
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

const listStyle: CSSProperties = {
  paddingLeft: 22,
  marginTop: 8,
};

const linkStyle: CSSProperties = {
  color: "white",
  textDecoration: "underline",
};