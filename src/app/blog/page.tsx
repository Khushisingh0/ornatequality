import type { Metadata } from "next";
import BlogSection from "@/components/Home/BlogSection";
import { JsonLdList } from "@/components/seo/JsonLdScripts";
import {
  BLOG_DESCRIPTION,
  BLOG_KEYWORDS,
  BLOG_TITLE,
  blogWebPageSchema,
} from "@/lib/seo/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  keywords: BLOG_KEYWORDS,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLdList schemas={[blogWebPageSchema]} />
      <BlogSection />
    </>
  );
}
