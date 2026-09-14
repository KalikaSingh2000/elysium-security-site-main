import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import type { Product } from "@/data/products";

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

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-secondary p-6",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:26px_26px]" />
      <img
        src="/uploads/branding/logo.png"
        alt={`${siteConfig.companyName} logo`}
        className="relative h-14 w-auto max-w-[60%] object-contain opacity-90 sm:h-16"
        loading="lazy"
      />
      <span className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Product Image Coming Soon
      </span>
    </div>
  );
};

export default ProductVisual;
