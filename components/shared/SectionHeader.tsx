import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  titleClassName = ""
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-brand-text ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-muted font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
