// ─── AI Services ─────────────────────────────────────────────────────────────

export const services = [
  {
    slug: "ai-logo-vectorization",
    number: "01",
    category: "ai",
    title: "AI Logo Vectorization",
    tagline: "Raw pixels. Rebuilt as vectors.",
    description:
      "We transform AI-generated raster logos into precision-crafted vector files. Every anchor point placed deliberately. Every curve calculated for infinite scalability.",
    longDescription:
      "Your AI-generated logo exists as a grid of pixels. At standard sizes, it appears clean. Zoom in — and the cracks appear. Blurry edges. Undefined curves. Jagged letterforms. We manually reconstruct your logo as infinitely scalable paths, ensuring it performs flawlessly at every scale, across every medium — from a mobile favicon to a 40-foot billboard.",
    features: [
      "Full path reconstruction from scratch — no auto-trace",
      "Multiple format delivery: SVG, AI, EPS, PDF",
      "Scalable from 16px favicon to 20-metre billboard",
      "Print and web-ready output",
      "Pantone and CMYK colour translation",
    ],
    deliverables: ["Master SVG file", "Adobe Illustrator source (.ai)", "EPS for print", "PDF for presentations", "PNG exports at multiple resolutions"],
    turnaround: "24–48 hours",
    startingPrice: "$50",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
    whoNeedsThis: ["Startup founders with Midjourney/DALL-E logos", "SaaS companies preparing for fundraising", "Creators launching merchandise", "Agencies delivering AI-assisted brand work"],
    commonUseCases: ["AI logo for investor pitch deck materials", "Midjourney brand mark for website and app", "ChatGPT-generated icon for app store submission", "Ideogram logo destined for embroidery or print"],
    serviceFAQ: [
      { q: "What AI tools do you accept files from?", a: "All of them: Midjourney, DALL-E 3, Ideogram, Stable Diffusion, Adobe Firefly, Leonardo AI, and any other generator that produces a raster image." },
      { q: "Do you use auto-trace?", a: "Never. Auto-trace produces hundreds of redundant anchor points and imprecise paths. Every path we deliver is drawn by hand." },
    ],
  },
  {
    slug: "ai-logo-cleanup",
    number: "02",
    category: "ai",
    title: "AI Logo Cleanup",
    tagline: "Precision where AI left imperfection.",
    description:
      "AI-generated logos carry invisible artifacts. Misaligned nodes, inconsistent stroke weights, broken paths. We audit every element and rebuild what needs rebuilding.",
    longDescription:
      "AI generation tools optimise for visual output, not technical integrity. The result is logos that look fine on-screen but fail in professional applications — print production, animation rigs, embroidery systems, and brand guidelines all require clean, structured files. We systematically audit and correct every technical flaw.",
    features: [
      "Node and anchor point cleanup",
      "Stroke-to-path conversion",
      "Alignment and symmetry correction",
      "Colour swatch normalisation",
      "File structure optimisation",
    ],
    deliverables: ["Cleaned SVG master", "Organised Illustrator layers", "Colour palette guide", "Usage notes"],
    turnaround: "12–24 hours",
    startingPrice: "$35",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    whoNeedsThis: ["Designers who received an AI logo from a client", "Brands preparing files for a print vendor", "Studios offering white-label cleanup services", "Developers needing production-ready SVGs"],
    commonUseCases: ["Cleaning an Ideogram logo before sending to embroidery vendor", "Fixing broken paths in a Stable Diffusion mark", "Preparing AI-generated icon sets for app production"],
    serviceFAQ: [
      { q: "What if my file needs more than cleanup?", a: "We'll let you know during the audit phase. If full reconstruction is needed, we'll quote accordingly before starting." },
    ],
  },
  {
    slug: "typography-reconstruction",
    number: "03",
    category: "ai",
    title: "Typography Reconstruction",
    tagline: "Letterforms that hold their integrity.",
    description:
      "AI-generated type is often rasterised or incorrectly rendered. We rebuild every letterform as clean, editable vector paths with correct spacing and optical balance.",
    longDescription:
      "Typography is the most sensitive element of any logo. AI tools frequently distort letterforms, merge characters, or create unbalanced spacing. We reconstruct each character from scratch — or identify and correctly apply the source typeface — so your brand's name reads with authority at every size.",
    features: [
      "Custom letterform vector reconstruction",
      "Typeface identification and sourcing",
      "Kerning and tracking correction",
      "Optical balance adjustment",
      "Ligature and glyph optimisation",
    ],
    deliverables: ["Vector typography file", "Outlined paths for production", "Font licensing guidance", "Spacing specification document"],
    turnaround: "24–48 hours",
    startingPrice: "$60",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    whoNeedsThis: ["Brands with a wordmark or logotype component", "Designers needing to match a distorted AI-generated font", "Companies preparing brand guidelines with type specs"],
    commonUseCases: ["Rebuilding an AI-generated wordmark with correct letterforms", "Correcting spacing in a DALL-E logotype for print", "Matching and documenting the source typeface"],
    serviceFAQ: [
      { q: "Can you identify the font used in my AI logo?", a: "Often yes. We use a combination of typeface databases and manual analysis to identify or match source fonts. If no match exists, we reconstruct custom letterforms." },
    ],
  },
  {
    slug: "svg-conversion",
    number: "04",
    category: "ai",
    title: "SVG Conversion",
    tagline: "Production-ready code, not just a file.",
    description:
      "Not all SVGs are equal. We deliver clean, optimised SVG code that works seamlessly in web, app, and motion contexts — not the bloated exports most tools produce.",
    longDescription:
      "A vector file and a production-ready SVG are not the same thing. Exported SVGs often contain redundant nodes, inline styles, and unoptimised paths that slow down performance and resist customisation. Our SVG output is hand-tuned: minimal code, clean IDs, and structured for animation, theming, and responsive behaviour.",
    features: [
      "Optimised SVG code output",
      "Semantic ID and class naming",
      "Animation-ready layer structure",
      "Responsive viewBox configuration",
      "CSS-themeable colour variables",
    ],
    deliverables: ["Optimised SVG file", "React component version (.tsx)", "Web-embed snippet", "Animation scaffold if required"],
    turnaround: "12–24 hours",
    startingPrice: "$40",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    whoNeedsThis: ["Web and app developers", "Frontend engineers needing React SVG components", "Designers integrating logos into Webflow or Framer"],
    commonUseCases: ["Converting an AI logo for use as a React component", "Optimising SVG code for Lighthouse performance scores", "Building an animation-ready logo layer structure"],
    serviceFAQ: [
      { q: "Do you deliver a React component?", a: "Yes. On request, we deliver a typed .tsx component with clean props for colour theming and size control." },
    ],
  },
  {
    slug: "brand-system-rebuild",
    number: "05",
    category: "ai",
    title: "Brand System Rebuild",
    tagline: "From a mark to a complete visual language.",
    description:
      "We extend your vectorised logo into a full brand system: colour palette, typography hierarchy, usage rules, and print-ready guidelines — everything a growing brand requires.",
    longDescription:
      "A logo is a starting point, not a brand. We build the complete system around it: a precise colour palette with hex, RGB, CMYK, and Pantone references; a typography system with clear hierarchy; spacing and layout rules; and a brand guidelines document that ensures consistency across every touchpoint.",
    features: [
      "Complete brand guidelines document",
      "Colour system with all print and digital values",
      "Typography hierarchy specification",
      "Logo usage rules and clear-space guides",
      "Business card and letterhead templates",
    ],
    deliverables: ["Brand guidelines PDF", "Complete asset library", "Stationery templates", "Social media kit", "Brand style guide"],
    turnaround: "5–7 business days",
    startingPrice: "$350",
    image: "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?w=1200&q=80",
    whoNeedsThis: ["Startups preparing for fundraising or launch", "Brands scaling their team and needing consistency", "Founders who've outgrown an informal brand approach"],
    commonUseCases: ["Building the brand system around a vectorised AI logo", "Creating guidelines for an in-house or agency design team", "Preparing a brand kit for investor or press materials"],
    serviceFAQ: [
      { q: "Does this include the logo vectorisation?", a: "Yes. If you're starting with an AI-generated logo, we include full vectorisation as part of the Brand System Rebuild." },
    ],
  },
];

