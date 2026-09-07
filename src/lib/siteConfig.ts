export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  companyName: "Elysium Solution India",
  legacyNames: ["Elysium Security"],
  tagline: "Seamless Access Intelligent Control",
  siteUrl: "https://www.elysiumind.com",

  // Real, confirmed contact details.
  phoneDisplay: "+91 88609 26398",
  phoneHref: "tel:+918860926398",
  email: "info@elysiumind.com",
  whatsappNumber: "918860926398",

  // Not yet supplied by Elysium Solution India — wire these in as soon as
  // they're available. Every consumer already reads from this file, so
  // filling these in is the only change needed.
  address: null as string | null,
  businessHours: null as string | null,
  social: [] as SocialLink[],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
