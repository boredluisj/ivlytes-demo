import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20",
    gold: "bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20",
    outline: "border border-white/20 text-[#9BA8BB]",
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
