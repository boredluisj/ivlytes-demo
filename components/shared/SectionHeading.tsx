interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#F5F5F5] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-[#A0AEC0] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
