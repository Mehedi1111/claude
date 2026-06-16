export interface DomainPackage {
  name: string;
  price: string;
  includes: string[];
}

export interface DomainListing {
  slug: string;
  name: string; // e.g. "ZoningGraph.com"
  tagline: string;
  industry: string;
  niche: string;
  description: string;
  whyPremium: string[];
  idealFor: string[];
  keywords: string[]; // for SEO reference
  packages: DomainPackage[];
  available: boolean;
  featured?: boolean;
  websiteUrl?: string; // live demo site for domains with a built website
}

export const domains: DomainListing[] = [
  {
    slug: "zoninggraph",
    name: "ZoningGraph.com",
    tagline: "The data layer for zoning intelligence.",
    industry: "PropTech",
    niche: "Real Estate Technology / Urban Planning",
    description:
      "ZoningGraph.com positions its owner at the intersection of property technology and data visualisation. The domain pairs two high-value concepts — zoning (one of the most searched topics in real estate development) and graph (signalling data, network intelligence, and modern software thinking). It is immediately understood by developers, planners, and investors without explanation.",
    whyPremium: [
      "Combines two strong, industry-specific keywords in a single memorable domain",
      "Exact-match SEO potential for searches related to zoning data, zoning maps, and property intelligence",
      "Short, two-word .com — clean, professional, memorable",
      "Fits SaaS, API products, municipal software, and real estate intelligence platforms",
      "No trademark conflicts — a clear, ownable brand from day one",
    ],
    idealFor: [
      "PropTech startups building zoning or planning data products",
      "Real estate intelligence platforms and map-based tools",
      "Urban planning software for municipalities and developers",
      "AI companies building zoning code analysis or compliance tools",
      "Real estate investors needing a credible brand for a data product",
    ],
    keywords: ["ZoningGraph", "ZoningGraph.com", "zoning data software", "proptech domain", "real estate intelligence platform"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["ZoningGraph.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "ZoningGraph.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "ZoningGraph.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website (Next.js or Webflow)",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: true,
    websiteUrl: "https://www.zoninggraph.com/",
  },
  {
    slug: "zoningops",
    name: "ZoningOps.com",
    tagline: "Operations infrastructure for zoning professionals.",
    industry: "PropTech",
    niche: "Real Estate Operations / Municipal Software",
    description:
      "ZoningOps.com combines the specificity of zoning (a high-demand keyword in real estate and municipal software) with Ops — a term strongly associated with modern SaaS operations platforms. The domain positions perfectly for software serving planning departments, zoning consultants, development firms, and real estate operations teams who need to manage the complexity of land use regulation at scale.",
    whyPremium: [
      "The 'Ops' suffix signals a modern SaaS operations product to technical buyers",
      "Zoning is a consistently high-traffic search category with growing interest in automation",
      "Clean two-word .com — easy to say, spell, and remember",
      "Natural fit for a platform serving municipal or enterprise real estate operations",
      "Complements ZoningGraph.com — acquirable as a pair for full market coverage",
    ],
    idealFor: [
      "Municipal and government zoning management software",
      "Real estate development operations platforms",
      "Zoning compliance and permitting workflow tools",
      "Land use consulting firms building internal or client-facing tools",
      "Startups addressing the $200B+ real estate operations market",
    ],
    keywords: ["ZoningOps", "ZoningOps.com", "zoning operations software", "municipal zoning platform", "proptech operations"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["ZoningOps.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "ZoningOps.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "ZoningOps.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: true,
    websiteUrl: "https://www.zoningops.com/",
  },
  {
    slug: "payxara",
    name: "PayXara.com",
    tagline: "A payment brand ready to scale globally.",
    industry: "FinTech",
    niche: "Payments / Financial Technology",
    description:
      "PayXara.com is a coined name built for the global payments market. 'Pay' is one of the most valuable prefixes in financial technology — instantly communicating the product category to any audience. 'Xara' is distinctive, memorable, and carries an international quality that works across markets without linguistic baggage. The result: a payment brand name that sounds established, trustworthy, and globally capable from the first encounter.",
    whyPremium: [
      "'Pay' prefix is among the highest-value keywords in financial technology",
      "Invented second element 'Xara' is globally pronounceable, culturally neutral, and trademarkable",
      "Strong phonetics — two syllables each, flows naturally in speech and advertising",
      "No existing dominant brand conflict — clean trademark territory in most markets",
      "Premium .com — the only extension that matters for a global fintech brand",
    ],
    idealFor: [
      "Payment processing startups and challenger payment platforms",
      "Fintech founders building wallets, remittance, or embedded finance products",
      "Banks or credit unions launching digital payment products",
      "BNPL (buy now pay later) platforms needing a distinctive brand",
      "Crypto or Web3 payment infrastructure projects",
    ],
    keywords: ["PayXara", "PayXara.com", "fintech domain for sale", "payment brand name", "premium fintech domain"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["PayXara.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "PayXara.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "PayXara.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: true,
    websiteUrl: "https://www.payxara.com/",
  },
  {
    slug: "fundegrity",
    name: "Fundegrity.com",
    tagline: "Where fund management meets integrity.",
    industry: "FinTech",
    niche: "Investment Management / Fund Administration",
    description:
      "Fundegrity.com is a portmanteau of 'Fund' and 'Integrity' — two concepts that together define what institutional investors and HNW clients demand of any asset manager or fund administrator. The name works both as a brand and as a positioning statement: this is a business built on trustworthy fund management. In a sector where credibility is the primary differentiator, the domain name itself signals the brand's values before any further communication.",
    whyPremium: [
      "Portmanteau of two high-trust financial terms — immediately understood and memorable",
      "Communicates the brand's value proposition in the name itself (fund + integrity)",
      "Premium .com with no competing brand — fully ownable and trademarkable",
      "Appropriate for regulated financial services — sounds established and credible",
      "Strong SEO base: both 'fund' and related integrity terms are high-volume finance queries",
    ],
    idealFor: [
      "Fund administrators and fund services providers",
      "Hedge funds, PE firms, and asset managers launching a new brand",
      "ESG and impact investing platforms where integrity is a core message",
      "Compliance, audit, and governance platforms for investment funds",
      "Regulatory technology (RegTech) businesses serving the fund management industry",
    ],
    keywords: ["Fundegrity", "Fundegrity.com", "fund management brand", "investment integrity domain", "asset management brand name"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["Fundegrity.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "Fundegrity.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "Fundegrity.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: false,
  },
  {
    slug: "fundagri",
    name: "FundAgri.com",
    tagline: "The capital brand for agricultural investment.",
    industry: "AgriFinance",
    niche: "Agricultural Investment / AgriTech Finance",
    description:
      "FundAgri.com sits at the crossroads of two growing sectors: agricultural technology and alternative investment. The domain combines 'Fund' (capital, investment, financial infrastructure) with 'Agri' (agriculture, food, land) — positioning its owner for a market experiencing significant institutional interest as food security, sustainable farming, and agritech become priority investment themes globally. Clean, short, and immediately understood by its target audience.",
    whyPremium: [
      "Targets the intersection of two high-growth sectors: agriculture and alternative finance",
      "Short and memorable — works well globally across English-speaking markets",
      "Premium .com in a category with very few strong domain names available",
      "Agricultural investment is a growing institutional asset class with increasing deal flow",
      "Positions perfectly for ESG-aligned funds focusing on food and land",
    ],
    idealFor: [
      "Agricultural lending platforms and farm finance startups",
      "Impact investment funds focused on sustainable agriculture",
      "AgriTech venture funds and accelerators",
      "Crowdfunding platforms for farming and land investment",
      "Financial institutions building dedicated agricultural finance products",
    ],
    keywords: ["FundAgri", "FundAgri.com", "agricultural investment platform", "agrifinance domain", "farm fund brand"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["FundAgri.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "FundAgri.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "FundAgri.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: false,
  },
  {
    slug: "2wirl",
    name: "2wirl.com",
    tagline: "The social brand built for two-way connection.",
    industry: "Social / Consumer Tech",
    niche: "Social Media / Community Platform",
    description:
      "2wirl.com is a punchy, memorable consumer tech domain that plays on the idea of a two-way swirl — connection, interaction, reciprocity. The name is phonetically clean (sounds like 'twirl'), instantly memorable, and positions perfectly for a social platform, dating app, community product, or consumer tech brand built around the idea of mutual engagement and dynamic interaction.",
    whyPremium: [
      "Phonetically clean and highly memorable — sounds like 'twirl', reads as '2-way'",
      "Unique character-based .com — rare in an oversaturated consumer tech domain market",
      "Strong conceptual positioning: connection, reciprocity, mutual interaction",
      "Works across social, dating, gaming, community, and consumer engagement products",
      "Short enough to be a standout brand name with no generic competitors",
    ],
    idealFor: [
      "Social media platforms built around two-way creator and audience interaction",
      "Dating or connection apps seeking a memorable, non-cliché brand",
      "Community platforms, group tools, and consumer engagement products",
      "Consumer tech startups needing a distinctive, modern brand identity",
      "Gaming or interactive experience brands focused on multiplayer connection",
    ],
    keywords: ["2wirl", "2wirl.com", "social platform domain", "consumer tech domain", "community app brand"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["2wirl.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "2wirl.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "2wirl.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: false,
  },
  {
    slug: "luxicap",
    name: "LuxiCap.com",
    tagline: "Premium capital for premium brands.",
    industry: "FinTech",
    niche: "Luxury Finance / Private Capital",
    description:
      "LuxiCap.com combines luxury brand positioning with capital market authority — 'Luxi' suggesting luxurious, elevated, and premium, while 'Cap' anchors the brand firmly in financial and capital market territory. The domain positions perfectly for a luxury-focused investment firm, private equity fund, premium financial services brand, or high-net-worth wealth management platform that wants to signal both financial sophistication and premium market positioning.",
    whyPremium: [
      "Combines premium brand language ('Luxi') with capital market credibility ('Cap')",
      "Short, clean .com — easy to say, spell, and present to HNW clients",
      "Strong positioning in the premium and luxury financial services segment",
      "Fits private equity, family office, wealth management, and luxury lending brands",
      "No direct competitors — an ownable, distinctive brand in a crowded market",
    ],
    idealFor: [
      "Luxury-focused investment firms and private equity funds",
      "High-net-worth wealth management and family office platforms",
      "Premium financial services brands targeting UHNW and luxury markets",
      "Luxury real estate investment and development finance firms",
      "FinTech startups building premium financial products for affluent consumers",
    ],
    keywords: ["LuxiCap", "LuxiCap.com", "luxury finance domain", "premium capital brand", "fintech luxury domain"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["LuxiCap.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "LuxiCap.com domain transfer",
          "Custom logo design",
          "Brand colour palette and typography",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "LuxiCap.com domain transfer",
          "Complete brand identity package",
          "5-page marketing website",
          "SEO-ready structure and meta tags",
          "Ready to launch",
        ],
      },
    ],
    available: true,
    featured: false,
  },
  {
    slug: "decarbonops",
    name: "DeCarbonOPS.com",
    tagline: "The operations layer for carbon compliance.",
    industry: "CleanTech",
    niche: "Carbon Compliance / CSRD / Sustainability SaaS",
    description:
      "DeCarbonOPS.com is a premium domain combining two high-demand terms: 'DeCarbon' (decarbonisation — one of the defining regulatory and commercial trends of the decade) and 'OPS' (operations — the modern SaaS suffix signalling a platform built for operational workflow). The domain positions precisely for the CSRD compliance, carbon reporting, and climate operations software market — a sector experiencing rapid regulatory growth across the EU and UK with increasing global adoption.",
    whyPremium: [
      "Exact-match positioning for the growing CSRD and carbon compliance SaaS market",
      "The 'OPS' suffix signals a serious, operational software product to enterprise buyers",
      "Decarbonisation is one of the highest-growth regulatory software categories globally",
      "Clean, pronounceable two-part .com — professional in enterprise sales contexts",
      "Includes a live, functioning SaaS website built and deployed by Evoke Studio",
    ],
    idealFor: [
      "Carbon compliance and CSRD reporting software companies",
      "Climate tech startups building sustainability data and reporting platforms",
      "ESG software vendors targeting EU, UK, and international enterprise markets",
      "Net-zero operations platforms for supply chain and procurement teams",
      "Investors acquiring a ready-built brand in the fast-growing climate compliance sector",
    ],
    keywords: ["DeCarbonOPS", "DeCarbonOPS.com", "carbon compliance domain", "CSRD software brand", "climate tech domain", "sustainability SaaS domain"],
    packages: [
      {
        name: "Domain Only",
        price: "Inquire",
        includes: ["DeCarbonOPS.com domain transfer", "Full ownership transfer", "DNS configuration support"],
      },
      {
        name: "Domain + Brand",
        price: "Inquire",
        includes: [
          "DeCarbonOPS.com domain transfer",
          "Existing logo and brand identity system",
          "Production-ready vector files (AI, EPS, SVG, PNG)",
          "Brand guidelines document",
        ],
      },
      {
        name: "Domain + Brand + Website",
        price: "Inquire",
        includes: [
          "DeCarbonOPS.com domain transfer",
          "Complete existing brand identity",
          "Full Next.js SaaS marketing website — live and deployed",
          "SEO-optimised structure and meta tags",
          "Ready to launch — no development needed",
        ],
      },
    ],
    available: true,
    featured: true,
    websiteUrl: "https://www.decarbonops.com/",
  },
];

export function getDomain(slug: string): DomainListing | undefined {
  return domains.find((d) => d.slug === slug);
}
