import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#0F1419]" aria-labelledby="blog-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            label="Wellness Insights"
            title="From the Doctor's Desk"
            subtitle="Evidence-based articles from Dr. Shahzad on IV therapy, hormone health, weight loss, and more."
          />
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-[#00D9FF] hover:text-[#00D9FF]/80 font-semibold transition-colors flex-shrink-0"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <GlassCard hover className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-[#A0AEC0]">{post.readTime} min read</span>
                  </div>
                  <h3 className="font-sora font-semibold text-[#F5F5F5] text-base leading-snug mb-3 group-hover:text-[#00D9FF] transition-colors flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#A0AEC0] line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                    <span className="text-xs text-[#A0AEC0]">{formatDate(post.date)}</span>
                    <span className="text-xs text-[#00D9FF] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
