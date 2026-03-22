import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl",
        hover &&
          "transition-all duration-300 hover:scale-[1.02] hover:border-[#00D9FF]/30 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
