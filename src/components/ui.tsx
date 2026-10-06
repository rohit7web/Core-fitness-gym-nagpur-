import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

export function PrimaryButton({
  children,
  href,
  to,
  onClick,
  className,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#21152E] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#171321] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap",
    className
  );
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  to,
  onClick,
  className,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#171321]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#171321] transition-all duration-300 hover:border-[#171321]/40 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap",
    className
  );
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#171321]/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#55515E]">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-tight",
          light ? "text-white" : "text-[#171321]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed", light ? "text-white/70" : "text-[#55515E]")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)}>{children}</div>;
}
