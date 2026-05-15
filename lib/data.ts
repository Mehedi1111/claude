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
    slug: "kova-spirits",
    client: "Kova Spirits",
    category: "AI Logo Vectorization",
    description: "A craft gin brand's Midjourney label mark rejected twice by their packaging printer. Rebuilt as print-certified vectors — accepted first submission, 5,000 units produced.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "Packaging", "Print-Ready"],
    challenge: "A craft gin brand's Midjourney-generated label mark was rejected twice by their packaging printer, delaying a product launch by three weeks and costing the founder thousands in rescheduled production slots.",
    solution: "Full path-level vector reconstruction with precise Pantone matching for gold foil and black ink on two stock types, and print-ready file delivery accepted by the packaging vendor on the first submission.",
    outcomes: ["Packaging printer accepted first submission", "5,000 units produced for retail launch", "Pantone 871 C (gold foil) certified"],
    service: "AI Logo Vectorization + Print Production",
  },
  {
    id: "02",
    slug: "finch-learning",
    client: "Finch Learning",
    category: "SVG Conversion",
    description: "EdTech startup's Ideogram logo SVG was 22KB and failing Apple App Store review. Rebuilt to 1.8KB with React component — approved first submission.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=90",
    year: "2025",
    tags: ["Ideogram", "SVG", "App Store", "React"],
    challenge: "An EdTech startup's Ideogram-generated logo SVG was 22KB, failing Apple App Store icon submission and dragging their Lighthouse performance score down by 11 points.",
    solution: "SVG rebuilt from 22KB to 1.8KB with clean semantic structure, typed React component with dark mode support, and correctly exported PNG icon sets at all App Store required resolutions.",
    outcomes: ["SVG reduced 22KB to 1.8KB — 92% reduction", "App Store icon approved first attempt", "Lighthouse score improved from 71 to 84"],
    service: "SVG Optimization + React Component",
  },
  {
    id: "03",
    slug: "sable-coffee",
    client: "Sable Coffee",
    category: "AI Logo Cleanup",
    description: "DALL-E 3 coffee brand logo printed orange instead of espresso brown — 12,000 unusable cups. Colour corrected with Pantone 4625 C certification across all stock types.",
    image: "https://images.unsplash.com/photo-1509042928590-6a7c60a3e67e?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=90",
    year: "2025",
    tags: ["DALL-E", "Packaging", "CMYK"],
    challenge: "A specialty coffee brand's DALL-E 3 logo printed orange instead of the intended deep espresso brown across two vendors, making 12,000 kraft paper cups unusable.",
    solution: "Comprehensive colour audit, CMYK profile correction, Pantone matching for both coated and uncoated kraft stock, open path remediation, and stroke-to-outline conversion.",
    outcomes: ["12,000 corrected cups printed and accepted", "Pantone 4625 C certified across all stock", "Zero colour variance web to packaging"],
    service: "AI Logo Cleanup + CMYK Colour Management",
  },
  {
    id: "04",
    slug: "atlas-performance",
    client: "Atlas Performance",
    category: "AI Logo Vectorization",
    description: "Fitness brand opening 3 gyms — logo needed on 6ft vinyl signage, uniform embroidery, and website. Every vendor refused the file. All accepted after vectorisation.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "Signage", "Embroidery"],
    challenge: "A fitness brand opening three gym locations needed their Midjourney logo on 6-foot vinyl signage, uniform embroidery, and a website — but every vendor they approached said the file was unusable.",
    solution: "Full vector reconstruction with three specialist output variants: master vector for signage, 2-colour embroidery-optimised version, and responsive SVG for web with dark/light variants.",
    outcomes: ["All 3 locations opened with matching signage", "Uniform embroidery accepted first submission", "Zero vendor rejections across all file types"],
    service: "AI Logo Vectorization + Multi-Format Delivery",
  },
  {
    id: "05",
    slug: "callum-vance",
    client: "Callum & Vance",
    category: "Logo Vectorization",
    description: "Regional law firm's auto-traced logo failing letterpress and embossed stationery printers. Rebuilt manually — 14,847 anchor points reduced to 186, accepted first submission.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=90",
    year: "2025",
    tags: ["Letterpress", "Legal", "Print-Ready"],
    challenge: "A regional law firm's logo had been 'vectorised' by a freelancer using auto-trace, but letterpress business card and embossed stationery printers were both rejecting the file.",
    solution: "Full manual reconstruction, proper stroke-to-path conversion, balanced proportions with corrected optical spacing, and spot colour isolation for letterpress and blind emboss production.",
    outcomes: ["Letterpress printer accepted first submission", "1,000 letterpress business cards produced", "Embossed letterhead accepted and printed"],
    service: "Professional Logo Vectorization + Brand Cleanup",
  },
  {
    id: "06",
    slug: "roam-collective",
    client: "Roam Collective",
    category: "SVG Conversion",
    description: "Travel brand's Stable Diffusion SVG was impossible to animate. Rebuilt from 18KB to 2.3KB with semantic layers — entrance animation shipped 2 days later.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=90",
    year: "2025",
    tags: ["Stable Diffusion", "SVG", "Animation"],
    challenge: "A travel subscription brand wanted an animated logo for their website hero section, but their Stable Diffusion SVG was 18KB with seven layers of nesting — making animation technically impossible.",
    solution: "SVG rebuilt from 18KB to 2.3KB with semantic named layers, CSS animation scaffold on every animatable element, and a complete entrance animation sequence delivered alongside the optimised file.",
    outcomes: ["SVG reduced 18KB to 2.3KB — 87% reduction", "Entrance animation shipped in 2 days", "Lighthouse performance score: 94"],
    service: "SVG Optimization + CSS Animation Scaffold",
  },
  {
    id: "07",
    slug: "bloom-skin",
    client: "Bloom Skin",
    category: "AI Logo Cleanup",
    description: "DTC skincare brand's Midjourney logo appeared as 4 different blues across web, social, packaging, and retail — costing them a Sephora wholesale account. Fixed with Pantone certification.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "Skincare", "Pantone", "Packaging"],
    challenge: "A DTC skincare brand's Midjourney logo appeared as four visually distinct colours across their website, social media, retail packaging, and in-store display — making the brand look inconsistent to a Sephora buyer.",
    solution: "Complete colour audit across all four media, single-source Pantone certification, full logo cleanup, and a brand colour standards document delivered to every vendor in the supply chain.",
    outcomes: ["Consistent colour across all 4 channels", "Sephora wholesale account approved", "Brand standards adopted by 6 vendors"],
    service: "AI Logo Cleanup + Brand Colour System",
  },
  {
    id: "08",
    slug: "apex-constructs",
    client: "Apex Constructs",
    category: "AI Logo Vectorization",
    description: "Construction startup needed logo on 8 vehicles and 3 site hoardings before project start. Two wrap suppliers and one sign company refused the file. All accepted after vectorisation in 24 hours.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "Vehicle Wrap", "Large Format"],
    challenge: "A construction startup needed its Midjourney logo on 8 commercial vehicles and 3 site hoardings before their first contracted project began — but two vehicle wrap suppliers and one sign company had all refused the file.",
    solution: "Full vector reconstruction with large-format certified output, spot-colour-only vehicle wrap variant, and hoarding files structured for the sign company's CNC router workflow — all in 24 hours.",
    outcomes: ["All 8 vehicles wrapped on time", "3 site hoardings installed at project start", "2 project enquiries from site visibility"],
    service: "Logo Vectorization for Vehicle Wraps & Site Signage",
  },
  {
    id: "09",
    slug: "strand-studios",
    client: "Strand Studios",
    category: "Brand Identity",
    description: "Boutique recording studio pivoting to brand clients needed a complete identity system from an Ideogram concept — delivered in 7 days, 3 brand clients signed within 60 days.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=90",
    year: "2025",
    tags: ["Ideogram", "Brand Identity", "Brand Guidelines"],
    challenge: "A boutique recording studio pivoting to commercial brand work needed a complete professional identity system — built around an Ideogram-generated retro-industrial mark — before their new website launched.",
    solution: "Full vectorisation, brand system construction (2-colour palette, typography hierarchy, grid), brand guidelines document, and complete stationery suite — delivered in 7 days.",
    outcomes: ["Brand system delivered in 7 days", "3 brand clients signed within 60 days", "Featured in Communication Arts showcase"],
    service: "Full Brand Identity from Ideogram Concept",
  },
  {
    id: "10",
    slug: "volta-payments",
    client: "Volta Payments",
    category: "Brand System Rebuild",
    description: "B2B payments startup had six weeks before Series A term sheets. Midjourney mark transformed into investor-grade brand system in 8 days. $4.2M raised.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "Fintech", "Brand System", "Series A"],
    challenge: "A B2B payments infrastructure startup had six weeks before three investor term sheet meetings and needed to transform their Midjourney placeholder mark into a complete, investor-grade brand system.",
    solution: "Full vectorisation, finance-grade brand system, investor pitch deck template, press kit, and brand guidelines — completed in 8 days to meet the funding timeline.",
    outcomes: ["$4.2M Series A raised with brand in every material", "TechCrunch coverage at launch", "All 3 term sheet meetings converted"],
    service: "Complete Brand System from Midjourney Concept",
  },
  {
    id: "11",
    slug: "nexus-branding",
    client: "Nexus",
    category: "AI Logo Vectorization",
    description: "AI infrastructure SaaS approaching Series A with a Midjourney geometric mark and no brand system. Vectorised and extended into a complete investor kit in 36 hours.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=90",
    year: "2025",
    tags: ["Midjourney", "SaaS", "Brand System"],
    challenge: "An AI infrastructure SaaS approaching Series A had a compelling Midjourney geometric mark with no vector source, no CMYK values, and no brand system — weeks before their investor roadshow began.",
    solution: "Full geometric reconstruction of the octagonal mark, complete 4-colour brand system, and a Series A brand kit delivered in 36 hours to meet the roadshow schedule.",
    outcomes: ["Delivered in 36 hours before roadshow", "Full brand system from single mark", "Series A of $8M closed"],
    service: "AI Logo Vectorization + Brand System",
  },
  {
    id: "12",
    slug: "forma-studio",
    client: "Forma Studio",
    category: "Typography Reconstruction",
    description: "Award-winning interior design studio's AI-generated display wordmark was visually beautiful but technically unusable. Every letterform rebuilt as custom vector paths.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    coverImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=90",
    year: "2025",
    tags: ["Typography", "Wordmark", "Interior Design"],
    challenge: "An award-winning interior design studio's AI-generated display wordmark was visually beautiful but technically unusable — rasterised letterforms with irregular kerning and merged characters.",
    solution: "Manual reconstruction of every letterform as custom vector paths, typeface identification and optical spacing correction, and a wordmark specification document.",
    outcomes: ["Wordmark renders from 8pt to 800pt", "Type specimen sheet delivered", "Used in 3-city brand rollout"],
    service: "Typography Reconstruction + Wordmark Vectorization",
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
    slug: "why-ai-logos-fail-in-print",
    title: "Why AI Logos Fail in Print (And How to Fix It)",
    excerpt: "The technical reasons AI-generated logos break down in professional production — and the precise process for rebuilding them to specification.",
    category: "Technical",
    readTime: "6 min read",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
    author: { name: "Evoke Studio", role: "Brand Technicians" },
    content: {
      intro: "You generated a logo in Midjourney. It looked incredible on screen. Your team loved it. You sent it to a print vendor — and the file came back corrupted, or worse, it printed with blurry edges, haloing, and colours that bore no resemblance to your brand.",
      sections: [
        { heading: "The Raster Problem", body: "AI image generators produce raster files. A raster file is a fixed grid of pixels — brilliant at its native resolution, but irreversibly degraded when scaled. Print production requires files at 300+ DPI at the final print size. An AI-generated logo at 1024×1024 pixels looks sharp on a phone screen, but at business card scale for offset print, it's already undersized. At billboard dimensions, it's unusable." },
        { heading: "Path Integrity and the CMYK Gap", body: "Vector files describe shapes mathematically. A circle is not 10,000 pixels — it's a centre point, a radius, and a stroke weight. Scale it to any size, and the math produces a perfect curve. AI output skips this layer entirely. Additionally, print production typically uses CMYK colour mixing, while AI tools generate RGB visuals. The conversion is not automatic, and without proper colour profile management, your brand's black will print purple." },
        { heading: "The Correct Rebuild Process", body: "Professional vectorisation begins with studying the raster carefully — understanding the designer's intent, the geometry, the proportions. Then every shape is traced by hand using Bézier curves in a vector editor. Anchor points are minimised to maintain clean, predictable paths. Colours are translated to their CMYK equivalents. Typography, if present, is either reconstructed as custom letterforms or matched to the source typeface." },
      ],
    },
    tags: ["Print", "Vectorization", "Technical", "AI Logos"],
    relatedSlugs: ["vector-vs-raster-explained", "midjourney-logo-to-vector"],
  },
  {
    slug: "vector-vs-raster-explained",
    title: "Vector vs. Raster: A Brand Owner's Guide",
    excerpt: "The definitive explanation of why vector files are the foundation of every professional brand identity — in plain language, for non-designers.",
    category: "Education",
    readTime: "5 min read",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    author: { name: "Evoke Studio", role: "Brand Technicians" },
    content: {
      intro: "If you've ever been asked by a printer, developer, or brand agency to 'send the vector file' and didn't know what they meant — this is for you.",
      sections: [
        { heading: "What Is a Raster File?", body: "A raster file stores images as a fixed grid of coloured squares called pixels. JPG, PNG, and WEBP are all raster formats. At their native size, raster images look sharp. When you scale them up, the pixels become visible. Every AI-generated image is a raster file." },
        { heading: "What Is a Vector File?", body: "A vector file stores images as mathematical equations. Instead of 'pixel (100,100) is black,' it says 'draw a line from point A to point B with these properties.' Because it's maths, not pixels, a vector can be rendered at any size — from a 16px favicon to a 20-metre banner — with perfect sharpness." },
        { heading: "Why Brands Need Vectors", body: "Professional use of a brand logo spans an enormous range of scales. A responsive website might render your logo at 40px. A trade show booth might need it at 3 metres wide. A vehicle wrap might require 5 metres. No raster file survives this range. A vector does — effortlessly." },
      ],
    },
    tags: ["Education", "Vectors", "Brand Basics"],
    relatedSlugs: ["why-ai-logos-fail-in-print", "midjourney-logo-to-vector"],
  },
  {
    slug: "midjourney-logo-to-vector",
    title: "How to Turn Your Midjourney Logo Into a Professional Vector",
    excerpt: "A step-by-step walkthrough of the exact process we use to convert Midjourney-generated logos into production-ready vector brand assets.",
    category: "Guide",
    readTime: "8 min read",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    author: { name: "Evoke Studio", role: "Brand Technicians" },
    content: {
      intro: "Midjourney produces stunning visual concepts. But between a Midjourney render and a deployable brand asset lies a precise technical process. Here's exactly what that process looks like — step by step.",
      sections: [
        { heading: "Step 1: Upscale and Isolate", body: "Before anything else, we generate the highest-resolution export available from Midjourney — typically via the U command for upscaling. If the background needs removal, we isolate the mark with precision masking, not auto-removal tools that leave fringe artefacts." },
        { heading: "Step 2: Geometry Analysis", body: "We study the proportions and geometry of the mark carefully. Is the shape based on a circle? A grid system? Understanding the underlying geometry allows us to rebuild it with mathematical precision rather than tracing freehand, which always introduces inconsistency." },
        { heading: "Step 3: Manual Vector Reconstruction", body: "Every shape is rebuilt from scratch in Adobe Illustrator using Bézier curves. We do not use auto-trace. Auto-trace produces hundreds of redundant anchor points and imprecise paths. Manual reconstruction produces clean, minimal, mathematically-precise paths that behave predictably at any scale." },
      ],
    },
    tags: ["Midjourney", "How-to", "Vectorization", "Process"],
    relatedSlugs: ["why-ai-logos-fail-in-print", "vector-vs-raster-explained"],
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
