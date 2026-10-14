import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory & Diagnostics",
  description:
    "24/7 laboratory and diagnostics at Salem Saravana Hospital with fully automated analysers, home sample collection and international quality control standards.",
  alternates: { canonical: "/laboratory" },
  openGraph: {
    title: "Laboratory & Diagnostics | Salem Saravana Hospital",
    description:
      "Advanced technology and rigorous quality control ensuring accurate and timely reports.",
    url: "/laboratory",
  },
};

export default function LaboratoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}