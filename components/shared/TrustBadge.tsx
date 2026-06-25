import React from "react";
import { Check } from "lucide-react";

interface TrustBadgeProps {
  text: string;
}

export default function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-yellow-bg border border-brand-yellow/30 text-xs font-semibold text-brand-text select-none">
      <Check className="w-3.5 h-3.5 text-brand-blue" />
      <span>{text}</span>
    </div>
  );
}
