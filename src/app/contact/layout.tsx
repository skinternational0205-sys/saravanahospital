import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Salem Saravana Hospital for appointments, blood bank, ambulance dispatch or general enquiries. Open 24/7 at Thillai Nagar, Ponnamapet, Salem.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Salem Saravana Hospital",
    description:
      "We are here to help. Get in touch for appointments, emergencies, or general queries.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}