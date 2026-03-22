import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419] px-4">
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-sora font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #00D9FF, #D4AF37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-sora font-bold text-[#F5F5F5] mb-4">Page Not Found</h1>
        <p className="text-[#A0AEC0] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 transition-all"
          >
            Go Home
          </Link>
          <a
            href="https://www.vagaro.com/ivlytes/book-now"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-[#F5F5F5] font-medium rounded-xl hover:border-[#00D9FF]/40 transition-all"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
