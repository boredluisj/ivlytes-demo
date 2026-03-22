"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-sora font-bold text-[#F0EDE8] mb-4">Something went wrong</h2>
        <p className="text-[#9BA8BB] mb-8">{error.message || "An unexpected error occurred."}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
