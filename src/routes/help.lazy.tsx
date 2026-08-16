import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Search, 
  Rocket, 
  Layout, 
  Sparkles, 
  ShieldCheck, 
  Puzzle, 
  Wrench, 
  MessageCircle,
  ChevronDown,
  Paperclip,
  Send,
  ArrowRight,
  Clock,
  History
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";

const helpCategories = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: ["Account setup", "Pharmacy onboarding", "Login & authentication", "User permissions"]
  },
  {
    title: "PharmacyOS",
    icon: Layout,
    items: ["Dashboard", "Billing & POS", "Inventory", "Purchase", "Sales", "Customers", "Suppliers", "Reports", "GST & Tax", "Multi-Store"]
  },
  {
    title: "AI Solutions",
    icon: Sparkles,
    items: ["AI Business Assistant", "AI Inventory Forecast", "AI Sales Forecast", "AI Prescription OCR", "AI SOP Assistant"]
  },
  {
    title: "Account & Security",
    icon: ShieldCheck,
    items: ["Password", "MPIN", "User access", "Security", "Account settings"]
  },
  {
    title: "Integrations",
    icon: Puzzle,
    items: ["Payments", "WhatsApp", "SMS", "APIs", "Third-party integrations"]
  },
  {
    title: "Troubleshooting",
    icon: Wrench,
    items: ["Login problems", "Billing issues", "Inventory issues", "Sync issues", "Printer/barcode problems"]
  }
];

const faqs = [
  {
    question: "How do I reset my PharmacyOS password?",
    answer: "You can reset your password by clicking 'Forgot Password' on the login screen or via Account Settings > Security if you're already logged in."
  },
  {
    question: "How do I add a new user to my pharmacy?",
    answer: "Go to Account Settings > User Permissions and click 'Add User'. You can then assign specific roles like Admin, Pharmacist, or Sales Executive."
  },
  {
    question: "Can I use PharmacyOS without an internet connection?",
    answer: "Med4One PharmacyOS is a cloud-based platform. While some basic features may be available offline, a stable internet connection is required for real-time inventory syncing and GST filing."
  },
  {
    question: "How do I set up my GST settings?",
    answer: "Navigate to PharmacyOS > GST & Tax. You can enter your GSTIN and configure tax slabs for different categories of products."
  }
];

export const Route = createLazyFileRoute("/help")({
  component: HelpCentre,
});

function HelpCentre() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSupportForm, setShowSupportForm] = useState(false);

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support request submitted successfully!");
    setShowSupportForm(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Find answers, guides and support for your Med4One products.
          </p>
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <Input
              type="text"
              placeholder="Search for a question or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {helpCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <button className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <MessageCircle className="w-8 h-8 text-blue-500" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support Section */}
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 italic">Still need help?</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Our support team is available to help you with any technical or operational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setShowSupportForm(true)}
                className="rounded-xl font-bold"
              >
                Submit a Support Request
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl font-bold gap-2"
              >
                <History className="w-4 h-4" />
                Track My Support Request
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Request Modal */}
      {showSupportForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-500" />
                Submit a Support Request
              </h2>
              <button 
                onClick={() => setShowSupportForm(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <ChevronDown className="w-6 h-6 rotate-180" />
              </button>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Name</label>
                  <Input placeholder="Your full name" required className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <Input type="email" placeholder="work@company.com" required className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Pharmacy/Company</label>
                <Input placeholder="Business name" required className="rounded-xl" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Issue Category</label>
                  <Select required>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="getting-started">Getting Started</SelectItem>
                      <SelectItem value="pharmacyos">PharmacyOS</SelectItem>
                      <SelectItem value="ai">AI Solutions</SelectItem>
                      <SelectItem value="account">Account & Security</SelectItem>
                      <SelectItem value="integration">Integrations</SelectItem>
                      <SelectItem value="troubleshooting">Troubleshooting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Priority</label>
                  <Select required defaultValue="medium">
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (General Inquiry)</SelectItem>
                      <SelectItem value="medium">Medium (Issue affecting productivity)</SelectItem>
                      <SelectItem value="high">High (Service disruption)</SelectItem>
                      <SelectItem value="critical">Critical (Complete system failure)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Description</label>
                <Textarea 
                  placeholder="Describe your issue in detail..." 
                  className="min-h-[120px] rounded-xl"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Paperclip className="w-4 h-4" />
                  Attachment (Screenshots/Logs)
                </label>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer group">
                  <p className="text-sm text-slate-500 group-hover:text-blue-500 transition-colors">
                    Click or drag files to upload (Max 10MB)
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setShowSupportForm(false)}
                  className="rounded-xl"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
