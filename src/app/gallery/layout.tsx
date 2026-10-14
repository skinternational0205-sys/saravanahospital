import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside the facilities and infrastructure of Salem Saravana Hospital — wards, operation theatres, intensive care units, laboratory and diagnostics.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Salem Saravana Hospital",
    description: "Take a look inside our state-of-the-art facilities and infrastructure.",
    url: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}