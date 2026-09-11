import { BlogPost } from "./types";
import imgFutureOfPharmacyManagement from "@/assets/blog/future-of-pharmacy-management.webp";
import imgAiPharmacyInventoryDecisions from "@/assets/blog/ai-pharmacy-inventory-decisions.webp";
import imgPharmacyInventoryBusinessGrowth from "@/assets/blog/pharmacy-inventory-business-growth.webp";
import imgTechnologyTransformModernPharmacy from "@/assets/blog/technology-transform-modern-pharmacy.webp";
import imgPharmacyosNextGenerationSoftware from "@/assets/blog/pharmacyos-next-generation-software.webp";
import imgDataToDecisionsBiRole from "@/assets/blog/data-to-decisions-bi-role.webp";
import imgMultiStorePharmacyManagementSimplicity from "@/assets/blog/multi-store-pharmacy-management-simplicity.webp";
import imgFutureOfConnectedHealthcare from "@/assets/blog/future-of-connected-healthcare.webp";
import imgDigitalCustomerEngagementTransformation from "@/assets/blog/digital-customer-engagement-transformation.webp";
import imgMed4oneVisionIntroduction from "@/assets/blog/med4one-vision-introduction.webp";

export const CATEGORIES = [
  "All",
  "Pharmacy Management",
  "Pharmacy Business",
  "Healthcare Technology",
  "Artificial Intelligence",
  "Business Intelligence",
  "Inventory Management",
  "Customer Experience",
  "Med4One Updates"
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-pharmacy-management",
    title: "The Future of Pharmacy Management: From Billing Software to Intelligent Platforms",
    summary: "Explore how the shift from legacy billing systems to integrated intelligent platforms is redefining pharmacy operations and patient care.",
    category: "Pharmacy Management",
    author: { name: "Med4One Editorial", role: "Healthcare Technology Team" },
    publishedDate: "May 15, 2026",
    readingTime: "6 min read",
    image: imgFutureOfPharmacyManagement,
    isFeatured: true,
    content: `
      <h2>The Shift in Pharmacy Operations</h2>
      <p>For decades, pharmacy management was synonymous with billing software. These systems were designed for a single purpose: processing transactions. However, as healthcare becomes more complex and patient-centric, the limitations of these legacy systems are becoming clear.</p>
      
      <h3>The Rise of Intelligent Platforms</h3>
      <p>Today, a new generation of pharmacy technology is emerging. These aren't just tools for billing; they are intelligent platforms that integrate every aspect of the pharmacy business—from inventory management to clinical decision support and patient engagement.</p>
      
      <h3>Key Pillars of Modern Pharmacy Technology</h3>
      <ul>
        <li><strong>Automation:</strong> Reducing manual tasks to focus on clinical services.</li>
        <li><strong>Data Integration:</strong> Connecting disparate systems for a 360-degree view of operations.</li>
        <li><strong>AI-Driven Insights:</strong> Moving from descriptive analytics to predictive capabilities.</li>
      </ul>
      
      <p>Med4One is at the forefront of this transformation, building the infrastructure for a connected healthcare ecosystem where pharmacies are not just dispensaries, but vital hubs of community health.</p>
    `
  },
  {
    id: "2",
    slug: "ai-pharmacy-inventory-decisions",
    title: "How AI Can Help Pharmacies Make Smarter Inventory Decisions",
    summary: "Learn how artificial intelligence analyzes patterns to optimize stock levels, reduce waste, and ensure critical medications are always available.",
    category: "Artificial Intelligence",
    author: { name: "Med4One AI Lab", role: "Data Science Team" },
    publishedDate: "May 10, 2026",
    readingTime: "5 min read",
    image: imgAiPharmacyInventoryDecisions,
    content: "<p>Placeholder content for AI inventory management article.</p>"
  },
  {
    id: "3",
    slug: "pharmacy-inventory-business-growth",
    title: "Why Pharmacy Inventory Management Matters for Business Growth",
    summary: "Effective inventory management is the backbone of a profitable pharmacy. Discover strategies to unlock capital tied up in slow-moving stock.",
    category: "Inventory Management",
    author: { name: "Business Strategy Team", role: "Operational Excellence" },
    publishedDate: "May 5, 2026",
    readingTime: "4 min read",
    image: imgPharmacyInventoryBusinessGrowth,
    content: "<p>Placeholder content for inventory management business growth article.</p>"
  },
  {
    id: "4",
    slug: "technology-transform-modern-pharmacy",
    title: "How Technology Can Transform the Modern Pharmacy",
    summary: "From robotics to telemedicine, explore the technological innovations that are reshaping the role of the pharmacist in the digital age.",
    category: "Healthcare Technology",
    author: { name: "Innovation Desk", role: "Product Strategy" },
    publishedDate: "April 28, 2026",
    readingTime: "7 min read",
    image: imgTechnologyTransformModernPharmacy,
    content: "<p>Placeholder content for technology transformation article.</p>"
  },
  {
    id: "5",
    slug: "pharmacyos-next-generation-software",
    title: "PharmacyOS: What the Next Generation of Pharmacy Software Should Look Like",
    summary: "We break down the essential features of a modern pharmacy operating system and why cloud-native solutions are no longer optional.",
    category: "Pharmacy Management",
    author: { name: "Engineering Team", role: "Platform Architecture" },
    publishedDate: "April 20, 2026",
    readingTime: "5 min read",
    image: imgPharmacyosNextGenerationSoftware,
    content: "<p>Placeholder content for PharmacyOS article.</p>"
  },
  {
    id: "6",
    slug: "data-to-decisions-bi-role",
    title: "From Data to Decisions: The Role of Business Intelligence in Pharmacy",
    summary: "Stop guessing and start knowing. See how real-time BI dashboards can reveal hidden opportunities in your pharmacy's sales and operational data.",
    category: "Business Intelligence",
    author: { name: "Analytics Team", role: "BI Specialists" },
    publishedDate: "April 15, 2026",
    readingTime: "6 min read",
    image: imgDataToDecisionsBiRole,
    content: "<p>Placeholder content for BI role article.</p>"
  },
  {
    id: "7",
    slug: "multi-store-pharmacy-management-simplicity",
    title: "How Multi-Store Pharmacy Management Can Simplify Operations",
    summary: "Managing multiple locations doesn't have to be a headache. Learn how a unified command center can bring consistency and efficiency to your chain.",
    category: "Pharmacy Business",
    author: { name: "Operations Team", role: "Enterprise Solutions" },
    publishedDate: "April 10, 2026",
    readingTime: "5 min read",
    image: imgMultiStorePharmacyManagementSimplicity,
    content: "<p>Placeholder content for multi-store management article.</p>"
  },
  {
    id: "8",
    slug: "future-of-connected-healthcare",
    title: "The Future of Connected Healthcare",
    summary: "Visionary insights into how Med4One is building the digital connective tissue for the future of the healthcare ecosystem.",
    category: "Healthcare Technology",
    author: { name: "Founders", role: "Med4One Health Services" },
    publishedDate: "April 5, 2026",
    readingTime: "8 min read",
    image: imgFutureOfConnectedHealthcare,
    content: "<p>Placeholder content for connected healthcare article.</p>"
  },
  {
    id: "9",
    slug: "digital-customer-engagement-transformation",
    title: "How Digital Customer Engagement Can Transform Pharmacy Experiences",
    summary: "In a world of convenience, discover how digital tools can help pharmacies build deeper, more meaningful relationships with their patients.",
    category: "Customer Experience",
    author: { name: "Customer Success", role: "Patient Experience" },
    publishedDate: "March 28, 2026",
    readingTime: "5 min read",
    image: imgDigitalCustomerEngagementTransformation,
    content: "<p>Placeholder content for customer engagement article.</p>"
  },
  {
    id: "10",
    slug: "med4one-vision-introduction",
    title: "Introducing the Med4One Vision for Healthcare Technology",
    summary: "A deep dive into why we started Med4One and our commitment to making healthcare simpler, smarter, and more connected for everyone.",
    category: "Med4One Updates",
    author: { name: "Med4One Leadership", role: "Corporate Vision" },
    publishedDate: "March 20, 2026",
    readingTime: "6 min read",
    image: imgMed4oneVisionIntroduction,
    content: "<p>Placeholder content for Med4One vision article.</p>"
  }
];
