import { useState } from "react";

interface ContentImageProps {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}

const ContentImage = ({
  src,
  alt,
  label = "Security solution",
  className = "",
  imgClassName = "",
}: ContentImageProps) => {
  const [hasError, setHasError] = useState(false);
  const showFallback = !src || hasError;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 ${className}`}
    >
      {showFallback ? (
        <div className="flex h-full min-h-[240px] items-end bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_32%),linear-gradient(135deg,_#0f172a_0%,_#14213d_45%,_#0f766e_100%)] p-6">
          <div className="max-w-xs space-y-2">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
              Elysium Security
            </span>
            <p className="text-sm leading-6 text-white/80">{label}</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
    </div>
  );
};

export default ContentImage;
