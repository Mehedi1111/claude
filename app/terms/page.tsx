import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Evoke Studio",
  description: "Terms of service for Evoke Studio — the conditions under which we provide brand identity and AI logo vectorization services.",
  alternates: { canonical: "https://madebyevoke.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-sans font-semibold text-white/25 uppercase tracking-[0.25em] mb-6">
            Legal
          </p>
          <h1 className="text-[clamp(36px,5vw,72px)] font-display font-bold text-white tracking-[-0.04em] leading-[0.95]">
            Terms of Service
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

            <h2>1. Agreement</h2>
            <p>
              By using this website or engaging Evoke Studio for services, you agree
              to these terms. Evoke Studio is operated by Mehedi Hasan
              (&ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). If you do not agree, do not
              use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Evoke Studio provides brand identity design and AI logo vectorization
              services, including but not limited to: AI logo vectorization, logo
              cleanup, typography reconstruction, SVG conversion, brand system
              builds, logo design, and brand guidelines.
            </p>
            <p>
              All service scopes, deliverables, timelines, and pricing are agreed
              in writing (via email or project brief) prior to commencement of work.
            </p>

            <h2>3. Quotations and Payment</h2>
            <p>
              Quoted prices are valid for 14 days from the date issued. Quotes are
              based on the brief provided — changes in scope may affect the final
              price.
            </p>
            <p>
              Payment terms are stated in each project quote. Standard terms
              require a deposit before work begins, with the balance due on
              delivery. We reserve the right to withhold final files until payment
              is received in full.
            </p>

            <h2>4. Turnaround Times</h2>
            <p>
              Stated turnaround times (e.g. &ldquo;24–48 hours&rdquo;) are business-day
              estimates from the point of project approval and deposit receipt.
              Turnaround times may be affected by the complexity of the brief,
              revision requests, or client response delays.
            </p>

            <h2>5. Revisions</h2>
            <p>
              Each service includes a stated number of revision rounds as specified
              in your project quote. Revisions are interpreted as refinements to
              the agreed brief — not changes in creative direction. Additional
              revisions beyond what is included are billed at our standard hourly
              rate.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, the client receives full ownership of
              all final deliverable files. Evoke Studio retains the right to
              display completed work in its portfolio, on social media, and in
              marketing materials, unless the client explicitly requests
              confidentiality in writing prior to project commencement.
            </p>
            <p>
              All working files, sketches, and intermediate work product remain
              the property of Evoke Studio unless otherwise agreed.
            </p>

            <h2>7. Client Responsibilities</h2>
            <p>The client is responsible for:</p>
            <ul>
              <li>
                Providing accurate, complete project briefs and reference
                materials
              </li>
              <li>
                Ensuring they have the right to use any source materials
                (including AI-generated images) provided to us
              </li>
              <li>
                Reviewing and approving work within agreed timeframes
              </li>
              <li>
                Ensuring the final design does not infringe any third-party
                trademark or intellectual property rights
              </li>
            </ul>
            <p>
              Evoke Studio is not liable for trademark conflicts arising from
              client-directed design choices or source materials provided by the
              client.
            </p>

            <h2>8. AI-Generated Source Materials</h2>
            <p>
              Clients who submit AI-generated images for vectorization represent
              that they have the right to use and commercially exploit those images
              under the terms of the AI tool used to generate them. The client is
              solely responsible for understanding and complying with the usage
              rights of their AI generation tool.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              Evoke Studio&apos;s total liability for any claim arising from a
              project shall not exceed the total fees paid by the client for that
              project. We are not liable for indirect, consequential, or
              incidental damages of any kind.
            </p>

            <h2>10. Cancellations and Refunds</h2>
            <p>
              If a project is cancelled after work has commenced, the client is
              liable for fees proportional to the work completed. Deposits are
              non-refundable once work has begun. If we are unable to deliver due
              to our own failure, we will issue a full refund of fees paid.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with
              applicable law. Any disputes shall be resolved through good-faith
              negotiation first, and if necessary, through binding arbitration or
              the courts of the applicable jurisdiction.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. The current version
              is always available at this URL with the updated date noted above.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href="mailto:work@madebyevoke.com">work@madebyevoke.com</a> or
              via our <Link href="/contact">contact form</Link>.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
