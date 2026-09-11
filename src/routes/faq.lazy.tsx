import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { 
  Search, 
  HelpCircle, 
  ChevronRight, 
  MessageSquare, 
  LifeBuoy, 
  Layout, 
  Sparkles, 
  Rocket, 
  CreditCard, 
  ShieldCheck, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "pharmacyos", label: "PharmacyOS", icon: Layout },
  { id: "ai", label: "AI Solutions", icon: Sparkles },
  { id: "getting-started", label: "Getting Started", icon: Rocket },
  { id: "pricing", label: "Pricing & Plans", icon: CreditCard },
  { id: "security", label: "Security & Data", icon: ShieldCheck },
  { id: "support", label: "Support", icon: Wrench },
];

const faqs = [
  // General
  {
    category: "general",
    question: "What is Med4One?",
    answer: "Med4One is an intelligent healthcare platform designed to modernize pharmacy operations through integrated software and AI solutions."
  },
  {
    category: "general",
    question: "What solutions does Med4One provide?",
    answer: "We provide PharmacyOS for operations, AI solutions for business intelligence, and enterprise tools for multi-store management."
  },
  {
    category: "general",
    question: "Who can use Med4One?",
    answer: "Our platform is built for independent pharmacies, pharmacy chains, and hospital-attached pharmacies looking for digital transformation."
  },
  // PharmacyOS
  {
    category: "pharmacyos",
    question: "What is Med4One PharmacyOS?",
    answer: "PharmacyOS is our core operating system that handles billing, inventory, purchase management, and customer records in a unified interface."
  },
  {
    category: "pharmacyos",
    question: "Can I manage billing and inventory?",
    answer: "Yes, PharmacyOS features an integrated POS system that automatically updates inventory levels with every sale and purchase."
  },
  {
    category: "pharmacyos",
    question: "Does purchase automatically update stock?",
    answer: "Absolutely. When you record a purchase entry, the stock levels for those specific batches are updated instantly across your store."
  },
  {
    category: "pharmacyos",
    question: "Can I manage batches and expiry?",
    answer: "Yes, PharmacyOS includes a powerful batch management system that alerts you about near-expiry items and helps with First-Expired-First-Out (FEFO) dispensing."
  },
  {
    category: "pharmacyos",
    question: "Can I manage multiple pharmacies?",
    answer: "Yes, our Multi-Store module allows you to manage inventory, transfers, and sales across multiple locations from a single dashboard."
  },
  {
    category: "pharmacyos",
    question: "Can I manage employees and permissions?",
    answer: "Yes, the system supports Role-Based Access Control (RBAC), allowing you to define exactly what each staff member can see or do."
  },
  // AI Solutions
  {
    category: "ai",
    question: "What AI features are available?",
    answer: "Our AI suite includes a Business Assistant, Inventory Forecasting, Sales Forecasting, and Prescription OCR for faster data entry."
  },
  {
    category: "ai",
    question: "Can AI help with inventory forecasting?",
    answer: "Yes, our AI analyzes historical sales patterns to predict future demand, helping you optimize stock levels and reduce capital blockage."
  },
  {
    category: "ai",
    question: "Can AI help analyze pharmacy sales?",
    answer: "Yes, the AI Sales Forecast provides deep insights into your peak hours, high-performing categories, and seasonal trends."
  },
  {
    category: "ai",
    question: "What is the AI Business Assistant?",
    answer: "It is a conversational AI that you can ask questions about your pharmacy's performance, such as 'What was my highest selling item today?'"
  },
  // Getting Started
  {
    category: "getting-started",
    question: "How can I onboard my pharmacy?",
    answer: "You can start a 7-day free trial through our 'Get Started' page, or book a demo with our team for a guided setup process."
  },
  {
    category: "getting-started",
    question: "Can I import data from my existing pharmacy software?",
    answer: "Yes, we support data migration from most common pharmacy software formats to ensure you don't lose your historical records."
  },
  {
    category: "getting-started",
    question: "How long does setup take?",
    answer: "A basic setup takes less than an hour. Full data migration typically takes 24-48 hours depending on the volume of your records."
  },
  {
    category: "getting-started",
    question: "Can my employees use the system?",
    answer: "Yes, you can add multiple users with specific permissions based on their role in the pharmacy."
  },
  // Pricing
  {
    category: "pricing",
    question: "What plans are available?",
    answer: "We offer four plans: a 7-day free trial, Basic (₹999/mo), Pro (₹2,499/mo), and Enterprise Advanced (₹5,999/mo) to suit different business sizes."
  },
  {
    category: "pricing",
    question: "Is there a free trial?",
    answer: "Yes, we offer a 7-day free trial for all our plans so you can experience the platform before committing."
  },
  {
    category: "pricing",
    question: "Can I upgrade my plan?",
    answer: "Yes, you can upgrade your plan at any time through your account settings to unlock advanced features as your business grows."
  },
  {
    category: "pricing",
    question: "How does multi-store pricing work?",
    answer: "Multi-store pricing is typically handled under the Enterprise plan with a base fee and a per-additional-store cost."
  },
  // Security
  {
    category: "security",
    question: "How is my data protected?",
    answer: "We use enterprise-grade encryption for data at rest and in transit, hosted on secure cloud infrastructure with regular backups."
  },
  {
    category: "security",
    question: "Who can access my pharmacy data?",
    answer: "Only users authorized by you can access your data. Med4One staff only access data when required for technical support with your explicit permission."
  },
  {
    category: "security",
    question: "Does Med4One support role-based permissions?",
    answer: "Yes, you can define roles like Admin, Pharmacist, and Sales Staff to restrict access to sensitive business or financial information."
  },
  {
    category: "security",
    question: "Can I export my business data?",
    answer: "Yes, you have full ownership of your data and can export inventory, sales, and customer reports in standard formats at any time."
  },
  // Support
  {
    category: "support",
    question: "How do I contact support?",
    answer: "You can reach us through the Help Centre, email sales@med4one.com, or use the floating WhatsApp button for quick queries."
  },
  {
    category: "support",
    question: "How can I raise a support ticket?",
    answer: "Visit our Help Centre and click on 'Submit a Support Request' to provide details about your issue."
  },
  {
    category: "support",
    question: "Can I track my support request?",
    answer: "Yes, once a request is submitted, you will receive a tracking link to monitor the status and communication on your ticket."
  }
];

export const Route = createLazyFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            Find quick answers about Med4One, PharmacyOS, AI solutions, pricing, onboarding and support.
          </p>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <Input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <aside className="lg:w-72 lg:shrink-0">
            <div className="sticky top-32 space-y-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all text-left border",
                  activeCategory === "all"
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-sm"
                )}
              >
                <HelpCircle className="w-4 h-4" />
                All Questions
              </button>
              
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all text-left border",
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-sm"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </aside>

          {/* FAQ Accordion */}
          <main className="flex-1 max-w-3xl">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-1 overflow-hidden transition-all hover:border-blue-500/30 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-bold text-slate-900 dark:text-white hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">No results found</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search or category filters to find what you're looking for.
                </p>
              </div>
            )}
          </main>
        </div>

        {/* CTA Footer */}
        <div className="mt-20 max-w-4xl mx-auto text-center p-12 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 italic">
              Didn't find the answer you're looking for?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white gap-2 group/btn">
                <Link to="/help">
                  <LifeBuoy className="w-4 h-4" />
                  Visit Help Centre
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-bold border-slate-200 dark:border-slate-800 gap-2">
                <Link to="/contact">
                  <MessageSquare className="w-4 h-4" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
