export interface VideoWork {
  id: string;
  title: string;
  category: string;
  tagline: string;
  iframeSrc: string;
  duration: string;
  aspect: string;
  keyFeatures: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface PricingSingle {
  name: string;
  price: string;
  details: string;
  features: string[];
  recommended?: boolean;
}

export interface PricingMonthly {
  name: string;
  reels: string;
  price: string;
  savings?: string;
  isPopular?: boolean;
  features: string[];
}

export const PORTFOLIO_INFO = {
  brandName: "ZAID VISUALS CO.",
  brandShort: "ZV.CO",
  founder: "Zaid Rajput",
  location: "Moradabad, UP",
  email: "thezaidansari0@gmail.com",
  instagram: "@zaidvisuals.co",
  instagramUrl: "https://instagram.com/zaidvisuals.co",
  portfolioHandle: "@zaid_visuals.in",
  software: "CapCut Specialist",
  turnaround: "24-48 Hours",
  experience: "3-4 months focused & dedicated",
  hoursDaily: "5-6 hours daily dedication",
  tagline: "Cuts That Keep People Watching.",
  // Default WhatsApp base
  defaultWhatsAppNumber: "919997000000", // Fallback standard format, customizable
};

export const VIDEO_WORKS: VideoWork[] = [
  {
    id: "podcast-edit",
    title: "Podcast Edit",
    category: "Long-Form Pacing & High-Retention",
    tagline: "Dynamic multicam cuts, audio cleanup & visual flow",
    iframeSrc: "https://drive.google.com/file/d/1gjv_cdyds9IMUS5osFP0V19CPiX6LT-W/preview",
    duration: "Preview Clip",
    aspect: "16:9 / 9:16",
    keyFeatures: ["Noise suppression", "Dynamic speaker framing", "Subtle text punches", "Pacing optimization"]
  },
  {
    id: "talking-head",
    title: "Talking Head",
    category: "Authority & Retention",
    tagline: "Crisp zooms, punchy transitions & contextual B-roll",
    iframeSrc: "https://drive.google.com/file/d/1Eb_uJ56CP-OJd3Bj8H1uYpWvHCsg6h4H/preview",
    duration: "Preview Clip",
    aspect: "Vertical & Horizontal",
    keyFeatures: ["Punch-in micro zooms", "Pattern interrupts", "Contextual overlays", "Voice clarity EQ"]
  },
  {
    id: "reel-edit",
    title: "Reel Edit",
    category: "Short-Form Viral Growth",
    tagline: "3-second hook mechanics, kinetic typography & SFX",
    iframeSrc: "https://drive.google.com/file/d/1zp0PzHgZyv3BhzOWHJgEUWMhAdfJZPTx/preview",
    duration: "Preview Clip",
    aspect: "9:16 Vertical",
    keyFeatures: ["Word-by-word highlighted captions", "Rhythmic sound design", "Motion graphics", "High drop-off defense"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "podcast-talking-head",
    title: "Podcast & Talking-Head",
    subtitle: "Turn raw speech into an authority broadcast",
    description: "Clean cuts, auto-captions, zooms, noise removal, makes you look pro.",
    features: [
      "Dead-air & filler word elimination (ums, ahs)",
      "Dynamic auto-captions with custom font styling",
      "Camera punch-ins & optical zooms on key statements",
      "Studio background noise removal & volume normalization"
    ],
    icon: "Mic"
  },
  {
    id: "reels-shorts",
    title: "Reels / Shorts",
    subtitle: "Built for retention from second 0 to second 60",
    description: "Hooks, B-roll, SFX, text animation - built for retention.",
    features: [
      "First 3-second hook design to stop mindless scrolling",
      "High-energy sound effects (wooshes, pops, impacts)",
      "Kinetic text animation & animated emojis",
      "Seamless loop endings to inflate repeat views"
    ],
    icon: "Zap"
  },
  {
    id: "youtube-longform",
    title: "YouTube Long-Form (8-10 min)",
    subtitle: "Keep viewers glued till the end card",
    description: "Story pacing, B-roll, music, full handling.",
    features: [
      "Narrative arc & story pacing to combat mid-video dips",
      "Curated B-roll, motion graphics & screen recordings",
      "Cinematic background music ducking behind voice",
      "Full handling: intro hooks, chapters, and subscribe cues"
    ],
    icon: "Video"
  }
];

export const SINGLE_PRICING: PricingSingle[] = [
  {
    name: "Basic Reel",
    price: "₹600",
    details: "30-60 sec duration",
    features: ["Clean cuts & pauses removed", "Accurate captions", "Punch-in zooms", "Clean audio leveling"]
  },
  {
    name: "Pro Reel",
    price: "₹900",
    details: "High-retention short",
    recommended: true,
    features: ["Everything in Basic", "Curated B-roll overlays", "Custom SFX & sound design", "Kinetic text animations"]
  },
  {
    name: "Long-form",
    price: "₹1,500",
    details: "8-10 min duration",
    features: ["Full cuts & pacing structure", "Captions on key moments", "Relevant B-roll & graphics", "Background music & mixing"]
  }
];

export const MONTHLY_PACKAGES: PricingMonthly[] = [
  {
    name: "Starter",
    reels: "8 Basic Reels",
    price: "₹4,500",
    savings: "Best for steady consistency",
    features: [
      "8 Edited Reels per month",
      "24-48 hr delivery turnaround",
      "2 free revisions per reel",
      "Dedicated communication"
    ]
  },
  {
    name: "Growth",
    reels: "15 Reels",
    price: "₹8,000",
    isPopular: true,
    savings: "Most Popular",
    features: [
      "15 High-Retention Reels per month",
      "Priority 24 hr turnaround",
      "Hook optimization & viral styling",
      "2 free revisions per reel",
      "Payment milestone: split every 4 reels"
    ]
  },
  {
    name: "Pro",
    reels: "25 Reels",
    price: "₹12,500",
    savings: "For daily creators & agencies",
    features: [
      "25 Reels (Daily content machine)",
      "Fastest queue turnaround",
      "Full B-roll, SFX & kinetic styling",
      "2 free revisions per reel",
      "Thumbnails / cover frame assistance"
    ]
  },
  {
    name: "Long-Form Add-on",
    reels: "4 Full YouTube Videos",
    price: "₹5,500",
    savings: "Complete channel package",
    features: [
      "4 Full long-form videos (8-10 min)",
      "Story pacing & retention editing",
      "Licensed background scores",
      "Drive upload in crisp 1080p"
    ]
  }
];
