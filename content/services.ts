export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "service-driving-licence",
    title: "Driving Licence Application",
    description: "End-to-end guidance for obtaining a fresh Learner's Licence (LLR) and Permanent Driving Licence in Coimbatore.",
    slug: "driving-licence",
    features: [
      "Online Document Upload Assistance",
      "LLR Test Prep & Slots Booking",
      "Practical Driving Test Scheduling",
      "RTO Documentation Support"
    ]
  },
  {
    id: "service-licence-renewal",
    title: "Licence Renewal",
    description: "Hassle-free process to renew expired or expiring driving licences, ensuring you stay legally authorized on the road.",
    slug: "licence-renewal",
    features: [
      "Medical Certificate (Form 1A) Assistance",
      "Expired Licence Validity Recovery",
      "Vahan Portal Online Filings",
      "Smart Card Dispatch Tracking"
    ]
  },
  {
    id: "service-name-change",
    title: "Name Change",
    description: "Legal name correction and smart card updating assistance for your driving licence records at the Coimbatore RTO.",
    slug: "name-change",
    features: [
      "Gazette Notification Documentation",
      "RTO Application Processing",
      "Smart Card Update Tracking",
      "Legal Affidavit Assistance"
    ]
  },
  {
    id: "service-address-change",
    title: "Address Change",
    description: "Process your driving licence address change smoothly when relocating locally or from another state.",
    slug: "address-change",
    features: [
      "Address Proof Verification",
      "Interstate NOC Assistance",
      "RTO Portal Online Filing",
      "Updated Smart Card Delivery"
    ]
  },
  {
    id: "service-vehicle-fc",
    title: "Vehicle FC Upgrade",
    description: "Get Fitness Certificates (FC) renewed for your transport or non-transport vehicles, matching all Indian government norms.",
    slug: "vehicle-fc",
    features: [
      "Emission & Mechanical Safety Checks",
      "RTO Fitness Inspection Support",
      "Tax Assessment & Payments",
      "FC Green Sticker Allocation"
    ]
  },
  {
    id: "service-rto-services",
    title: "RTO Services",
    description: "Complete assistance for vehicle registration, road tax payments, hypothecation termination (HP), and duplicate licence issues.",
    slug: "rto-services",
    features: [
      "Hypothecation (HP) Removal Support",
      "Duplicate Licence Retrieval (Lost/Damaged)",
      "Re-registration & Tax Payments",
      "Clear, Legal Government Intermediary"
    ]
  }
];
