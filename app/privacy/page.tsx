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
            Simple Works and Applications, LLC operates the Simple Date mobile
            application and associated websites (collectively, the “Service”). We
            are responsible for the collection, storage and processing of personal
            information through the Service. If you have questions about this
            policy or wish to exercise any of the rights described below, please
            contact us at support@simplework.app.
          </p>

          <h2 style={h2Style}>2. Information We Collect</h2>
          <p>
            We collect and process the following information when you register and
            use the Service:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Account Information:</strong> We ask for your legal first and
              last name, email address, phone number and ZIP code when you create
              an account. This information allows us to create your account and
              helps us maintain a safe environment. We do not independently verify
              the accuracy of this information; it is provided by you for account
              confirmation purposes only. Your legal name, phone number and ZIP
              code are not displayed to other users. We use them internally for
              safety, legal and administrative reasons and do not share them with
              other users.
            </li>
            <li>
              <strong>Profile Information:</strong> You may choose to add details
              to your profile, including photographs and personal descriptions. We
              encourage you not to include personal contact information (for
              example, phone numbers, email addresses, social media handles or
              addresses) in your profile. Profile information you make public will
              be visible to other users.
            </li>
            <li>
              <strong>Device and Location Information:</strong> We collect basic
              device information (such as device identifier, model and operating
              system) to improve the Service and prevent fraud. If you enable
              location services, we may collect location data to help pair you with
              potential matches near you. You can disable location permissions at
              any time in your device settings.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect data about how you use
              the Service, such as your interactions with other users, messages (to
              detect trends and improve user experience), feedback after dates, and
              reasons for cancelling or declining matches. This helps us operate
              and improve the Service and maintain a safe environment.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and
              similar technologies to recognize you, remember your preferences, and
              analyze how the Service is used. You can manage cookie preferences
              through your browser settings.
            </li>
          </ul>

          <h2 style={h2Style}>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ol style={listStyle}>
            <li>Provide and operate the Service and its features;</li>
            <li>
              Maintain a safe environment (for example, to detect spam, fraud or
              other harmful activity);
            </li>
            <li>
              Analyze usage patterns and improve the app, including understanding
              why users cancel or decline matches;
            </li>
            <li>
              Contact you with information about the Service (e.g., updates or
              changes) and respond to your requests;
            </li>
            <li>
              Enforce our Terms of Service, investigate fraud and protect our legal
              rights;
            </li>
            <li>
              Send you promotional content if you opt-in (you may opt out at any
              time).
            </li>
          </ol>
          <p>
            We do not sell your personal information. We do not share your account
            or profile information with other users unless you choose to disclose
            it in your profile or messages.
          </p>

          <h2 style={h2Style}>4. Legal Basis for Processing</h2>
          <p>
            Our legal bases for processing personal data include your consent (for
            example, when you provide information or opt into marketing), our
            legitimate interests (such as maintaining safety, preventing fraud and
            improving our service) and the performance of the contract between you
            and Simple Works and Applications when you use the Service.
          </p>

          <h2 style={h2Style}>5. Disclosure of Information</h2>
          <p>We may disclose personal information only in limited circumstances:</p>
          <ul style={listStyle}>
            <li>
              <strong>Service Providers:</strong> We share data with trusted service
              providers who perform functions on our behalf (such as hosting,
              analytics or payment processing). They are contractually required to
              protect your information.
            </li>
            <li>
              <strong>Compliance and Safety:</strong> We may disclose information if
              required by law or to enforce our Terms of Service or protect the
              safety of users. This may include providing information to law
              enforcement where legally required.
            </li>
            <li>
              <strong>Payment Disputes:</strong> We may provide necessary
              information to process payments and resolve disputes.
            </li>
            <li>
              <strong>Business Transfers:</strong> If Simple Works and Applications,
              LLC undergoes a merger, acquisition or sale of all or part of our
              business, we will notify you before transferring your personal data.
            </li>
          </ul>
          <p>
            We do not otherwise share your personal information with third parties,
            and we do not sell your personal data.
          </p>

          <h2 style={h2Style}>6. Data Retention and Deletion</h2>
          <p>
            We retain personal information only as long as reasonably necessary to
            provide the Service and fulfil the purposes described above, in
            accordance with applicable law. When your account is deleted, your
            profile is removed from public view. We may retain certain data:
          </p>
          <ol style={listStyle}>
            <li>
              To comply with legal obligations (for example, to meet tax or
              accounting requirements);
            </li>
            <li>
              To demonstrate compliance with applicable laws (e.g., records of
              blocked accounts);
            </li>
            <li>To resolve disputes; and</li>
            <li>
              For legitimate business interests such as preventing fraud or
              enhancing safety—e.g., to prevent a banned user from creating another
              account.
            </li>
          </ol>
          <p>
            When we no longer need your data for these purposes, we will securely
            delete it. Please note that any information you have shared with other
            users may still be accessible by those users or third-party services
            beyond our control.
          </p>

          <h2 style={h2Style}>7. Your Privacy Rights</h2>
          <p>
            We respect the privacy rights provided under state laws and voluntarily
            extend the following rights to all U.S. residents, regardless of where
            they live:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Right to Know and Access:</strong> You may request
              confirmation of whether we process your personal data and obtain
              access to that data.
            </li>
            <li>
              <strong>Right to Correct:</strong> You may request that we correct
              inaccurate personal information we hold about you.
            </li>
            <li>
              <strong>Right to Delete:</strong> You may request deletion of
              personal information you provided or that we have obtained about you,
              subject to certain exceptions (for example, where we are legally
              required to retain data). Many state laws grant residents the right
              to request access to and deletion of personal data.
            </li>
            <li>
              <strong>Right to Portability:</strong> You may request a copy of your
              personal data in a portable and, where technically feasible, readily
              usable format.
            </li>
            <li>
              <strong>Right to Opt Out:</strong> You may opt out of targeted
              advertising, the sale of your personal data, profiling or automated
              decision-making that produces legal or similarly significant effects.
              Several states, including Kentucky and Rhode Island, provide
              residents with opt-out rights for data sales and targeted
              advertising.
            </li>
            <li>
              <strong>Additional Rights for Minors:</strong> Some states have
              increased protections for minors’ data, including restrictions on
              selling personal data of users under 16. Although Simple Date
              prohibits users under 18, we will honour any state-specific
              requirements if we become aware of a minor’s information.
            </li>
          </ul>

          <h2 style={h2Style}>Florida Residents</h2>
          <p>
            Under the Florida Digital Bill of Rights (FDBR), Florida residents have
            specific rights, such as the rights to know, access, correct, delete
            and port personal data and to opt out of data sales, targeted
            advertising, profiling and voice or facial recognition technologies. We
            voluntarily offer these rights to all Florida residents and describe
            them above.
          </p>

          <h2 style={h2Style}>California Residents</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA/CPRA), California
            residents have rights similar to those listed above, including the
            right to know, delete and correct personal information and to opt out
            of the sale or sharing of personal information. We do not sell
            personal information, but California residents may submit a request
            through the contact information below if they wish to exercise any of
            these rights. We honour the Delete Act, which requires data brokers to
            comply with a centralized deletion request beginning August 1 2026.
          </p>

          <h2 style={h2Style}>Other State Privacy Laws</h2>
          <p>
            Multiple other states, including Colorado, Connecticut, Indiana, Iowa,
            Kentucky, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode
            Island, Utah, Virginia, Texas and Arkansas, have enacted privacy laws
            that grant residents rights to access, correct, delete and port
            personal data and to opt out of targeted advertising or data sales.
            Many of these laws also require businesses to honour universal opt-out
            signals or impose restrictions on selling geolocation data or personal
            data of minors. We voluntarily extend these rights to residents of all
            states. If you reside in a state with a comprehensive privacy law that
            provides additional or different rights, we will comply with that law.
          </p>

          <p>
            To exercise any of these rights, please email{" "}
            <a href="mailto:legal@simpleworks.app" style={linkStyle}>
              legal@simpleworks.app
            </a>{" "}
            with the subject line “Privacy Request.” We will authenticate your
            request and respond within the time period required by applicable law
            (generally within 45 days, with the possibility of a reasonable
            extension). We will not discriminate against you for exercising your
            privacy rights.
          </p>

          <h2 style={h2Style}>8. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, loss or misuse.
            However, no method of transmission or storage is completely secure.
            You should use a strong, unique password and keep it confidential. We
            recommend logging out of your account after use.
          </p>

          <h2 style={h2Style}>9. Children’s Privacy</h2>
          <p>
            The Service is intended for users aged 18 and over. We do not
            knowingly collect personal information from anyone under 18 years of
            age. If we learn that a minor has registered, we will delete the
            account and associated information.
          </p>

          <h2 style={h2Style}>10. International Transfers</h2>
          <p>
            We operate in the United States. Your information may be transferred
            to, stored and processed in the United States or other countries. We
            implement appropriate safeguards (such as contractual clauses) to
            protect your data during these transfers.
          </p>

          <h2 style={h2Style}>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The most current
            version will always be available in the app or on our website. If we
            make material changes, we will notify you through the Service or by
            other appropriate means.
          </p>

          <h2 style={h2Style}>12. Contact Us</h2>
          <p>
            If you have any questions, concerns or requests regarding this policy
            or your personal data, please contact us at:
          </p>
          <p>
            Simple Works and Applications, LLC
            <br />
            Email: support@simplework.app for general inquiries or legal@simpleworks.app
            (privacy requests)
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