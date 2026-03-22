import { Check } from "lucide-react";
import GlassCard from "./GlassCard";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta?: string;
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  cta = "Book Now",
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div className="relative">
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 bg-[#2DD4BF] text-[#0B1120] text-xs font-bold rounded-full">
            {badge}
          </span>
        </div>
      )}
      <GlassCard
        className={`p-8 h-full flex flex-col ${
          highlighted
            ? "border-[#2DD4BF]/40 shadow-[0_0_30px_rgba(0,217,255,0.15)]"
            : ""
        }`}
      >
        <div className="mb-6">
          <h3 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-2">{title}</h3>
          {description && <p className="text-sm text-[#9BA8BB]">{description}</p>}
        </div>

        <div className="mb-8">
          <span className="text-4xl font-sora font-bold text-[#F0EDE8]">{price}</span>
          {period && <span className="text-[#9BA8BB] ml-1 text-sm">{period}</span>}
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#9BA8BB]">
              <Check className="w-4 h-4 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant={highlighted ? "primary" : "outline"}
          href="https://www.vagaro.com/ivlytes/book-now"
          external
          size="lg"
          className="w-full justify-center"
        >
          {cta}
        </Button>
      </GlassCard>
    </div>
  );
}
