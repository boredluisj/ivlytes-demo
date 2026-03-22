interface AvatarPlaceholderProps {
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function AvatarPlaceholder({ initials, size = "md", className = "" }: AvatarPlaceholderProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-20 h-20 text-xl",
    xl: "w-32 h-32 text-3xl",
  };

  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-sora font-bold text-[#0B1120] flex-shrink-0 ${className}`}
      style={{ background: "linear-gradient(135deg, #2DD4BF, #2DD4BF)" }}
      aria-label={`Avatar for ${initials}`}
    >
      {initials}
    </div>
  );
}
