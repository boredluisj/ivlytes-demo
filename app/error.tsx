"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-sora font-bold text-[#F5F5F5] mb-4">Something went wrong</h2>
        <p className="text-[#A0AEC0] mb-8">{error.message || "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
