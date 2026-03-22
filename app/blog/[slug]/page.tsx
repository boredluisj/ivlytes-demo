import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-sora font-bold text-[#F0EDE8] mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <h3 key={i} className="text-lg font-sora font-semibold text-[#F0EDE8] mt-6 mb-2">
          {line.replace(/\*\*/g, "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-disc list-inside space-y-1 text-[#9BA8BB] text-sm mb-4 ml-4">
          {listItems.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Regular paragraph — handle inline markdown
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F0EDE8]">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#2DD4BF] hover:underline">$1</a>');
      elements.push(
        <p key={i} className="text-[#9BA8BB] leading-relaxed mb-4 text-sm" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "IV-LYTES & Wellness" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="pt-24 pb-16 bg-[#0B1120]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#9BA8BB] hover:text-[#2DD4BF] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl font-sora font-bold text-[#F0EDE8] leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <AvatarPlaceholder initials="AS" size="sm" />
                <div>
                  <div className="text-sm font-medium text-[#F0EDE8]">{post.author}</div>
                  <div className="text-xs text-[#9BA8BB]">Medical Director, IV-LYTES & Wellness</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#9BA8BB]">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime} min read</span>
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/30 to-transparent mb-10" />

          {/* Content */}
          <div className="prose-custom">
            {renderMarkdown(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20 text-center">
            <p className="text-[#F0EDE8] font-semibold mb-2">Ready to experience the benefits?</p>
            <p className="text-sm text-[#9BA8BB] mb-4">Book your treatment at IV-LYTES & Wellness in Kingwood, TX.</p>
            <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all text-sm">
              Book Your Appointment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-8">More Wellness Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <GlassCard hover className="p-5 h-full flex flex-col">
                  <Badge className="mb-3 self-start">{p.category}</Badge>
                  <h3 className="font-sora font-semibold text-[#F0EDE8] text-sm leading-snug mb-2 group-hover:text-[#2DD4BF] transition-colors flex-grow">{p.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
                    <span className="text-xs text-[#9BA8BB]">{formatDate(p.date)}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
