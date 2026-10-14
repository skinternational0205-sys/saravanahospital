import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";
import specialitiesData from "@/data/specialities.json";

type Speciality = (typeof specialitiesData)[number];

type SpecialityPageProps = {
  params: Promise<{ slug: string }>;
};

// For static site generation (optional but good for performance)
export function generateStaticParams() {
  return specialitiesData.map((spec) => ({
    slug: spec.slug,
  }));
}

/** Strip the scraped markup down to plain text for the meta description. */
function plainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({ params }: SpecialityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const spec: Speciality | undefined = specialitiesData.find((s) => s.slug === slug);

  if (!spec) {
    return { title: "Speciality Not Found" };
  }

  const description = plainText(spec.content).slice(0, 160);

  return {
    title: spec.name,
    description,
    alternates: { canonical: `/specialities/${spec.slug}` },
    openGraph: {
      type: "article",
      title: `${spec.name} | Salem Saravana Hospital`,
      description,
      url: `/specialities/${spec.slug}`,
    },
  };
}

export default async function SpecialityPage({ params }: SpecialityPageProps) {
  const resolvedParams = await params;
  const spec: Speciality | undefined = specialitiesData.find(
    (s) => s.slug === resolvedParams.slug,
  );

  if (!spec) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/specialities" 
          className="inline-flex items-center gap-2 text-brand-pink hover:text-pink-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Back to all Specialities
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="bg-brand-pink p-10 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                <Stethoscope size={200} />
             </div>
             <h1 className="text-3xl md:text-5xl font-bold relative z-10">{spec.name}</h1>
          </div>
          
          <div className="p-8 md:p-12">
            {spec.content ? (
              <div 
                className="prose prose-lg max-w-none prose-pink prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-brand-pink"
                dangerouslySetInnerHTML={{ __html: spec.content }} 
              />
            ) : (
              <p className="text-gray-500 italic">Details for this speciality are currently being updated.</p>
            )}

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
              <Link href="/appointment" className="bg-brand-pink text-white font-bold px-8 py-4 rounded-xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-500/30">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
