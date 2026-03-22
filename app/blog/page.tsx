import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Wellness Blog | IV-LYTES & Wellness Kingwood TX",
  description: "Evidence-based articles on IV therapy, colonic hydrotherapy, hormone health, medical weight loss, and skin rejuvenation — by Dr. Arif Shahzad MD.",
  openGraph: {
    title: "Wellness Blog | IV-LYTES & Wellness",
    description: "Evidence-based wellness articles by Dr. Arif Shahzad MD from IV-LYTES & Wellness in Kingwood TX.",
  },
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Wellness Blog"
            title="From the Doctor's Desk"
            subtitle="Evidence-based articles on IV therapy, hormone health, weight loss, gut health, and more — written by Dr. Arif Shahzad MD."
          />
        </AnimateOnScroll>

        {/* Category pills */}
        <AnimateOnScroll className="mb-10 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF]">All</span>
          {categories.map((cat) => (
            <span key={cat} className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-[#9BA8BB]">{cat}</span>
          ))}
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <GlassCard hover className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge>{post.category}</Badge>
                    <span className="text-xs text-[#9BA8BB]">{post.readTime} min read</span>
                  </div>
                  <h2 className="font-sora font-semibold text-[#F0EDE8] text-base leading-snug mb-3 group-hover:text-[#2DD4BF] transition-colors flex-grow">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#9BA8BB] line-clamp-2 mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                    <div className="flex items-center gap-2">
                      <AvatarPlaceholder initials="AS" size="sm" />
                      <div>
                        <div className="text-xs font-medium text-[#F0EDE8]">Dr. Arif Shahzad MD</div>
                        <div className="text-xs text-[#9BA8BB]">{formatDate(post.date)}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity" />
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
