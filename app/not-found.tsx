import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] px-4">
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-sora font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #2DD4BF, #2DD4BF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-sora font-bold text-[#F0EDE8] mb-4">Page Not Found</h1>
        <p className="text-[#9BA8BB] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all"
          >
            Go Home
          </Link>
          <a
            href="https://www.vagaro.com/ivlytes/book-now"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-[#F0EDE8] font-medium rounded-xl hover:border-[#2DD4BF]/40 transition-all"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
