/**
 * Central site configuration.
 *
 * Single source of truth for the canonical URL and hospital NAP (Name,
 * Address, Phone) details used across metadata, sitemap, robots and JSON-LD.
 */
export const siteConfig = {
  name: "Salem Saravana Hospital",
  shortName: "Saravana Hospital",
  url: "https://salemsaravanahospital.com",
  description:
    "A 60-bed multi-speciality integrated hospital in Salem, Tamil Nadu, offering 24/7 emergency care, ICU, dialysis, laboratory, blood bank and pharmacy services.",
  foundedYear: 1993,
  address: {
    street: "No-14, Thillai Nagar 1st Cross, Opp to IIHT, Ponnamapet",
    locality: "Salem",
    region: "Tamil Nadu",
    postalCode: "636001",
    country: "IN",
  },
  phones: {
    landline: "+91 427 255 5111",
    appointments: "+91 97895 55680",
    bloodBank: "+91 95855 00113",
    ambulance: "+91 76959 59165",
    laboratory: "+91 427 255 5108",
    pharmacy: "+91 427 255 5199",
  },
  emails: {
    laboratory: "shpllaboratory@gmail.com",
    pharmacy: "shplpharmacy1@gmail.com",
  },
  social: {
    facebook: "https://www.facebook.com/saravanahospitalsalem",
    instagram: "https://www.instagram.com/saravanahospitalsalem/",
    youtube: "https://www.youtube.com/channel/UCaIuUVE6eki_bHWABDhu4bA",
    googleReview: "https://g.page/r/CYbE5Djd1f6cEAg/review",
  },
} as const;

/** Absolute URL helper for metadata and sitemap entries. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}