// ─── Traditional Branding Services ───────────────────────────────────────────

export const traditionalServices = [
  {
    slug: "logo-design",
    number: "06",
    category: "traditional",
    title: "Logo Design",
    tagline: "Your brand mark, built from a blank canvas.",
    description:
      "Custom logo design from scratch. No AI generators, no stock assets. A mark conceived and crafted by human hands for your specific brand.",
    longDescription:
      "Every great brand starts with an intentional mark. We design custom logos through a structured discovery and concept development process — understanding your industry, audience, and values before a single path is drawn. The result is a logo that belongs to you, built to last, and engineered for professional use from day one.",
    features: [
      "Brand discovery and strategy brief",
      "3 distinct concept directions",
      "2 rounds of refinement",
      "Final files in all formats",
      "Colour and monochrome versions",
    ],
    deliverables: ["Master SVG and AI source file", "EPS and PDF for print", "PNG at multiple resolutions", "Reverse (white) version", "Favicon-optimised version"],
    turnaround: "5–7 business days",
    startingPrice: "$150",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    whoNeedsThis: ["Startups launching their first product", "Entrepreneurs establishing a personal brand", "Businesses rebranding for a new market"],
    commonUseCases: ["New startup needing a foundational brand mark", "Personal brand for a founder or creator", "Product brand distinct from a parent company"],
    serviceFAQ: [
      { q: "Can I request more than 3 concepts?", a: "Additional concept directions are available at a nominal fee per round. Most clients find 3 directions sufficient for a clear decision." },
      { q: "What if I don't like any of the initial concepts?", a: "This rarely happens because we invest heavily in the brief phase. If none resonate, we offer one additional round at no charge." },
    ],
  },
  {
    slug: "brand-identity",
    number: "07",
    category: "traditional",
    title: "Brand Identity Design",
    tagline: "A complete visual system, built to scale.",
    description:
      "More than a logo. A cohesive visual identity system: mark, colour palette, typography, patterns, and imagery direction — designed to work across every surface.",
    longDescription:
      "A logo without a system is a mark without context. Brand identity design at Evoke means building the complete visual language around your mark: a structured colour system, a typography hierarchy that holds across digital and print, secondary graphic elements, and a set of design principles that guide every future decision.",
    features: [
      "Custom logo design included",
      "Comprehensive colour system (hex, RGB, CMYK, Pantone)",
      "Typography hierarchy (2–3 typefaces)",
      "Secondary graphic elements and patterns",
      "Brand imagery and photography direction",
    ],
    deliverables: ["All logo files (SVG, AI, EPS, PDF, PNG)", "Brand guidelines PDF (30–50 pages)", "Typography specimens", "Colour palette document", "Social media templates"],
    turnaround: "10–14 business days",
    startingPrice: "$500",
    image: "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?w=1200&q=80",
    whoNeedsThis: ["Funded startups preparing for launch", "Growing brands investing in long-term consistency", "Companies preparing for a rebrand or pivot"],
    commonUseCases: ["Series A startup establishing its full brand identity", "Product launch requiring a cohesive brand system", "Rebrand of an established business with outdated visuals"],
    serviceFAQ: [
      { q: "Is brand strategy included?", a: "A foundational brand brief is included. For deep brand strategy (positioning, naming, voice and tone), this is available as an add-on service." },
    ],
  },
  {
    slug: "business-stationery",
    number: "08",
    category: "traditional",
    title: "Business Stationery",
    tagline: "Every touchpoint, designed with precision.",
    description:
      "Business cards, letterhead, envelopes, and email signatures — designed with the same precision as your brand mark and ready for professional print production.",
    longDescription:
      "The physical touchpoints of your brand matter. A well-designed business card creates a first impression that a follow-up email cannot. We design complete stationery suites that reflect your brand standards precisely, delivered in print-ready formats with bleed and crop marks — ready to send directly to your printer.",
    features: [
      "Business card design (front and back)",
      "A4 letterhead",
      "Compliments slip",
      "Envelope design",
      "HTML email signature",
    ],
    deliverables: ["Print-ready PDF files with bleed", "Digital versions for web use", "Email signature HTML code", "InDesign source files on request"],
    turnaround: "3–5 business days",
    startingPrice: "$200",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=1200&q=80",
    whoNeedsThis: ["Founders attending conferences or meetings", "Agencies requiring matched branded materials", "Businesses that want cohesive print collateral"],
    commonUseCases: ["Business cards for a product launch event", "Branded letterhead for formal business correspondence", "Email signature rollout for a growing team"],
    serviceFAQ: [
      { q: "Do you recommend printers?", a: "Yes. We work with a vetted network of premium print vendors and can facilitate your print order directly if required." },
    ],
  },
  {
    slug: "brand-guidelines",
    number: "09",
    category: "traditional",
    title: "Brand Guidelines",
    tagline: "Your brand, documented for everyone who touches it.",
    description:
      "A comprehensive brand standards document that ensures anyone working with your brand — designers, developers, partners — executes it correctly.",
    longDescription:
      "Without documented guidelines, brand inconsistency is inevitable. Every new designer reinvents the wheel; every new vendor applies slightly different colours; every new channel looks disconnected. Brand guidelines eliminate this. We document every element of your visual identity clearly, so your brand performs consistently across every touchpoint, forever.",
    features: [
      "Logo usage rules and misuse examples",
      "Clear space and minimum size specifications",
      "Full colour system documentation",
      "Typography rules and specimen sheets",
      "Do and don't visual examples",
    ],
    deliverables: ["Brand guidelines PDF (20–40 pages)", "Digital guidelines web link (optional)", "Asset library ZIP file", "Quick reference card"],
    turnaround: "4–6 business days",
    startingPrice: "$250",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    whoNeedsThis: ["Brands onboarding their first designer", "Companies working with agencies or freelancers", "Businesses franchising or licensing their brand"],
    commonUseCases: ["Guidelines for a brand being handed to an in-house team", "Standards document for a licensing or franchise agreement", "Visual identity rules for a growing organisation"],
    serviceFAQ: [
      { q: "Can you create guidelines for an existing brand?", a: "Yes. We can audit your existing brand assets and build comprehensive guidelines around them, even without redesigning the visual identity." },
    ],
  },
  {
    slug: "visual-identity-system",
    number: "10",
    category: "traditional",
    title: "Visual Identity System",
    tagline: "The full picture. Every element. Perfectly unified.",
    description:
      "The most comprehensive brand offering. Logo, identity system, guidelines, stationery, digital templates, and a complete asset library — built to the highest standard.",
    longDescription:
      "The Visual Identity System is our most complete offering. It combines every element of brand design into a single, cohesive engagement: strategy brief, logo design, full identity system, brand guidelines, stationery suite, and a production asset library. For brands that need to get it right the first time.",
    features: [
      "Everything in Brand Identity Design",
      "Full brand guidelines document",
      "Complete stationery suite",
      "Social media template kit",
      "Brand asset library ZIP",
    ],
    deliverables: ["All logo formats", "Complete brand guidelines", "Stationery print files", "Social media kit", "Full asset library"],
    turnaround: "14–21 business days",
    startingPrice: "$800",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    whoNeedsThis: ["Funded startups investing in a complete brand foundation", "Companies undergoing a full rebrand", "Agencies building a white-label brand system for a client"],
    commonUseCases: ["Series A startup building a complete, investor-ready brand system", "Product rebrand requiring every touchpoint to be refreshed", "Agency white-label brand build for a premium client"],
    serviceFAQ: [
      { q: "Is this suitable for enterprise clients?", a: "Yes. For enterprise-scale engagements, we scope individually. Contact us to discuss your requirements and we'll build a custom brief." },
    ],
  },
];

