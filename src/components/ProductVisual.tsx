import { Fingerprint, ScanFace, Hand, Shield, Car, ScanLine, Search, Eye, Siren } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

const iconMap = {
  biometric: Fingerprint,
  "access-control": Shield,
  "vehicle-security": Car,
  screening: ScanLine,
} as const;

const accentMap = {
  biometric: "from-sky-500/25 via-cyan-400/10 to-transparent",
  "access-control": "from-orange-500/25 via-amber-400/10 to-transparent",
  "vehicle-security": "from-emerald-500/25 via-lime-400/10 to-transparent",
  screening: "from-fuchsia-500/20 via-violet-400/10 to-transparent",
} as const;

const subcategoryIcon = (subcategory: string) => {
  if (subcategory.toLowerCase().includes("face")) return ScanFace;
  if (subcategory.toLowerCase().includes("palm")) return Hand;
  if (subcategory.toLowerCase().includes("metal")) return Search;
  if (subcategory.toLowerCase().includes("uvss")) return Eye;
  if (subcategory.toLowerCase().includes("bollard") || subcategory.toLowerCase().includes("tyre")) {
    return Siren;
  }
  return null;
};

interface ProductVisualProps {
  product: Product;
  className?: string;
  imageClassName?: string;
  contain?: boolean;
}

const ProductVisual = ({
  product,
  className,
  imageClassName,
  contain = true,
}: ProductVisualProps) => {
  if (product.image && product.image !== "/placeholder.svg") {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={cn(
          "h-full w-full transition-transform duration-500",
          contain ? "object-contain" : "object-cover",
          imageClassName,
        )}
        loading="lazy"
      />
    );
  }

  const PrimaryIcon = iconMap[product.category as keyof typeof iconMap] ?? Shield;
  const SecondaryIcon = subcategoryIcon(product.subcategory);
  const accent = accentMap[product.category as keyof typeof accentMap] ?? "from-orange-500/20 via-amber-400/10 to-transparent";

  return (
    <div
      className={cn(
        "relative h-full min-h-[220px] overflow-hidden bg-[linear-gradient(145deg,#08111f_0%,#0f1e31_58%,#16273e_100%)]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", accent)} />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute -right-8 top-6 rounded-full border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
        <PrimaryIcon className="h-16 w-16 text-white/90" strokeWidth={1.4} />
      </div>
      {SecondaryIcon && (
        <div className="absolute bottom-6 right-8 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
          <SecondaryIcon className="h-6 w-6 text-orange-200" strokeWidth={1.8} />
        </div>
      )}
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <div className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/70">
          {product.subcategory}
        </div>
        <div className="max-w-[16rem] text-xl font-heading leading-tight">{product.name}</div>
        <div className="mt-3 text-sm leading-6 text-white/70">
          Configurable hardware for integrated enterprise security deployments.
        </div>
      </div>
    </div>
  );
};

export default ProductVisual;
