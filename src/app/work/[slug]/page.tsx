import { getCaseStudyBySlug, getAllSlugs } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import CaseStudyClient from "@/components/work/CaseStudyClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyClient caseStudy={caseStudy} />;
}
