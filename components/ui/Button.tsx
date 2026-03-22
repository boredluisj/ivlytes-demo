import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-[#2DD4BF] text-[#0B1120] hover:bg-[#2DD4BF]/90 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] font-semibold",
  secondary:
    "bg-white/[0.05] border border-white/[0.08] text-[#F0EDE8] hover:bg-white/[0.09] hover:border-[#2DD4BF]/30",
  ghost: "text-[#9BA8BB] hover:text-[#2DD4BF] hover:bg-white/[0.04]",
  outline:
    "border border-[#2DD4BF]/40 text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#0B1120] font-semibold",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#2DD4BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
