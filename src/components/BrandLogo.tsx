import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

const BrandLogo = ({
  className,
  imageClassName,
  showWordmark = false,
  wordmarkClassName,
}: BrandLogoProps) => (
  <div className={cn("flex items-center gap-3", className)}>
    <img
      src="/uploads/branding/logo.png"
      alt={`${siteConfig.companyName} logo`}
      className={cn("brand-logo-image", imageClassName)}
      loading="eager"
    />
    {showWordmark && (
      <div className={cn("leading-tight", wordmarkClassName)}>
        <div className="font-heading text-lg font-bold tracking-tight">{siteConfig.companyName}</div>
        <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {siteConfig.tagline}
        </div>
      </div>
    )}
  </div>
);

export default BrandLogo;