// ─── All services combined ────────────────────────────────────────────────────

export const allServices = [...services, ...traditionalServices];

// ─── Portfolio ────────────────────────────────────────────────────────────────

export const portfolioItems = [
  {
    id: "01",
    slug: "caravel-solutions",
    client: "Caravel Solutions",
    category: "Logo & Brand Identity",
    description: "A distinctive geometric mark and complete brand identity system for a B2B solutions company — built for precision and credibility across every professional touchpoint.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a24796218256145.679e5b461c4d2.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg",
    year: "2025",
    tags: ["Logo Design", "Brand Identity", "B2B", "Corporate"],
    challenge: "Caravel Solutions needed a distinctive, professional logo and brand identity that conveyed reliability, precision, and forward momentum — standing apart from the generic tech aesthetics that dominate the B2B solutions space.",
    solution: "A custom geometric mark built on a mathematical grid system, paired with a precise typographic wordmark and complete brand identity system covering colour, typography, and usage guidelines for all applications.",
    outcomes: ["Distinctive mark differentiating the brand in a crowded market", "Complete brand identity system delivered", "Print and digital assets ready from day one"],
    service: "Logo Design + Brand Identity",
  },
  {
    id: "02",
    slug: "transam",
    client: "Transam",
    category: "Freight & Logistics Branding",
    description: "Bold, structural brand identity for a freight and logistics company — engineered for fleet livery, large-format signage, and every touchpoint in between.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5064c2218817767.67a79f6adcccd.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4fe158218817767.67a79f6adf2a0.jpg",
    year: "2025",
    tags: ["Logo Design", "Branding", "Freight", "Logistics", "Transport"],
    challenge: "Transam needed a bold, authoritative brand identity that communicated scale and reliability in the freight and logistics sector — an industry where trust and operational confidence are the deciding factors in client acquisition.",
    solution: "A strong, structural logomark built on angular precision geometry, paired with a commanding typographic wordmark and a brand system in industrial blue and black that signals strength without compromising professionalism.",
    outcomes: ["Brand identity deployed across fleet, stationery, and digital", "Mark designed for vehicle livery and large-format signage", "Brand guidelines covering all application contexts"],
    service: "Branding & Logo Design",
  },
  {
    id: "03",
    slug: "pettiny",
    client: "Pettiny",
    category: "Brand Identity",
    description: "A premium pet brand identity that balances warmth and playfulness with the polish needed to compete in a crowded DTC market.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ee996e206990105.66d6135a0ea49.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2c3244206990105.66d6135a0e204.jpg",
    year: "2024",
    tags: ["Brand Identity", "Pet Industry", "DTC", "Playful", "Logo Design"],
    challenge: "Pettiny needed a brand identity that balanced playfulness with professionalism — warm and approachable enough for pet owners, but polished and consistent enough to compete in a premium DTC product market.",
    solution: "A distinctive logomark combining organic warmth with structured precision, a palette anchored in warm earth tones and natural greens, and a full brand identity system that scales from product packaging to social media without losing character.",
    outcomes: ["Complete brand identity delivered in 10 days", "Brand system applied across product packaging and digital", "Mark works across web, print, and embossed packaging"],
    service: "Brand Identity Design",
  },
  {
    id: "04",
    slug: "aerion",
    client: "Aerion",
    category: "Logo & Brand Identity",
    description: "Aerodynamic precision mark and full brand identity for an aviation technology company — capturing the speed and elegance of flight in pure geometry.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9d5060216026209.6779119a3aa6a.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/20747d216026209.6779119a38158.jpg",
    year: "2024",
    tags: ["Logo Design", "Brand Identity", "Aviation", "Technology", "Precision"],
    challenge: "Aerion required a mark that communicated aerodynamic precision and technological confidence — capturing the speed and elegance of flight in a geometric form that would hold its own against established aerospace and aviation industry identities.",
    solution: "A precision-engineered logomark derived from aerodynamic geometry, with a brand system built on the contrast between dark authority and clean technological white — deployed across a full identity system for the aviation technology sector.",
    outcomes: ["Mark captures aerodynamic precision in pure geometry", "Brand system deployed across digital and print", "Works across dark and light applications"],
    service: "Logo Design + Brand Identity",
  },
  {
    id: "05",
    slug: "jowa",
    client: "Jowa",
    category: "Brand Identity",
    description: "Minimal geometric lettermark and precision brand system for a digital-first brand — designed to perform perfectly from 16px favicon to full-page hero.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7b9892217863207.6797e24626068.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/295c53217863207.6797e24625966.jpg",
    year: "2025",
    tags: ["Logo Design", "Brand Identity", "Wordmark", "Modern", "Minimal"],
    challenge: "Jowa needed a clean, minimal brand identity that communicated contemporary confidence — a mark that would read with authority across digital product interfaces, marketing materials, and printed collateral without relying on decorative complexity.",
    solution: "A refined geometric lettermark with precise optical corrections to every curve and joint, paired with a minimalist brand system in near-black and clean white that communicates modern authority with no visual noise.",
    outcomes: ["Minimal mark with maximum presence at all sizes", "Brand system optimised for digital-first applications", "Complete identity delivered in 7 days"],
    service: "Logo Design + Brand Identity",
  },
  {
    id: "06",
    slug: "phytos",
    client: "PHYTOS",
    category: "Cannabis Wellness Brand",
    description: "Premium botanical brand identity for a cannabis wellness company — positioned firmly in the luxury health space, not the dispensary.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6024d3196865285.662739ef7d2ff.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b140b3196865285.662739ef7998c.jpg",
    year: "2024",
    tags: ["Logo Design", "Cannabis", "Wellness", "Brand Identity", "Natural"],
    challenge: "PHYTOS needed a cannabis wellness brand that positioned them firmly in the premium health and lifestyle space — far removed from recreational cannabis aesthetics — communicating botanical expertise, clinical credibility, and natural purity.",
    solution: "A refined botanical logomark combining organic form with structured precision, a muted natural palette anchored in sage and warm earth tones, and a complete brand identity system designed for premium health retail and direct-to-consumer digital.",
    outcomes: ["Brand positioned distinctly in premium wellness segment", "Visual identity distanced from recreational cannabis aesthetics", "Packaging-ready file set delivered with Pantone certification"],
    service: "Logo Design + Brand Identity",
  },
  {
    id: "07",
    slug: "arkane",
    client: "ARKANE",
    category: "Architecture & Design Brand",
    description: "A typographic wordmark of exceptional refinement for an architecture practice — every letterform drawn to architectural proportion standards.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c8bd53181872509.6523e2513af3c.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0349c9181872509.6523e2513a2f1.jpg",
    year: "2023",
    tags: ["Logo Design", "Architecture", "Wordmark", "Typography", "Brand Identity"],
    challenge: "ARKANE, an architecture and design practice, needed a brand identity with the visual authority to attract high-value commercial clients and residential commissions — communicating the firm's commitment to structural precision and considered spatial design.",
    solution: "A typographic wordmark of exceptional refinement — every letterform drawn to architectural proportion standards — paired with a monochromatic brand system that communicates the precision and restraint of high-end architectural practice.",
    outcomes: ["Wordmark built to architectural proportion standards", "Brand deployed across practice stationery and proposals", "Monochrome system works across all print and digital"],
    service: "Logo Design + Wordmark",
  },
  {
    id: "08",
    slug: "focal",
    client: "FOCAL",
    category: "Brand Identity",
    description: "Complete brand identity with integrated motion design language for a visual media company — built for screen, print, and live presentation contexts.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bf14a7196694883.66241ece670c4.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3ed083196694883.66241ece68966.jpg",
    year: "2024",
    tags: ["Logo Design", "Brand Identity", "Motion", "Media", "Visual Identity"],
    challenge: "FOCAL needed a brand identity that communicated both the precision of focus and the energy of visual media — a mark that worked as a still logo, performed in motion contexts, and anchored a complete visual identity system across digital and physical applications.",
    solution: "A geometric mark built around optical focusing principles, deployed across a bold brand system with strong tonal contrast and a motion design language that brings the identity to life in video, digital, and live presentation contexts.",
    outcomes: ["Mark designed for both static and motion applications", "Complete brand system with motion design language", "Works across digital screens and print applications"],
    service: "Logo Design + Brand Identity + Motion",
  },
  {
    id: "09",
    slug: "logofolio-2025",
    client: "Multiple Clients",
    category: "Logo Design Collection",
    description: "A curated collection of 12 logo and brand identity marks from 2025 — spanning technology, professional services, consumer brands, wellness, and creative industries.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/185a22226624279.68319be67c506.jpg",
    coverImage: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/565cd3226624279.68319be67d8ed.jpg",
    year: "2025",
    tags: ["Logofolio", "Logo Design", "Brand Identity", "Multiple Clients", "2025"],
    challenge: "A curated collection of logo and brand identity work from 2025 — spanning technology, professional services, consumer brands, wellness, and creative industries — demonstrating the range and precision of Evoke Studio's design approach.",
    solution: "Every mark in this collection was designed without AI generation — hand-crafted geometric and typographic solutions, each built on a mathematical grid and delivered with full brand system documentation.",
    outcomes: ["12 distinct brands across 8 industry sectors", "Every mark built on mathematical grid systems", "Selected for Behance Curated Collections"],
    service: "Logo Design + Brand Identity",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: "01",
    quote: "We had a beautiful Midjourney logo that was completely unusable in production. Evoke turned it into a perfect SVG in under 24 hours. The difference in quality was immediately apparent to our entire team.",
    author: "Marcus Chen",
    title: "Co-Founder & CEO",
    company: "Nexus AI",
    rating: 5,
  },
  {
    id: "02",
    quote: "I've worked with three brand agencies before. None of them were as technically precise as Evoke. They understand the difference between a logo that looks good and a logo that works.",
    author: "Sophie Laurent",
    title: "Creative Director",
    company: "Forma Studio",
    rating: 5,
  },
  {
    id: "03",
    quote: "The vector rebuild was flawless. Our logo now scales from our app icon to our trade show booth without a single pixel out of place. Worth every cent.",
    author: "James Whitfield",
    title: "Head of Brand",
    company: "Arc Commerce",
    rating: 5,
  },
  {
    id: "04",
    quote: "Evoke delivered a brand system that made us look like a Series B company on day one. Precise, professional, and delivered faster than I expected.",
    author: "Priya Mehta",
    title: "Founder",
    company: "Volt SaaS",
    rating: 5,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "What file formats do you accept as input?",
    answer: "We accept any raster format: PNG, JPG, WEBP, and PDF. We can also work with existing vector files (SVG, AI, EPS) that require cleanup or reconstruction. If your AI tool exports directly to SVG, submit that too — it helps us understand the original intent.",
  },
  {
    question: "What AI logo generators do you work with?",
    answer: "All major AI image tools: Midjourney, DALL-E 3, Adobe Firefly, Stable Diffusion, Ideogram, Leonardo AI, ChatGPT image generation, and any others. If your tool produces a visual, we can vectorise it.",
  },
  {
    question: "How much does AI logo vectorisation cost?",
    answer: "AI logo vectorisation starts from $50, depending on the complexity of the mark. Simple geometric logos start at $50. Complex marks with intricate detail, gradients, or typography components are quoted individually. Submit your logo for a free custom quote within 1 business day.",
  },
  {
    question: "How long does the process take?",
    answer: "Standard vectorisation and cleanup orders are delivered within 24–48 hours. Brand System and Identity projects typically require 5–14 business days depending on scope. Rush delivery (12 hours) is available for an additional fee.",
  },
  {
    question: "What file formats will I receive?",
    answer: "All deliveries include SVG, PDF, AI (Adobe Illustrator), and EPS files as standard. PNG exports at multiple resolutions are included at no extra cost. React SVG components and Figma-ready assets are available on request.",
  },
  {
    question: "Do you offer traditional logo design (not AI)?",
    answer: "Yes. We offer complete traditional branding services — logo design from scratch, brand identity systems, brand guidelines, stationery, and full visual identity systems. Every mark is designed by hand with no AI generation involved.",
  },
  {
    question: "Do you handle complex logos with gradients or effects?",
    answer: "Yes. We handle logos with gradients, shadows, complex geometric forms, and intricate detail. Some effects require decisions about how they translate to vector — we consult with you on any significant creative choices before proceeding.",
  },
  {
    question: "Can I request revisions?",
    answer: "Yes. All orders include two rounds of revisions at no additional cost, requested within 7 days of delivery. Additional revision rounds are available at a nominal fee.",
  },
  {
    question: "Do you offer white-label services for agencies?",
    answer: "Yes. We work with design agencies and studios that need a reliable vectorisation and branding partner. White-label delivery — no Evoke branding in files or communications — is available for agency clients. Email us to discuss partnership terms.",
  },
  {
    question: "How do I submit my logo?",
    answer: "Use the contact form on our website. Upload your AI-generated logo file, describe your brand, and tell us how you intend to use it. We'll respond with a quote within one business day.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    slug: "ai-logo-vectorization-complete-guide",
    title: "The Complete Guide to AI Logo Vectorization",
    excerpt: "Everything a founder, marketer, or designer needs to know about converting AI-generated logos into production-ready vector files — the process, the formats, and the failure points.",
    category: "Guide",
    readTime: "10 min read",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["AI Logo", "Vectorization", "Brand Identity", "Logo Design", "Production"],
  },
  {
    slug: "vectorize-midjourney-logo",
    title: "How to Vectorize a Midjourney Logo (The Right Way)",
    excerpt: "Midjourney produces raster images, not vector files. Here's the exact process for converting a Midjourney-generated logo into a production-ready vector.",
    category: "How-To",
    readTime: "8 min read",
    date: "May 14, 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Midjourney", "Vectorization", "Logo Design", "SVG"],
  },
  {
    slug: "ai-logo-rgb-to-cmyk",
    title: "AI Logo Color Conversion: What Actually Changes Going From RGB to CMYK",
    excerpt: "RGB and CMYK are not interchangeable. When you send an AI-generated logo to print without converting the color space, this is precisely what breaks.",
    category: "Technical",
    readTime: "7 min read",
    date: "May 13, 2025",
    image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Color Management", "CMYK", "RGB", "Print Production", "Pantone"],
  },
  {
    slug: "logo-file-formats-explained",
    title: "SVG, AI, EPS, PDF, PNG: Which Logo File Do You Actually Need?",
    excerpt: "Six logo file formats, three completely different use cases. Here's what each format actually does and how to know which one to send to any vendor.",
    category: "Education",
    readTime: "6 min read",
    date: "May 12, 2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Logo Files", "SVG", "EPS", "PDF", "Brand Assets"],
  },
  {
    slug: "manual-vectorization-explained",
    title: "What Manual Vectorization Actually Is (And Why It Takes Longer)",
    excerpt: "Manual vectorization is not a premium term for the same process done more carefully. It is a fundamentally different technical approach.",
    category: "Technical",
    readTime: "7 min read",
    date: "May 11, 2025",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Manual Vectorization", "Vector Design", "Brand Production", "Bezier Curves"],
  },
  {
    slug: "ai-logo-embroidery-requirements",
    title: "Getting Your AI Logo Ready for Embroidery: What the Digitizer Actually Needs",
    excerpt: "Embroidery has the most demanding technical requirements of any logo production method. Here's exactly what your AI-generated logo needs before it can be stitched.",
    category: "How-To",
    readTime: "7 min read",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Embroidery", "AI Logo", "Production", "Merchandise"],
  },
  {
    slug: "svg-optimization-for-web",
    title: "How to Optimize an SVG Logo for Web: File Size, Code Quality, and Performance",
    excerpt: "An SVG logo exported from Illustrator and an SVG logo optimized for production are different files. Here's what separates them.",
    category: "Technical",
    readTime: "8 min read",
    date: "May 9, 2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["SVG", "Web Performance", "Logo Optimization", "Frontend", "React"],
  },
  {
    slug: "ai-logo-rejected-by-printer",
    title: "Why Print Vendors Keep Rejecting Your AI Logo (And the Exact Fix for Each Reason)",
    excerpt: "Print rejection is not random. Every time a vendor turns away your file, there is a specific technical reason. Here are the most common causes and exact fixes.",
    category: "Troubleshooting",
    readTime: "7 min read",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Print Production", "AI Logo", "Troubleshooting", "CMYK", "Vectorization"],
  },
  {
    slug: "svg-broken-after-export",
    title: "SVG Looks Wrong After Export: 7 Causes and How to Fix Each One",
    excerpt: "Your logo looked perfect in Illustrator. The exported SVG is missing shapes, showing wrong colors, or displaying with a black rectangle behind it.",
    category: "Troubleshooting",
    readTime: "7 min read",
    date: "May 7, 2025",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["SVG", "Troubleshooting", "Logo Export", "Illustrator", "Web Development"],
  },
  {
    slug: "auto-trace-vs-manual-vectorization",
    title: "Auto-Trace vs Manual Vectorization: An Honest Comparison",
    excerpt: "Auto-trace is faster and cheaper. Manual vectorization produces a categorically different file. Here's exactly when each approach is appropriate.",
    category: "Comparison",
    readTime: "8 min read",
    date: "May 6, 2025",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&q=80",
    author: { name: "Mehedi Hasan", role: "Founder & CEO, Evoke Studio" },
    tags: ["Vectorization", "Auto-Trace", "Logo Quality", "AI Logo", "Comparison"],
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps = [
  {
    number: "01",
    title: "Submit",
    description: "Upload your AI-generated logo or brief through our secure intake form. Include brand notes, colour references, and intended use cases.",
  },
  {
    number: "02",
    title: "Audit",
    description: "We analyse your file's structure, identify technical issues, and scope the reconstruction work. You receive a clear quote before we begin.",
  },
  {
    number: "03",
    title: "Rebuild",
    description: "Every path, every curve, every letterform — reconstructed by hand. No auto-trace. No shortcuts. Manual precision, point by point.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Print-ready, web-ready, brand-ready files land in your inbox. Clean, organised, production-tested. Revisions included.",
  },
];

// ─── Trust Metrics ────────────────────────────────────────────────────────────

export const trustMetrics = [
  { value: "500", suffix: "+", label: "Logos Vectorised" },
  { value: "100", suffix: "%", label: "Manual Precision" },
  { value: "48", suffix: "hr", label: "Standard Turnaround" },
  { value: "4.9", suffix: "/5", label: "Clutch Rating" },
];

// ─── Marquee ─────────────────────────────────────────────────────────────────

export const marqueeItems = [
  "AI LOGO VECTORIZATION",
  "BRAND IDENTITY DESIGN",
  "LOGO DESIGN FROM SCRATCH",
  "SVG CONVERSION",
  "TYPOGRAPHY RECONSTRUCTION",
  "BRAND GUIDELINES",
  "AI LOGO CLEANUP",
  "PRINT-READY DELIVERY",
  "VISUAL IDENTITY SYSTEM",
  "INFINITE PRECISION",
];

// ─── Social ───────────────────────────────────────────────────────────────────

export const socialLinks = {
  twitter: "https://x.com/MadeByEvoke",
  linkedin: "https://www.linkedin.com/company/madebyevoke/",
  clutch: "https://clutch.co/profile/evoke",
  email: "work@madebyevoke.com",
};
