import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at one of the fastest growing multi-speciality hospitals in Salem. Submit your application and our HR team will reach out when a suitable vacancy arises.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Salem Saravana Hospital",
    description:
      "Build your career at one of the fastest growing multi-speciality hospitals in Salem.",
    url: "/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}