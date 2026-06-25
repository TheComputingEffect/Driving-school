import React from "react";
import { FAQItem } from "@/content/faq";
import { getFAQPageSchema } from "@/lib/schema/faqSchema";
import JsonLd from "./JsonLd";

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const schema = getFAQPageSchema(items);
  return <JsonLd schema={schema} />;
}
