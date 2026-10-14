import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Cashless Treatment",
  description:
    "Salem Saravana Hospital is empanelled with major government schemes, private insurers and TPAs, offering hassle-free cashless treatment and pre-policy medical checkups.",
  alternates: { canonical: "/insurance" },
  openGraph: {
    title: "Insurance & Cashless Treatment | Salem Saravana Hospital",
    description:
      "Cashless treatment available across major government and private insurance providers.",
    url: "/insurance",
  },
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return children;
}