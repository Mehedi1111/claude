export interface ShowcaseVariation {
  src: string;
  label: string;
}

export interface ShowcaseItem {
  id: string;
  client: string;
  industry: string;
  beforeSrc: string;
  beforeSubtitle: string;
  afterVariations: ShowcaseVariation[];
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR PROJECTS HERE
//
// Naming convention — drop images into /public/portfolio/ and reference them:
//   beforeSrc:  "/portfolio/clientname-before.jpg"
//   afterVariations: [
//     { src: "/portfolio/clientname-after-1.svg", label: "Clean Vector" },
//     { src: "/portfolio/clientname-after-2.svg", label: "Dark Version" },
//     { src: "/portfolio/clientname-after-3.svg", label: "With Tagline" },
//   ]
// ─────────────────────────────────────────────────────────────────────────────

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "nael",
    client: "Nael",
    industry: "Brand Identity",
    beforeSrc: "/before-logo-nael.jpg",
    beforeSubtitle: "AI-generated JPG — pixelated edges, no vector source",
    afterVariations: [
      { src: "/after-logo-nael.jpg", label: "Production-ready vector" },
    ],
  },
  // ── Paste more items below this line ──────────────────────────────────────
  // {
  //   id: "project-2",
  //   client: "Client Name",
  //   industry: "Industry",
  //   beforeSrc: "/portfolio/project-2-before.jpg",
  //   beforeSubtitle: "Low-res PNG, no vector source",
  //   afterVariations: [
  //     { src: "/portfolio/project-2-after-1.svg", label: "Clean Vector" },
  //     { src: "/portfolio/project-2-after-2.svg", label: "Dark Version" },
  //   ],
  // },
];
