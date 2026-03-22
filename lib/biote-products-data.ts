export interface BioTeProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
}

export const bioTeProducts: BioTeProduct[] = [
  { id: "dim-sgs", name: "DIM SGS+", category: "Hormone & Metabolic Support", description: "Supports healthy estrogen metabolism and detoxification pathways. Key supplement for BioTE hormone patients.", url: "https://patients.shopbiote.com" },
  { id: "methyl-factors", name: "Methyl Factors+", category: "Hormone & Metabolic Support", description: "Comprehensive methylation support for hormone metabolism, mood, and cardiovascular health.", url: "https://patients.shopbiote.com" },
  { id: "her-t", name: "HER-T", category: "Hormone & Metabolic Support", description: "Specially formulated for women on BioTE hormone therapy to optimize thyroid function and metabolic health.", url: "https://patients.shopbiote.com" },
  { id: "his-t", name: "HIS-T", category: "Hormone & Metabolic Support", description: "Targeted thyroid and metabolic support for men on BioTE testosterone therapy.", url: "https://patients.shopbiote.com" },
  { id: "serene", name: "Serene", category: "Hormone & Metabolic Support", description: "Natural stress and anxiety support featuring ashwagandha, L-theanine, and calming botanicals.", url: "https://patients.shopbiote.com" },
  { id: "adk-5", name: "ADK 5", category: "Bone & Cardiovascular", description: "Vitamins A, D3, and K2 at 5,000 IU D3 for bone density, cardiovascular health, and immune function.", url: "https://patients.shopbiote.com" },
  { id: "adk-10", name: "ADK 10", category: "Bone & Cardiovascular", description: "High-potency A, D3, and K2 at 10,000 IU D3 for patients with significant Vitamin D deficiency.", url: "https://patients.shopbiote.com" },
  { id: "omega-coq10", name: "Omega 3+CoQ10", category: "Bone & Cardiovascular", description: "Ultra-pure fish oil with CoQ10 for cardiovascular protection, inflammation reduction, and cellular energy.", url: "https://patients.shopbiote.com" },
  { id: "arterosil", name: "Arterosil HP", category: "Bone & Cardiovascular", description: "Clinically studied formula that supports the endothelial glycocalyx — the protective lining of blood vessels.", url: "https://patients.shopbiote.com" },
  { id: "vascanox", name: "Vascanox HP", category: "Bone & Cardiovascular", description: "Nitric oxide support formula for healthy blood pressure, circulation, and cardiovascular performance.", url: "https://patients.shopbiote.com" },
  { id: "probiotic-20b", name: "Multi-Strain Probiotic 20B", category: "Digestive & Immune", description: "20 billion CFU of diverse probiotic strains for microbiome diversity, digestive health, and immune function.", url: "https://patients.shopbiote.com" },
  { id: "bacillus", name: "Bacillus Coagulans", category: "Digestive & Immune", description: "Spore-forming probiotic that survives stomach acid, colonizes the gut, and reduces IBS symptoms.", url: "https://patients.shopbiote.com" },
  { id: "vh-balance", name: "vH Balance", category: "Digestive & Immune", description: "Vaginal microbiome support formula for women experiencing hormone-related microbiome changes.", url: "https://patients.shopbiote.com" },
  { id: "luminate", name: "Luminate", category: "Anti-Aging & Beauty", description: "Advanced skin support formula featuring collagen peptides, biotin, and antioxidants for radiant skin.", url: "https://patients.shopbiote.com" },
  { id: "hair-activate", name: "Hair Rescue Activate", category: "Anti-Aging & Beauty", description: "Stimulates dormant hair follicles with a blend of biotin, saw palmetto, and key minerals.", url: "https://patients.shopbiote.com" },
  { id: "hair-repair", name: "Hair Rescue Repair", category: "Anti-Aging & Beauty", description: "Nourishes existing hair with keratin precursors and targeted nutrients for strength and thickness.", url: "https://patients.shopbiote.com" },
  { id: "curcumin", name: "Curcumin-SF", category: "Specialized Support", description: "Enhanced bioavailability curcumin for systemic anti-inflammatory support. Sugar-free formulation.", url: "https://patients.shopbiote.com" },
  { id: "senolytic", name: "Senolytic Complex", category: "Specialized Support", description: "Quercetin and fisetin blend designed to clear senescent ('zombie') cells — a cutting-edge longevity intervention.", url: "https://patients.shopbiote.com" },
  { id: "iodine", name: "Iodine+", category: "Specialized Support", description: "Iodine and iodide combination for thyroid support, breast health, and metabolic function.", url: "https://patients.shopbiote.com" },
  { id: "best-night-sleep", name: "Best Night Sleep", category: "Specialized Support", description: "Comprehensive sleep support formula with melatonin, magnesium glycinate, GABA, and adaptogens.", url: "https://patients.shopbiote.com" },
  { id: "urox", name: "UROX+", category: "Specialized Support", description: "Bladder control and urinary tract support formula for men and women experiencing incontinence.", url: "https://patients.shopbiote.com" },
  { id: "nutrapack", name: "Nutrapack", category: "Fasting & Wellness", description: "Comprehensive daily vitamin pack curated to complement BioTE hormone therapy.", url: "https://patients.shopbiote.com" },
  { id: "nutrapack-plus", name: "NutrapackPlus", category: "Fasting & Wellness", description: "Enhanced Nutrapack with added antioxidants and adaptogens for patients with higher nutritional demands.", url: "https://patients.shopbiote.com" },
  { id: "prolon-bars", name: "ProLon Fast Bars", category: "Fasting & Wellness", description: "Patented nutrition bars that extend fasting benefits while satisfying hunger. Ideal for intermittent fasting protocols.", url: "https://patients.shopbiote.com" },
  { id: "prolon-fmd", name: "ProLon Fasting Mimicking Diet", category: "Fasting & Wellness", description: "5-day fasting program that puts your body in a fasting state while providing essential nutrition. Save 20% with code IVLYTES at prolonlife.com/ivlytes.", url: "https://prolonlife.com/ivlytes" },
];

export const productCategories = [
  "Hormone & Metabolic Support",
  "Bone & Cardiovascular",
  "Digestive & Immune",
  "Anti-Aging & Beauty",
  "Specialized Support",
  "Fasting & Wellness",
];
