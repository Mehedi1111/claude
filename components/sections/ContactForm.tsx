"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";

const serviceOptions = [
  { label: "AI Logo Vectorization", price: "From $50", category: "ai" },
  { label: "AI Logo Cleanup", price: "From $35", category: "ai" },
  { label: "Typography Reconstruction", price: "From $60", category: "ai" },
  { label: "SVG Conversion", price: "From $40", category: "ai" },
  { label: "Brand System Rebuild", price: "From $350", category: "ai" },
  { label: "Logo Design", price: "From $150", category: "traditional" },
  { label: "Brand Identity Design", price: "From $500", category: "traditional" },
  { label: "Business Stationery", price: "From $200", category: "traditional" },
  { label: "Brand Guidelines", price: "From $250", category: "traditional" },
  { label: "Visual Identity System", price: "From $800", category: "traditional" },
  { label: "Domain Acquisition — ZoningGraph.com", price: "Inquire", category: "domain" },
  { label: "Domain Acquisition — ZoningOps.com", price: "Inquire", category: "domain" },
  { label: "Domain Acquisition — PayXara.com", price: "Inquire", category: "domain" },
  { label: "Domain Acquisition — Fundegrity.com", price: "Inquire", category: "domain" },
  { label: "Domain Acquisition — FundAgri.com", price: "Inquire", category: "domain" },
  { label: "Not sure yet — advise me", price: "", category: "other" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const aiToolRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const toggleService = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side honeypot check
    if (honeypotRef.current?.value) {
      setSubmitted(true);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const serviceList = selected.length ? selected.join(", ") : "Not specified";
      const aiTool = aiToolRef.current?.value || "";
      const body = [
        `Name: ${nameRef.current?.value}`,
        companyRef.current?.value ? `Company: ${companyRef.current.value}` : "",
        `Services: ${serviceList}`,
        aiTool ? `AI Tool: ${aiTool}` : "",
        fileName ? `File: ${fileName}` : "",
        messageRef.current?.value ? `\nProject Details:\n${messageRef.current.value}` : "",
      ].filter(Boolean).join("\n");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "59922070-0d79-4f55-8d25-ca3374880536",
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          subject: `New inquiry from ${nameRef.current?.value}${companyRef.current?.value ? ` — ${companyRef.current.value}` : ""}`,
          message: body,
          from_name: "Evoke Studio Contact Form",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at work@madebyevoke.com");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-start justify-center min-h-[420px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10L8.5 14.5L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-[#0a0a0a] tracking-[-0.03em] mb-3">
          Brief received.
        </h3>
        <p className="text-base font-sans text-[#737373] leading-relaxed max-w-sm">
          We&apos;ll review your project and respond within one business day
          with a custom quote and clear next steps.
        </p>
        <p className="text-sm font-sans text-[#0a0a0a]/40 mt-4">
          Expected reply: within 24 hours on business days.
        </p>
      </motion.div>
    );
  }

  return (
    <SectionReveal delay={0.15}>
      <form onSubmit={handleSubmit} className="space-y-7">

        {/* Honeypot — hidden from real users, bots fill it */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
          <label htmlFor="_hp">Leave this empty</label>
          <input
            id="_hp"
            ref={honeypotRef}
            type="text"
            name="_hp"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
              Name *
            </label>
            <input
              id="contact-name"
              ref={nameRef}
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm font-sans text-[#0a0a0a] bg-white placeholder-[#c4c4c4] focus:border-[#0a0a0a] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-company" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
              Company
            </label>
            <input
              id="contact-company"
              ref={companyRef}
              type="text"
              placeholder="Company or brand"
              className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm font-sans text-[#0a0a0a] bg-white placeholder-[#c4c4c4] focus:border-[#0a0a0a] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            ref={emailRef}
            type="email"
            required
            placeholder="you@company.com"
            className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm font-sans text-[#0a0a0a] bg-white placeholder-[#c4c4c4] focus:border-[#0a0a0a] focus:outline-none transition-colors"
          />
        </div>

        {/* Service selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em]">
              Service needed
            </label>
            <span className="text-[11px] font-sans text-[#0a0a0a]/30">
              AI logo vectorisation from $50
            </span>
          </div>
          <div className="space-y-1.5">
            {["ai", "traditional", "domain", "other"].map((cat) => {
              const catServices = serviceOptions.filter(s => s.category === cat);
              const catLabel = cat === "ai" ? "AI Services" : cat === "traditional" ? "Traditional Branding" : cat === "domain" ? "Domain Acquisition" : "";
              return (
                <div key={cat}>
                  {catLabel && (
                    <p className="text-[10px] font-sans font-semibold text-[#0a0a0a]/25 uppercase tracking-[0.15em] mt-4 mb-2">
                      {catLabel}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {catServices.map((svc) => (
                      <button
                        key={svc.label}
                        type="button"
                        onClick={() => toggleService(svc.label)}
                        className={`group flex items-center gap-2 text-[12px] font-sans font-medium px-3 py-2 border transition-all duration-200 ${
                          selected.includes(svc.label)
                            ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                            : "bg-white text-[#737373] border-[#e5e5e5] hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
                        }`}
                      >
                        {svc.label}
                        {svc.price && (
                          <span className={`text-[10px] ${selected.includes(svc.label) ? "text-white/50" : "text-[#0a0a0a]/30"}`}>
                            {svc.price}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* File upload */}
        <div>
          <label htmlFor="contact-file" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
            Upload your logo (optional)
          </label>
          <label
            htmlFor="contact-file"
            className="border border-dashed border-[#d4d4d4] hover:border-[#0a0a0a] transition-colors cursor-pointer p-5 text-center block"
          >
            <input
              id="contact-file"
              ref={fileRef}
              type="file"
              accept=".png,.jpg,.jpeg,.svg,.ai,.eps,.pdf,.webp"
              className="sr-only"
              onChange={handleFileChange}
            />
            {fileName ? (
              <div className="flex items-center justify-center gap-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-sans font-medium text-[#0a0a0a]">{fileName}</span>
                <span className="text-xs font-sans text-[#737373]">— click to change</span>
              </div>
            ) : (
              <div>
                <p className="text-sm font-sans text-[#737373]">
                  Drop your file here or <span className="text-[#0a0a0a] font-medium underline">browse</span>
                </p>
                <p className="text-[11px] font-sans text-[#b4b4b4] mt-1">
                  PNG, JPG, SVG, AI, EPS, PDF, WEBP accepted
                </p>
              </div>
            )}
          </label>
          <p className="text-[11px] font-sans text-[#737373] mt-1.5">
            Uploading a file helps us provide a more accurate quote.
          </p>
        </div>

        {/* AI tool */}
        <div>
          <label htmlFor="contact-ai-tool" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
            AI tool used (if applicable)
          </label>
          <input
            id="contact-ai-tool"
            ref={aiToolRef}
            type="text"
            placeholder="Midjourney, DALL-E, Ideogram, etc."
            className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm font-sans text-[#0a0a0a] bg-white placeholder-[#c4c4c4] focus:border-[#0a0a0a] focus:outline-none transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-[11px] font-sans font-semibold text-[#0a0a0a]/45 uppercase tracking-[0.15em] mb-2">
            Project details
          </label>
          <textarea
            id="contact-message"
            ref={messageRef}
            rows={4}
            placeholder="Tell us about your brand, how you intend to use the logo, any specific requirements or deadlines..."
            className="w-full border border-[#e5e5e5] px-4 py-3.5 text-sm font-sans text-[#0a0a0a] bg-white placeholder-[#c4c4c4] focus:border-[#0a0a0a] focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm font-sans text-red-600 bg-red-50 border border-red-200 px-4 py-3">
            {error}
          </p>
        )}

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 text-sm font-sans font-semibold text-white bg-[#0a0a0a] px-8 py-4 hover:bg-[#1f1f1f] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending…" : "Send Brief & Get Quote"}
            {!loading && <span>→</span>}
          </button>
          <p className="text-[12px] font-sans text-[#737373]">
            We respond within 1 business day. No spam.
          </p>
        </div>
      </form>
    </SectionReveal>
  );
}
