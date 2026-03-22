export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#2DD4BF] focus:text-[#0B1120] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
    >
      Skip to main content
    </a>
  );
}
