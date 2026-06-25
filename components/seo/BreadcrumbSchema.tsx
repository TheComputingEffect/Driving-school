import React from "react";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import JsonLd from "./JsonLd";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schemaItems = [{ name: "Home", url: "/" }, ...items];
  const schema = getBreadcrumbSchema(schemaItems);

  return (
    <>
      <JsonLd schema={schema} />
      <nav className="flex items-center space-x-2 text-sm text-brand-muted py-4 px-4 max-w-[1200px] mx-auto w-full" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-blue flex items-center transition-colors">
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-brand-border shrink-0" />
              {isLast ? (
                <span className="text-brand-text font-medium truncate max-w-[200px]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-brand-blue transition-colors truncate max-w-[200px]"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
