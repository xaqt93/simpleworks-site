import Link from "next/link";
import type { CSSProperties } from "react";

export default function UserAgreementPage() {
  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <Link href="/" style={backStyle} aria-label="Back to home">
          ← Back
        </Link>

        <h1 style={titleStyle}>User Agreement</h1>
        <p style={subtitleStyle}>Last updated: {new Date().toLocaleDateString()}</p>

        <div style={contentStyle}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p>
            These Terms of Use (the “Terms”) form a binding contract between you and
            Simple Works, LLC (also trading as Simple Works Applications),
            governing your use of the Simple Date mobile application and related
            services (collectively, the “Service”). By accessing or using the
            Service, you agree to be bound by these Terms. We may update the Terms
            occasionally; we will notify you of material changes and ask you to
            review them regularly. If you do not agree, please discontinue use of
            the Service.
          </p>

          <h2 style={h2Style}>2. Eligibility and Account Creation</h2>
          <ul style={listStyle}>
            <li>
              <strong>Age requirement:</strong> You must be at least 18 years old and
              legally permitted to use the Service. We monitor for underage use and
              may suspend or terminate accounts if we believe you may be underage.
            </li>
            <li>
              <strong>Account details:</strong> To create an account you must provide
              accurate information (legal first and last name, date of birth,
              email, phone number, and ZIP code) and keep it up-to-date. You must
              not share your account or use another person’s account.
            </li>
            <li>
              <strong>One account per person:</strong> Creating multiple accounts or
              attempting to circumvent suspensions or bans is prohibited. We use
              your legal name, date of birth and contact information to cross-check
              banned users and prevent duplicates.
            </li>
            <li>
              <strong>Safety:</strong> We use a combination of automated systems,
              user reports and human moderators to detect violations. Your use of
              the Service may be restricted or terminated for any reason in our
              sole discretion. If your account is terminated, you will not receive
              a refund for any paid services. You may appeal a termination by
              contacting support with a full explanation within six months.
            </li>
          </ul>

          <h2 style={h2Style}>3. Rules for Use</h2>
          <p>
            We want Simple Date to be a respectful and safe environment. When using
            the Service, you agree that you will not:
          </p>
          <ol style={listStyle}>
            <li>
              <strong>Ghosting and no-shows:</strong> Standing someone up or failing
              to check-in for a scheduled date without notice is considered abusive
              conduct. Bumble treats a no-show on a date as bullying. Similarly,
              Simple Date uses a strike policy:
              <ul style={nestedListStyle}>
                <li>
                  Failing to check-in for a scheduled date or not informing your
                  partner that you will be late counts as a strike.
                </li>
                <li>Users who accumulate strikes may be suspended or banned.</li>
                <li>
                  Appeals are reviewed case-by-case, and we will review all account
                  data to decide whether to remove a strike.
                </li>
                <li>
                  The app makes it easy to cancel; failure to cancel or notify your
                  partner is not acceptable.
                </li>
              </ul>
            </li>
            <li>
              <strong>Harassment or offensive content:</strong> You may not post
              content that is illegal, defamatory, obscene, pornographic, violent,
              hateful, promotes racism or sexism, or encourages illegal activity.
            </li>
            <li>
              <strong>Misrepresentation:</strong> You must use your real name and age
              and may not impersonate another person or provide false information.
            </li>
            <li>
              <strong>Personal information:</strong> You may not display personal
              contact or banking information (your own or others’) in your profile.
            </li>
            <li>
              <strong>Spam and malicious activity:</strong> You may not transmit
              spam, junk mail or malicious code.
            </li>
            <li>
              <strong>Commercial activity:</strong> You may not conduct sales,
              promotions or advertising without our written permission.
            </li>
            <li>
              <strong>Illegal or harmful behaviour:</strong> You must comply with all
              laws and regulations and may not encourage harmful activities. It is
              your responsibility to ensure it is legal for you to use the Service.
            </li>
          </ol>

          <h2 style={h2Style}>4. User-Generated Content</h2>
          <ul style={listStyle}>
            <li>
              <strong>Ownership:</strong> You retain ownership of content you submit
              (“User Content”), but you grant Simple Works a non-exclusive,
              royalty-free, perpetual, worldwide licence to use, modify,
              reproduce and display your User Content in connection with the
              Service.
            </li>
            <li>
              <strong>Compliance:</strong> You are solely responsible for your User
              Content and agree to defend and indemnify us against claims arising
              from it.
            </li>
            <li>
              <strong>Removal:</strong> We may remove or refuse to publish any
              content that violates these Terms or applicable law.
            </li>
          </ul>

          <h2 style={h2Style}>5. Payments and Subscriptions</h2>
          <p>
            If you purchase premium services, you will be charged according to the
            displayed price. Prices may change and will be notified in advance.
            Late or missed payments may lead to suspension of premium features. You
            can cancel your subscription at any time by following the instructions
            in the app; refunds are subject to applicable law.
          </p>
          <p>
            <strong>Florida cooling-off period:</strong> Florida law regarding
            contracts for future consumer services requires that residents be given
            a 3-business-day cooling-off period during which the contract may be
            cancelled without penalty. If a Florida resident purchases a service
            from Simple Date that is to be provided on an ongoing basis (for
            example, a premium subscription), that resident may cancel within three
            (3) business days of purchase and receive a full refund of all
            payments. Cancellation requests must be made in writing (email is
            sufficient). We will issue the refund within 20 days of receiving your
            notice. This provision does not limit any broader cancellation rights
            we may offer.
          </p>

          <h2 style={h2Style}>6. Third-Party Services and Integrations</h2>
          <p>
            Simple Date uses third-party services, including Google Firebase (for
            database storage) and Google Cloud Scheduler (for notifications). These
            services have their own terms and privacy policies. We are not
            responsible for the availability or accuracy of third-party services or
            content. Your use of third-party services is at your own risk.
          </p>

          <h2 style={h2Style}>7. Disclaimers and Limitations of Liability</h2>
          <ul style={listStyle}>
            <li>
              <strong>No warranties:</strong> The Service is provided “as is” and “as
              available” without any express or implied warranties. We do not
              guarantee that matches will be compatible or that the Service will be
              uninterrupted or error free.
            </li>
            <li>
              <strong>User interactions:</strong> You are solely responsible for your
              interactions with other users. Simple Works does not conduct criminal
              background checks and is not responsible for the conduct of any user.
              We do not arrange or supervise dates and are not liable for what
              happens during or after meetings. Exercise caution and follow safety
              guidelines.
            </li>
          </ul>
          <p>
            <strong>Florida safety awareness notice:</strong> Pending legislation in
            Florida would require online dating services to provide members with a
            safety awareness notice and disclose whether criminal background checks
            are performed. Although the legislation has not yet been enacted,
            Simple Date voluntarily provides a Safety Tips link in the app to
            educate users on safer dating practices. We affirm that we do not
            perform criminal background screenings on our users. If background
            screenings were to be offered in the future, we would disclose that
            such screenings are not perfect and cannot guarantee a person’s true
            identity. You should always exercise due care when meeting strangers.
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Limitation of liability:</strong> To the fullest extent
              permitted by law, Simple Works and its owners will not be liable for
              any damages (direct or indirect), loss of data, income, profit,
              goodwill or property arising from your use of the Service. If you
              become dissatisfied, your sole remedy is to stop using the Service.
            </li>
          </ul>

          <h2 style={h2Style}>8. Indemnity</h2>
          <p>
            You agree to indemnify, defend and hold harmless Simple Works, its
            affiliates and their directors, officers and employees from any claims,
            damages or expenses arising from your negligence, misuse of the
            Service, User Content, breach of these Terms or violation of law.
          </p>

          <h2 style={h2Style}>9. Data Privacy</h2>
          <p>
            Your use of the Service is subject to our Privacy Policy, which forms part of these Terms. By using the Service you acknowledge that we may collect and use your personal information as described in our{" "}
            <a href="/privacy" style={linkStyle}>
              Privacy Policy
            </a>
            .
          </p>

          <h2 style={h2Style}>10. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Rhode Island, USA,
            without regard to its conflict of law principles. Any disputes shall be
            resolved in the state or federal courts located in Rhode Island unless
            otherwise required by mandatory law.
          </p>

          <h2 style={h2Style}>11. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. We will post the updated Terms
            within the app or on our website and, where appropriate, notify you by
            email. Continued use after the effective date constitutes acceptance.
          </p>

          <h2 style={h2Style}>12. Non-Discrimination and Local Laws (Orlando)</h2>
          <p>
            Simple Date is committed to inclusion and equal treatment. In
            accordance with the City of Orlando’s anti-discrimination ordinance, we
            will not discriminate against or separate any person on the basis of
            race, color, religion, national origin, marital status, age, sex,
            sexual orientation, gender identity or handicap. These protections
            apply to any place of public accommodation in Orlando. While Simple
            Date operates primarily as an online service rather than a physical
            accommodation, we adopt these principles to foster an inclusive
            community. We expect users to respect these protections as well;
            discriminatory conduct (for example, refusing to interact with another
            user because of a protected characteristic) may result in removal from
            the Service. Nothing in these Terms limits any rights you may have
            under federal, state or local law.
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

const nestedListStyle: CSSProperties = {
  paddingLeft: 22,
  marginTop: 10,
};

const linkStyle: CSSProperties = {
  color: "white",
  textDecoration: "underline",
};