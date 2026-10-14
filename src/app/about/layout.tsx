import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Saravana Hospital was founded in 1993 at Ponnammapet, Salem. Today it is a 60-bed multi-speciality integrated hospital delivering quality, affordable healthcare to the community.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Salem Saravana Hospital",
    description:
      "A 60-bed multi-speciality integrated hospital in Salem, Tamil Nadu, serving the community since 1993.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}