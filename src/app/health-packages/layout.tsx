import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Packages",
  description:
    "Preventive health checkup packages in Salem — Master Health Checkup (General, Cardiac, Diabetes, Senior Citizen), Well Women Package and Children Health Checkup. Book your checkup today.",
  alternates: { canonical: "/health-packages" },
  openGraph: {
    title: "Health Packages | Salem Saravana Hospital",
    description:
      "Preventive health checkups designed for you and your family. Early detection saves lives.",
    url: "/health-packages",
  },
};

export default function HealthPackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}