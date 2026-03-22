import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy | IV-LYTES & Wellness",
  description: "Privacy policy for IV-LYTES & Wellness — HIPAA-compliant handling of patient health information in Kingwood TX.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0F1419]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-8">
          <GlassCard className="p-5 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#A0AEC0]">
              <strong className="text-[#F5F5F5]">Attorney Review Disclaimer:</strong> This privacy policy has been prepared for informational purposes. Please consult a qualified healthcare attorney to ensure compliance with applicable state and federal laws, including HIPAA.
            </p>
          </GlassCard>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <h1 className="text-3xl font-sora font-bold text-[#F5F5F5] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#A0AEC0] mb-10">Last updated: January 1, 2025 | IV-LYTES & Wellness — BAABA LLC</p>

          <div className="space-y-8 text-[#A0AEC0] text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">1. Introduction</h2>
              <p>IV-LYTES &amp; Wellness, operated by BAABA LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), is committed to protecting your privacy and the confidentiality of your protected health information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and applicable state laws.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Personal identification information (name, address, phone number, email)</li>
                <li>Health information and medical history you provide</li>
                <li>Payment information (processed through secure third-party processors)</li>
                <li>Appointment and booking history</li>
                <li>Website usage data through analytics tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and improve our medical wellness services</li>
                <li>Schedule and manage your appointments</li>
                <li>Communicate treatment information and follow-up care</li>
                <li>Process payments for services rendered</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Send wellness information and clinic updates (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">4. HIPAA Compliance</h2>
              <p>As a medical wellness provider, we are committed to HIPAA compliance. Your protected health information (PHI) is handled with the highest level of care:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>PHI is shared only with treatment providers involved in your care</li>
                <li>We will not sell your health information to third parties</li>
                <li>You have the right to access and request corrections to your health records</li>
                <li>You may request restrictions on how we use your PHI</li>
                <li>You have the right to receive a notice of our privacy practices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">5. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>Healthcare providers involved in your treatment (with your authorization)</li>
                <li>Payment processors to complete transactions</li>
                <li>Booking platform providers (Vagaro) for appointment management</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">6. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure — we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">7. Cookies and Analytics</h2>
              <p>Our website uses cookies and analytics tools (including Google Tag Manager) to understand how visitors use our site. You may disable cookies in your browser settings, though this may affect site functionality.</p>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>Access your personal and health information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>File a complaint with the U.S. Department of Health and Human Services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-sora font-semibold text-[#F5F5F5] mb-4">9. Contact Us</h2>
              <p>For privacy-related questions or to exercise your rights, contact:</p>
              <div className="mt-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p>IV-LYTES &amp; Wellness — BAABA LLC</p>
                <p>320 Kingwood Executive Dr., Suite D</p>
                <p>Kingwood, TX 77339</p>
                <p>Phone: <a href="tel:2816669211" className="text-[#00D9FF]">(281) 666-9211</a></p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
