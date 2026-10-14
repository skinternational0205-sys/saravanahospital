import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book an appointment with expert doctors at Salem Saravana Hospital. Choose your speciality, preferred date and share your details to request a consultation.",
  alternates: { canonical: "/appointment" },
  openGraph: {
    title: "Book Appointment | Salem Saravana Hospital",
    description: "Schedule your visit with our expert doctors in Salem, Tamil Nadu.",
    url: "/appointment",
  },
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}