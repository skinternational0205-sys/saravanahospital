import type { Metadata } from "next";
import { Radio, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FM Talks",
  description:
    "FM Talks is Salem Saravana Hospital's health awareness radio series - doctors from our 25+ departments share practical advice on prevention, nutrition and everyday wellbeing.",
  alternates: { canonical: "/fmtalks" },
  openGraph: {
    title: "FM Talks | Salem Saravana Hospital",
    description:
      "Health awareness talks from the doctors of Salem Saravana Hospital, broadcast on Salem FM.",
    url: "/fmtalks",
  },
};

const episodes = [
  {
    title: "Heart Health & Lifestyle",
    doctor: "Department of Cardiology",
    desc: "Practical guidance on blood pressure, cholesterol and everyday habits that protect your heart.",
  },
  {
    title: "Managing Diabetes Every Day",
    doctor: "Department of General Medicine",
    desc: "Diet, medication and monitoring explained simply for patients and their families.",
  },
  {
    title: "Women's Wellness After 30",
    doctor: "Department of Obstetrics & Gynecology",
    desc: "Preventive screenings, nutrition and the checkups every woman should schedule.",
  },
  {
    title: "Growing Strong: Child Nutrition",
    doctor: "Department of Paediatrics",
    desc: "Immunisation schedules, nutrition and the warning signs parents should never ignore.",
  },
];

export default function FmTalksPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-pink/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-pink mx-auto mb-6 backdrop-blur-sm">
            <Radio size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FM <span className="text-brand-pink">Talks</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Health awareness conversations with the doctors of Salem Saravana Hospital.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Talks</h2>
          <div className="grid gap-6">
            {episodes.map((episode) => (
              <article
                key={episode.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">{episode.title}</h3>
                <p className="text-sm font-semibold text-brand-pink mb-4">{episode.doctor}</p>
                <p className="text-gray-600 leading-relaxed">{episode.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Watch our video library</h2>
            <p className="text-gray-600 mb-6">
              Full episodes and patient education videos are available on our YouTube channel.
            </p>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-pink text-white font-bold px-6 py-3 rounded-xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-500/30"
            >
              Visit YouTube Channel <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}