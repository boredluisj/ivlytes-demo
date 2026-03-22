import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Terms of Use | IV-LYTES & Wellness",
  description: "Terms of use for IV-LYTES & Wellness services in Kingwood TX. Cash-pay disclosure, medical disclaimers, and service terms.",
};

export default function TermsPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-8">
          <GlassCard className="p-5 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#9BA8BB]">
              <strong className="text-[#F0EDE8]">Attorney Review Disclaimer:</strong> This document should be reviewed by a qualified attorney to ensure it meets all applicable legal requirements in your jurisdiction.
            </p>
          </GlassCard>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h1 className="text-3xl font-sora font-bold text-[#F0EDE8] mb-4">Terms of Use</h1>
          <p className="text-sm text-[#9BA8BB] mb-10">Last updated: January 1, 2025 | IV-LYTES & Wellness — BAABA LLC</p>

          <div className="space-y-8 text-[#9BA8BB] text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">1. Acceptance of Terms</h2>
              <p>By accessing our website or using any services provided by IV-LYTES &amp; Wellness (BAABA LLC), you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">2. Cash-Pay Disclosure</h2>
              <p className="font-medium text-[#F0EDE8] mb-2">IV-LYTES &amp; Wellness is a cash-pay only clinic.</p>
              <p>We do not accept health insurance, Medicare, Medicaid, or any third-party payer for any services. All fees are due at the time of service. By scheduling an appointment, you acknowledge and accept that all services are cash-pay and that we make no representations regarding insurance reimbursability.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">3. Medical Disclaimer</h2>
              <p className="mb-3">The services provided by IV-LYTES &amp; Wellness are wellness services and are not intended to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
                <li>Replace the advice, diagnosis, or treatment of a licensed physician</li>
                <li>Serve as a substitute for emergency medical care</li>
              </ul>
              <p className="mt-3">The statements on this website have not been evaluated by the Food and Drug Administration (FDA). Always consult your primary care physician before beginning any new wellness treatment.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">4. Service Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All services require completion of a health history intake form</li>
                <li>We reserve the right to decline service to any patient whose health history presents contraindications</li>
                <li>Appointments cancelled with less than 24 hours notice may be subject to a cancellation fee</li>
                <li>Package and multi-session purchases are non-refundable once services have begun</li>
                <li>Results from wellness treatments vary between individuals and are not guaranteed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, IV-LYTES &amp; Wellness and BAABA LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">6. Arbitration Clause</h2>
              <p className="font-medium text-[#F0EDE8] mb-2">PLEASE READ THIS SECTION CAREFULLY.</p>
              <p>Any dispute, controversy, or claim arising out of or relating to your use of our services shall be resolved by binding arbitration administered by a mutually agreed-upon arbitration service in Harris County, Texas, rather than in court. By using our services, you waive your right to participate in any class action lawsuit or class-wide arbitration.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">7. Governing Law</h2>
              <p>These terms are governed by the laws of the State of Texas. Any legal proceedings not subject to arbitration shall be brought in Harris County, Texas.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">8. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-4">9. Contact</h2>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p>IV-LYTES &amp; Wellness — BAABA LLC</p>
                <p>320 Kingwood Executive Dr., Suite D, Kingwood, TX 77339</p>
                <p>Phone: <a href="tel:2816669211" className="text-[#2DD4BF]">(281) 666-9211</a></p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
