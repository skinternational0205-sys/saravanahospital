import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Services",
  description:
    "24/7 in-house pharmacy at Salem Saravana Hospital with qualified pharmacists, NABH-standard dispensing and free home delivery of medicines within 5 KM of Salem.",
  alternates: { canonical: "/pharmacy" },
  openGraph: {
    title: "Pharmacy Services | Salem Saravana Hospital",
    description: "24/7 in-house pharmacy with doorstep delivery for your convenience.",
    url: "/pharmacy",
  },
};

export default function PharmacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}