import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20",
    gold: "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20",
    outline: "border border-white/20 text-[#A0AEC0]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
