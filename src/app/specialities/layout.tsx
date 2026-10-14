import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Specialities",
  description:
    "Explore 25+ medical departments at Salem Saravana Hospital — General Medicine, Cardiology, Orthopaedics, Neurology, Gastroenterology, Paediatrics, ENT, Dermatology and more.",
  alternates: { canonical: "/specialities" },
  openGraph: {
    title: "Our Specialities | Salem Saravana Hospital",
    description: "Comprehensive medical care across 25+ advanced departments in Salem, Tamil Nadu.",
    url: "/specialities",
  },
};

export default function SpecialitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}