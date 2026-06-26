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

  return <JsonLd schema={schema} />;
}
