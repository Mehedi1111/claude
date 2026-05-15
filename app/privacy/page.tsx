import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Evoke Studio",
  description: "Privacy policy for Evoke Studio — how we collect, use, and protect your information.",
  alternates: { canonical: "https://madebyevoke.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em] mb-6">
            Legal
          </p>
          <h1 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.95]">
            Privacy Policy
          </h1>
          <p className="text-sm font-sans text-white/30 mt-4">
            Last updated: May 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl prose-evoke">

            <h2>1. Who We Are</h2>
            <p>
              Evoke Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a brand identity and AI logo
              vectorization studio operated by Mehedi Hasan. Our website is{" "}
              <a href="https://madebyevoke.com">madebyevoke.com</a>. You can
              contact us at{" "}
              <a href="mailto:work@madebyevoke.com">work@madebyevoke.com</a>.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information you provide directly to us:</p>
            <ul>
              <li>
                <strong>Contact form submissions</strong> — your name, email
                address, and any message or project brief you submit through our
                contact form.
              </li>
              <li>
                <strong>Email correspondence</strong> — messages you send us
                directly at work@madebyevoke.com.
              </li>
              <li>
                <strong>Files you share</strong> — logo files, brand assets, or
                reference materials you provide for project work.
              </li>
            </ul>
            <p>
              We also collect limited technical data automatically when you visit
              our site, including your IP address, browser type, device type, pages
              visited, and referring URLs. This is collected via standard server
              logs and analytics tools.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and project requests</li>
              <li>Deliver project work you have commissioned</li>
              <li>Send quotes, invoices, and project updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third
              parties for their marketing purposes.
            </p>

            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>
              If you are located in the European Economic Area, we process your
              personal data under the following legal bases:
            </p>
            <ul>
              <li>
                <strong>Contract performance</strong> — processing necessary to
                deliver services you have requested
              </li>
              <li>
                <strong>Legitimate interests</strong> — responding to enquiries,
                operating our business, improving our services
              </li>
              <li>
                <strong>Legal obligation</strong> — where required by applicable
                law
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain project files and correspondence for a period of up to 3
              years after project completion. Contact form submissions are retained
              for up to 12 months. You may request earlier deletion at any time by
              contacting us.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              Our website may use the following third-party services, each with
              their own privacy policies:
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — website hosting and infrastructure
              </li>
              <li>
                <strong>Google Fonts / Next.js font optimization</strong> — web
                font delivery (fonts are self-hosted at build time)
              </li>
              <li>
                <strong>Email service provider</strong> — for sending and
                receiving project communications
              </li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Our website uses essential cookies only — those necessary for the
              site to function correctly. We do not use advertising cookies,
              tracking pixels, or cross-site tracking technologies.
            </p>

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Request portability of your data</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:work@madebyevoke.com">work@madebyevoke.com</a>.
            </p>

            <h2>9. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect
              your information. However, no method of internet transmission is
              100% secure. If you have concerns about a specific data interaction,
              contact us directly.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will
              be noted with an updated date at the top of this page. Continued use
              of our website after changes constitutes acceptance.
            </p>

            <h2>11. Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at{" "}
              <a href="mailto:work@madebyevoke.com">work@madebyevoke.com</a> or
              via our <Link href="/contact">contact form</Link>.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
