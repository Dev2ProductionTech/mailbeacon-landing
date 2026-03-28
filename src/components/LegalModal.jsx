import { useEffect } from 'react'

const CO      = 'Dev2Production'
const PROD    = 'MailBeacon'
const EMAIL   = 'ali@dev2production.com'
const SITE    = 'https://mailbeacon-landing.pages.dev'
const UPDATED = 'March 28, 2026'

/* ── Shared typography helpers ──────────────────────────────────── */
function H2({ children }) {
  return (
    <h2 style={{
      fontSize: 19, fontWeight: 800, color: 'var(--text)',
      marginTop: 38, marginBottom: 12, letterSpacing: '-0.3px',
      borderBottom: '1px solid var(--border)', paddingBottom: 10,
    }}>
      {children}
    </h2>
  )
}
function H3({ children }) {
  return (
    <h3 style={{
      fontSize: 14, fontWeight: 700, color: 'var(--text)',
      marginTop: 22, marginBottom: 8, textTransform: 'uppercase',
      letterSpacing: '0.8px',
    }}>
      {children}
    </h3>
  )
}
function P({ children }) {
  return (
    <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.85, marginBottom: 14 }}>
      {children}
    </p>
  )
}
function UL({ items }) {
  return (
    <ul style={{ paddingLeft: 22, marginBottom: 14 }}>
      {items.map((it, i) => (
        <li key={i} style={{
          fontSize: 14, color: 'var(--text2)', lineHeight: 1.8,
          marginBottom: 6, listStyleType: 'disc',
        }}>
          {it}
        </li>
      ))}
    </ul>
  )
}
function Meta() {
  return (
    <div style={{
      display: 'flex', gap: 20, flexWrap: 'wrap',
      borderBottom: '1px solid var(--border)', paddingBottom: 20, marginBottom: 28,
    }}>
      <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>
        📅 Effective Date: <strong style={{ color: 'var(--text2)' }}>{UPDATED}</strong>
      </span>
      <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>
        🔄 Last Updated: <strong style={{ color: 'var(--text2)' }}>{UPDATED}</strong>
      </span>
    </div>
  )
}
function ContactBox() {
  return (
    <div style={{
      background: 'var(--s2)', border: '1px solid var(--border2)',
      borderRadius: 14, padding: '20px 24px', marginTop: 36,
    }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
        📬 Questions about this document?
      </div>
      <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
        Email us at{' '}
        <a href={`mailto:${EMAIL}`} style={{ color: 'var(--accent2)', fontWeight: 600 }}>{EMAIL}</a>
        {' '}— we respond within 1 business day.
      </div>
    </div>
  )
}
const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent2)', fontWeight: 600 }}>{children}</a>
)
const Strong = ({ children }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>

/* ══════════════════════════════════════════════════════════════════
   TERMS OF SERVICE
══════════════════════════════════════════════════════════════════ */
function Terms() {
  return (
    <div>
      <Meta />
      <P>
        Welcome to {PROD}, an email open-tracking service provided by {CO} ("we," "us," or "our").
        These Terms of Service ("Terms") govern your access to and use of the {PROD} service and website.
        By purchasing, accessing, or using {PROD}, you agree to be bound by these Terms in their entirety.
        If you do not agree, please do not use the service.
      </P>

      <H2>1. The Services</H2>
      <P>
        {PROD} provides an email open-tracking infrastructure that uses an invisible 1×1 tracking pixel embedded
        in outgoing emails to detect when, where, and on what device an email is opened. {CO} deploys this
        infrastructure on your own server or managed hosting, giving you full data ownership.
      </P>
      <P>Services are offered under the following plans:</P>
      <UL items={[
        'Starter — One-time setup and deployment of your personal tracking pixel server.',
        'Professional — Monthly managed tracking service including ongoing support, updates, and analytics.',
        'Agency — Multi-client management for professionals handling multiple brands or accounts simultaneously.',
        'Custom / Enterprise — Bespoke solutions tailored to high-volume or specialised requirements.',
      ]} />
      <P>
        Service specifications, deliverables, and pricing are published on our website at{' '}
        <A href={SITE}>{SITE}</A> and may be updated with reasonable notice.
      </P>

      <H2>2. Eligibility</H2>
      <P>
        You must be at least 18 years old and capable of entering into a legally binding agreement to use {PROD}.
        If you are using the service on behalf of an organisation, you represent and warrant that you have the authority
        to bind that organisation to these Terms.
      </P>

      <H2>3. Account & Credentials</H2>
      <P>
        You are responsible for maintaining the confidentiality of any access credentials or API keys we provide.
        All activities that occur under your account are your responsibility. Notify us immediately at{' '}
        <A href={`mailto:${EMAIL}`}>{EMAIL}</A> if you suspect any unauthorised use.
      </P>

      <H2>4. Acceptable Use</H2>
      <P>You agree to use {PROD} solely for lawful purposes and in accordance with these Terms. You must not:</P>
      <UL items={[
        'Use the service to send unsolicited commercial email (spam) or track recipients without their knowledge where prohibited.',
        'Attempt to reverse-engineer, decompile, or extract the source code of any proprietary components.',
        'Resell, sublicence, or redistribute the tracking infrastructure we build for you without a separate written agreement.',
        'Use the service in any way that is fraudulent, deceptive, harassing, or unlawful.',
        'Interfere with the security or integrity of any server, network, or system associated with the service.',
        'Misrepresent your identity or organisational affiliation when purchasing or using the service.',
      ]} />

      <H2>5. Email Privacy Law Compliance</H2>
      <P>
        Email tracking is regulated differently across jurisdictions. Laws including but not limited to the
        EU General Data Protection Regulation (<Strong>GDPR</Strong>), California Consumer Privacy Act (<Strong>CCPA</Strong>),
        Canada's Anti-Spam Legislation (<Strong>CASL</Strong>), and the US <Strong>CAN-SPAM Act</Strong> may impose
        obligations on you as the party sending tracked emails.
      </P>
      <P>
        <Strong>You are solely responsible</Strong> for ensuring your use of email tracking complies with all applicable
        laws in your jurisdiction and those of your email recipients — including disclosing tracking where required
        and obtaining appropriate consent. {CO} provides infrastructure only and bears no liability for your
        compliance obligations.
      </P>

      <H2>6. Payment & Billing</H2>
      <H3>One-Time Plans (Starter)</H3>
      <P>
        Payment is due in full before setup commences. The fee covers initial configuration, deployment, and
        onboarding as described in the plan. No recurring charges apply.
      </P>
      <H3>Monthly Subscriptions (Professional & Agency)</H3>
      <P>
        Subscriptions are billed monthly in advance from the date of first payment. You authorise us to charge the
        applicable fee each billing cycle. Prices exclude applicable taxes, which will be added where required by law.
      </P>
      <H3>Price Changes</H3>
      <P>
        We may revise subscription pricing with at least <Strong>30 days' written notice</Strong> by email.
        Continued use of the service after the effective date of a price change constitutes acceptance.
      </P>

      <H2>7. Cancellation & Refunds</H2>
      <P>
        Please refer to our <Strong>Refund & Cancellation Policy</Strong> for full details. In summary:
        Starter plan fees are non-refundable once setup has commenced; monthly subscriptions may be cancelled
        at any time with effect at the end of the current billing period.
      </P>

      <H2>8. Intellectual Property</H2>
      <P>
        All software, documentation, designs, and materials related to the {PROD} service are the intellectual
        property of {CO}. The tracking infrastructure deployed to your server becomes yours to operate; however,
        any proprietary source code developed by {CO} remains owned by {CO} unless a separate licence agreement
        is signed.
      </P>
      <P>
        You retain full ownership of the tracking data logged to your server; we have no claim over that data.
      </P>

      <H2>9. Confidentiality</H2>
      <P>
        Each party agrees to keep confidential any non-public information received from the other party
        ("Confidential Information") and not to disclose it to third parties or use it for purposes other than
        performing obligations under these Terms, unless required by law.
      </P>

      <H2>10. Termination</H2>
      <P>
        Either party may terminate the service relationship: you by cancelling your subscription or notifying us in
        writing; we by providing 30 days' written notice, or immediately if you materially breach these Terms.
        Upon termination, you retain all tracking data already collected on your server. We will provide a reasonable
        handover of any configurations we manage on your behalf.
      </P>

      <H2>11. Disclaimers</H2>
      <P>
        THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
        TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE
        UNINTERRUPTED, ERROR-FREE, OR 100% ACCURATE OPEN-DETECTION RESULTS.
      </P>
      <P>
        Email tracking technology has inherent limitations. Certain email clients, security tools, and enterprise
        firewalls may pre-load images, generating false positives. Some clients block remote images entirely.
        We filter known bot signatures but cannot guarantee perfect accuracy in all environments.
      </P>

      <H2>12. Limitation of Liability</H2>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {CO.toUpperCase()}'S TOTAL LIABILITY TO YOU FOR ANY
        CLAIM ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE FEES PAID BY YOU IN THE
        THREE (3) MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL WE BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
        EXEMPLARY, OR CONSEQUENTIAL DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </P>

      <H2>13. Indemnification</H2>
      <P>
        You agree to indemnify, defend, and hold harmless {CO} and its officers, employees, and agents from and
        against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising
        from your use of the service, your violation of these Terms, or your violation of any applicable law or
        third-party rights.
      </P>

      <H2>14. Governing Law & Disputes</H2>
      <P>
        These Terms are governed by the laws of the jurisdiction in which {CO} is registered, without regard to
        conflict of law principles. We encourage resolution of any disputes through good-faith negotiations.
        If unresolved within 30 days, disputes shall be submitted to binding arbitration or the competent
        courts of the applicable jurisdiction.
      </P>

      <H2>15. Changes to These Terms</H2>
      <P>
        We may update these Terms from time to time. We will notify existing subscribers of material changes by
        email with at least 14 days' advance notice. Continued use of the service after the effective date
        constitutes acceptance of the revised Terms.
      </P>

      <H2>16. Contact</H2>
      <P>
        For questions about these Terms, please contact:<br />
        <Strong>Dev2Production</Strong><br />
        Email: <A href={`mailto:${EMAIL}`}>{EMAIL}</A><br />
        Website: <A href={SITE}>{SITE}</A>
      </P>
      <ContactBox />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   PRIVACY POLICY
══════════════════════════════════════════════════════════════════ */
function Privacy() {
  return (
    <div>
      <Meta />
      <P>
        This Privacy Policy describes how {CO} ("we," "us," or "our") collects, uses, discloses, and protects
        information about you in connection with the {PROD} service and website located at{' '}
        <A href={SITE}>{SITE}</A>. We are committed to protecting your privacy and processing your data transparently.
      </P>

      <H2>1. Information We Collect</H2>
      <H3>Information You Provide to Us</H3>
      <UL items={[
        'Contact form data: name, email address, phone number (optional), company name, selected service plan, and any message included.',
        'Business communications: emails and messages you send to us directly by any channel.',
        'Payment information: processed and stored by our payment processor — we do not store card details on our servers.',
      ]} />

      <H3>Information Collected Automatically (Landing Page)</H3>
      <UL items={[
        'Browser type, operating system, screen resolution, and device type.',
        'Pages visited, scroll depth, and time spent on pages (via anonymised analytics).',
        'Referring URL — how you arrived at our website.',
        'General geographic region (country and city level) derived from your IP address.',
        'Cookies and similar technologies — see our Cookie Policy for full details.',
      ]} />

      <H3>MailBeacon Tracking Data (Your Customers' Data)</H3>
      <P>
        When you operate {PROD} on your server, email open events — including timestamps, device type,
        browser, and approximate geolocation (derived from the opener's IP) — are logged exclusively to
        <Strong> your server</Strong>. {CO} does not receive, access, or store a copy of this data after
        setup is complete. You are the data controller for any personal data collected via your tracking pixel.
      </P>

      <H2>2. How We Use Your Information</H2>
      <UL items={[
        'To respond to enquiries and provide customer support.',
        'To deliver the service you have purchased and send service-related communications.',
        'To process payments and maintain accurate billing records.',
        'To send important notices about changes to our terms, pricing, or service status.',
        'To improve our website and service based on aggregated, anonymised usage data.',
        'To comply with legal obligations and enforce our Terms of Service.',
      ]} />
      <P>We do not use your personal data for automated decision-making or profiling.</P>

      <H2>3. Legal Basis for Processing (GDPR)</H2>
      <P>
        For users in the European Economic Area (EEA) and UK, we rely on the following legal bases:
      </P>
      <UL items={[
        'Performance of Contract — processing necessary to deliver our purchased services.',
        'Legitimate Interests — improving our service, communicating updates, and fraud prevention.',
        'Consent — where you have given explicit consent (e.g. optional marketing emails).',
        'Legal Obligation — where required to comply with applicable laws and regulations.',
      ]} />

      <H2>4. Data Sharing & Third Parties</H2>
      <P>
        We do not sell, rent, or trade your personal data. We may share data only with:
      </P>
      <UL items={[
        'Payment processors (e.g. Wise, PayPal, or Stripe) to facilitate secure transactions.',
        'Email service providers used to send transactional and service communications.',
        'Hosting and infrastructure providers (e.g., Cloudflare, Vercel) bound by data processing agreements.',
        'Legal and regulatory authorities where required by law or court order.',
      ]} />
      <P>
        All third-party service providers are contractually required to protect your data and may process
        it only for specified, authorised purposes.
      </P>

      <H2>5. Data Retention</H2>
      <UL items={[
        'Contact form data: retained for up to 3 years from the date of submission.',
        'Billing and payment records: retained for 7 years as required by applicable financial regulations.',
        'Support communications: retained for 2 years after resolution.',
        'Anonymised analytics data: retained for up to 13 months, then deleted.',
      ]} />
      <P>You may request deletion of your personal data at any time (see Your Rights below).</P>

      <H2>6. Data Security</H2>
      <P>
        We implement appropriate technical and organisational security measures to protect your data against
        unauthorised access, alteration, disclosure, or destruction. These include HTTPS/TLS encryption in
        transit, access controls, and regular security reviews. No internet transmission is 100% secure;
        we cannot guarantee absolute security, but we take every reasonable precaution.
      </P>

      <H2>7. Your Rights</H2>
      <P>
        Depending on your location, you may have the following rights regarding your personal data:
      </P>
      <UL items={[
        'Access — request a copy of the personal data we hold about you.',
        'Rectification — request correction of inaccurate or incomplete data.',
        'Erasure — request deletion of your data ("right to be forgotten").',
        'Restriction — request that we restrict how we process your data.',
        'Portability — receive your data in a structured, machine-readable format.',
        'Objection — object to processing based on legitimate interests.',
        'Withdrawal of Consent — withdraw consent at any time where processing is consent-based.',
        'Lodge a Complaint — contact your local data protection authority (e.g. ICO, CNIL, DPA).',
      ]} />
      <P>
        To exercise any of these rights, email us at <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
        We will respond within <Strong>30 days</Strong>.
      </P>

      <H2>8. Cookies</H2>
      <P>
        We use cookies and similar technologies on our website. Please refer to our{' '}
        <Strong>Cookie Policy</Strong> for full details on what cookies we use, why, and how to manage them.
      </P>

      <H2>9. International Data Transfers</H2>
      <P>
        Your information may be processed in countries outside your home country, including the United States
        and countries within the EEA. Where personal data is transferred outside the EEA, we ensure appropriate
        safeguards are in place, such as EU Standard Contractual Clauses (SCCs) or adequacy decisions.
      </P>

      <H2>10. Children's Privacy</H2>
      <P>
        {PROD} is not intended for children under 13 (or 16 in the EEA). We do not knowingly collect personal
        data from children. If you believe we have collected such data, please contact us immediately and we
        will delete it promptly.
      </P>

      <H2>11. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy periodically. Material changes will be communicated by email or a
        prominent notice on our website at least 14 days before taking effect. The "Last Updated" date at
        the top of this policy reflects the most recent revision.
      </P>

      <H2>12. Data Controller</H2>
      <P>
        <Strong>Dev2Production</Strong> is the data controller for personal data collected via this website
        and the {PROD} service setup process.<br />
        Email: <A href={`mailto:${EMAIL}`}>{EMAIL}</A><br />
        Website: <A href={SITE}>{SITE}</A>
      </P>
      <ContactBox />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   COOKIE POLICY
══════════════════════════════════════════════════════════════════ */
function Cookie() {
  return (
    <div>
      <Meta />
      <P>
        This Cookie Policy explains what cookies are, which cookies {CO} uses on the {PROD} website ({' '}
        <A href={SITE}>{SITE}</A>), and how you can control them. By continuing to browse this website,
        you consent to our use of cookies as described in this policy.
      </P>

      <H2>1. What Are Cookies?</H2>
      <P>
        Cookies are small text files placed on your browser or device by a website when you visit it.
        They enable websites to function correctly, remember your preferences, and provide information
        to website owners about how visitors use the site. Cookies cannot execute code or access files
        on your computer.
      </P>
      <P>
        Similar technologies include <Strong>local storage</Strong>, <Strong>session storage</Strong>,
        and <Strong>web beacons</Strong>. References to "cookies" in this policy include these similar technologies.
      </P>

      <H2>2. Cookies We Use</H2>

      <H3>Essential / Strictly Necessary</H3>
      <P>
        These cookies are required for the website to function and cannot be disabled. Without them, core
        features would not work.
      </P>
      <UL items={[
        'Session state — maintains your visit session across pages.',
        'Security (CSRF protection) — prevents cross-site request forgery attacks.',
        'Cloudflare performance & security — required by our CDN for DDoS mitigation and optimal routing.',
      ]} />

      <H3>Analytics & Performance</H3>
      <P>
        These cookies help us understand how visitors interact with our website anonymously so we can
        improve the experience. No personally identifiable information is collected or shared.
      </P>
      <UL items={[
        'Page views and most-visited sections.',
        'Traffic sources (how visitors found our site).',
        'Device, browser, and OS type.',
        'Geographic region (country/city level — IP is anonymised).',
        'Session duration and bounce rate.',
      ]} />

      <H3>Functional / Preference</H3>
      <P>
        These cookies remember choices you make to provide a more personalised experience:
      </P>
      <UL items={[
        'Previously dismissed banners or notices.',
        'Scroll position or navigation state.',
      ]} />

      <H2>3. What We Do NOT Use</H2>
      <UL items={[
        'Advertising, targeting, or retargeting cookies.',
        'Social media tracking pixels (Facebook Pixel, LinkedIn Insight, etc.).',
        'Cookies that track you across unrelated third-party websites.',
        'Cookies used to build advertising profiles or segments.',
      ]} />

      <H2>4. Third-Party Cookies</H2>
      <P>
        Some cookies are set by third-party services that appear on our pages. We use:
      </P>
      <UL items={[
        'Cloudflare — our CDN and security provider. Sets performance and security cookies. See Cloudflare\'s Privacy Policy.',
        'Vercel — powers our email API. May set technical cookies for API calls.',
      ]} />
      <P>
        These third parties are bound by their own privacy policies and cookie notices, which we encourage
        you to review.
      </P>

      <H2>5. Cookie Duration</H2>
      <UL items={[
        'Session cookies — expire automatically when you close your browser.',
        'Analytics cookies — retained for up to 13 months.',
        'Preference cookies — retained for up to 12 months.',
        'Security cookies — set per-session or for up to 24 hours.',
      ]} />

      <H2>6. Managing & Disabling Cookies</H2>
      <H3>Browser Settings</H3>
      <P>
        You can control cookies through your browser settings. Note: blocking essential cookies may impair
        website functionality.
      </P>
      <UL items={[
        'Chrome — Settings → Privacy & Security → Cookies and other site data.',
        'Firefox — Options → Privacy & Security → Cookies and Site Data.',
        'Safari — Preferences → Privacy → Manage Website Data.',
        'Edge — Settings → Cookies and site permissions.',
        'Opera — Settings → Advanced → Privacy & security → Site Settings → Cookies.',
      ]} />
      <H3>Do Not Track</H3>
      <P>
        We honour the "Do Not Track" (DNT) browser signal. When DNT is enabled, we disable all non-essential
        analytics and preference cookies for your session.
      </P>
      <H3>Opt-Out Links</H3>
      <UL items={[
        'Network Advertising Initiative opt-out: optout.networkadvertising.org',
        'Your Online Choices (EU): youronlinechoices.com',
        'Digital Advertising Alliance: optout.aboutads.info',
      ]} />

      <H2>7. Updates to This Policy</H2>
      <P>
        We may update this Cookie Policy to reflect changes in technology, regulation, or our practices.
        Any changes will be reflected in the "Last Updated" date at the top of this page.
      </P>

      <H2>8. Contact</H2>
      <P>
        Questions about cookies? Email us at{' '}
        <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </P>
      <ContactBox />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   REFUND & CANCELLATION POLICY
══════════════════════════════════════════════════════════════════ */
function Refund() {
  return (
    <div>
      <Meta />
      <P>
        At {CO}, we stand behind the quality of {PROD} and are committed to delivering real value on every
        engagement. This Refund & Cancellation Policy outlines your options if you are not fully satisfied
        with your purchase.
      </P>

      <H2>1. Starter Plan (One-Time Setup Fee)</H2>
      <P>
        The Starter plan is a one-time professional service. Because significant work begins immediately
        upon order confirmation, the following refund schedule applies:
      </P>
      <UL items={[
        'Full refund (100%) — if you cancel within 24 hours of payment and before setup work has commenced.',
        'Partial refund (50%) — if setup has commenced but delivery is not yet complete; covers unspent time.',
        'No refund — once the tracking infrastructure has been fully delivered and confirmed as operational.',
      ]} />
      <P>
        If there is a material defect — i.e. the tracking pixel does not function as described through
        no fault of your server or email client — we will correct it free of charge or issue a full
        refund at our sole discretion.
      </P>

      <H2>2. Professional Plan (Monthly Subscription)</H2>
      <P>
        The Professional plan is billed monthly in advance. The following applies:
      </P>
      <UL items={[
        'You may cancel at any time by emailing ' + EMAIL + ' with subject "Cancel Subscription."',
        'Cancellation takes effect at the end of your current paid billing period. You retain full access until then.',
        'No partial or pro-rata refunds are issued for unused days in a billing period.',
        'Any initial onboarding or setup fee charged at signup is non-refundable once setup is complete.',
        'If you cancel within 7 days of your first payment and the service has not yet been set up, you are eligible for a full refund.',
      ]} />

      <H2>3. Agency Plan (Monthly Subscription)</H2>
      <P>
        The Agency plan follows the same cancellation terms as the Professional Plan above.
        Client slots cancelled mid-cycle (downgrade requests) take effect at the next billing renewal date.
      </P>

      <H2>4. Custom / Enterprise Engagements</H2>
      <P>
        Refund and cancellation terms for Custom engagements are governed by the individual Statement
        of Work (SoW) or agreement signed at project initiation. Please refer to that document for
        specifics. Contact us at <A href={`mailto:${EMAIL}`}>{EMAIL}</A> for any clarifications.
      </P>

      <H2>5. Service Disruptions & Credits</H2>
      <P>
        If you experience a significant service disruption caused by our managed infrastructure (not
        your own server, hosting, network, or email client), we will issue a pro-rata service credit
        for the affected period. We evaluate these on a case-by-case basis and apply credits to the
        next billing cycle.
      </P>

      <H2>6. How to Request a Refund</H2>
      <P>
        Email us at <A href={`mailto:${EMAIL}`}>{EMAIL}</A> with the subject line{' '}
        <Strong>"Refund Request — [Your Name]"</Strong> and include:
      </P>
      <UL items={[
        'Your full name and the email address used for payment.',
        'The plan purchased and the date of purchase.',
        'A clear description of the reason for your refund request.',
        'Any supporting screenshots or information that helps us evaluate your request.',
      ]} />
      <P>
        We aim to respond within <Strong>2 business days</Strong> and process approved refunds within{' '}
        <Strong>5–10 business days</Strong>, depending on your payment method and financial institution.
        Refunds are issued to the original payment method only.
      </P>

      <H2>7. Chargebacks</H2>
      <P>
        We kindly ask that you contact us before initiating a chargeback with your card provider or
        payment platform. Chargebacks incur processing fees that we may seek to recover. We are always
        willing to resolve issues quickly and fairly — direct resolution is faster and simpler for
        everyone involved.
      </P>

      <H2>8. Non-Refundable Items</H2>
      <UL items={[
        'Domain registration or third-party server costs incurred on your behalf.',
        'Any custom development work completed and delivered per spec.',
        'Add-on services or consultation hours already rendered.',
      ]} />

      <H2>9. Changes to This Policy</H2>
      <P>
        We may update this Refund Policy from time to time. The current version always applies to
        purchases made on or after the "Effective Date" shown at the top of this policy. We will notify
        active subscribers of any material changes by email.
      </P>

      <ContactBox />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   MODAL SHELL
══════════════════════════════════════════════════════════════════ */
const PAGES = {
  terms:   { title: 'Terms of Service',           Body: Terms   },
  privacy: { title: 'Privacy Policy',             Body: Privacy },
  cookie:  { title: 'Cookie Policy',              Body: Cookie  },
  refund:  { title: 'Refund & Cancellation Policy', Body: Refund },
}

export default function LegalModal({ type, onClose }) {
  const page = PAGES[type]

  useEffect(() => {
    // Lock body scroll without losing scroll position
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflowY = 'scroll'

    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, scrollY)
      document.removeEventListener('keydown', onKey)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!page) return null
  const { title, Body } = page

  return (
    <div
      className="legal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="legal-modal">
        {/* Sticky header */}
        <div className="legal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 38, height: 38,
              background: 'linear-gradient(135deg,#6c5ce7,#a29bfe)',
              borderRadius: 11, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 18, flexShrink: 0,
              boxShadow: '0 4px 12px rgba(108,92,231,.3)',
            }}>📡</div>
            <div>
              <div style={{
                fontSize: 10, color: 'var(--muted)',
                textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700,
              }}>
                MailBeacon · Legal
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.2px' }}>
                {title}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="legal-close-btn"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="legal-body">
          <Body />
        </div>
      </div>
    </div>
  )
}
