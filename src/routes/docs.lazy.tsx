import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  ChevronRight, 
  ChevronLeft,
  Copy, 
  Check, 
  ThumbsUp, 
  ThumbsDown,
  Menu,
  X,
  BookOpen,
  Rocket,
  Layout,
  Sparkles,
  ShieldCheck,
  Puzzle,
  Code2,
  HelpCircle,
  FileText,
  Clock,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

// Documentation structure data
const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    items: [
      { id: "intro", title: "Introduction" },
      { id: "account", title: "Create Your Account" },
      { id: "onboarding", title: "Pharmacy Onboarding" },
      { id: "setup", title: "Initial Setup" },
      { id: "overview", title: "Dashboard Overview" },
    ]
  },
  {
    id: "pharmacyos",
    title: "PharmacyOS",
    icon: Layout,
    items: [
      { id: "pos", title: "Billing & POS" },
      { id: "inventory", title: "Inventory" },
      { id: "purchase", title: "Purchase" },
      { id: "sales", title: "Sales" },
      { id: "customers", title: "Customers" },
      { id: "suppliers", title: "Suppliers" },
      { id: "employees", title: "Employees" },
      { id: "reports", title: "Reports" },
      { id: "tax", title: "GST & Tax" },
      { id: "expiry", title: "Batch & Expiry" },
      { id: "barcode", title: "Barcode Management" },
      { id: "prescription", title: "Prescription Management" },
      { id: "multi-store", title: "Multi-Store" },
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    icon: Sparkles,
    items: [
      { id: "ai-assistant", title: "AI Business Assistant" },
      { id: "ai-inventory", title: "AI Inventory Forecast" },
      { id: "ai-sales", title: "AI Sales Forecast" },
      { id: "ai-ocr", title: "AI Prescription OCR" },
      { id: "ai-sop", title: "AI SOP Assistant" },
      { id: "ai-marketing", title: "AI Marketing Tools" },
    ]
  },
  {
    id: "admin",
    title: "Admin Console",
    icon: ShieldCheck,
    items: [
      { id: "approval", title: "Pharmacy Approval" },
      { id: "mgmt", title: "Pharmacy Management" },
      { id: "users", title: "User Management" },
      { id: "perms", title: "Permissions" },
      { id: "tickets", title: "Support & Tickets" },
      { id: "monitoring", title: "System Monitoring" },
    ]
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: Puzzle,
    items: [
      { id: "auth", title: "Authentication" },
      { id: "payments", title: "Payments" },
      { id: "sms", title: "SMS" },
      { id: "whatsapp", title: "WhatsApp" },
      { id: "apis", title: "APIs" },
      { id: "webhooks", title: "Webhooks" },
    ]
  },
  {
    id: "dev",
    title: "Developer Documentation",
    icon: Code2,
    items: [
      { id: "api-overview", title: "API Overview" },
      { id: "api-auth", title: "Authentication" },
      { id: "api-ref", title: "API Reference" },
      { id: "req-res", title: "Requests & Responses" },
      { id: "errors", title: "Error Codes" },
      { id: "sandbox", title: "Testing / Sandbox" },
    ]
  },
  {
    id: "guides",
    title: "Guides & Tutorials",
    icon: BookOpen,
    items: [
      { id: "create-pharmacy", title: "How to create a pharmacy" },
      { id: "add-medicine", title: "How to add a medicine" },
      { id: "inventory-sync", title: "How purchase updates inventory" },
      { id: "manage-perms", title: "How to configure permissions" },
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: HelpCircle,
    items: [
      { id: "login-issues", title: "Login issues" },
      { id: "billing-issues", title: "Billing issues" },
      { id: "sync-problems", title: "Sync problems" },
      { id: "printer-issues", title: "Printer issues" },
    ]
  },
  {
    id: "release-notes",
    title: "Release Notes",
    icon: FileText,
    items: [
      { id: "v1-2", title: "v1.2.0 - Aug 2026" },
      { id: "v1-1", title: "v1.1.5 - July 2026" },
    ]
  }
];

export const Route = createLazyFileRoute("/docs")({
  component: DocsPage,
});

function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("intro");
  const [copiedCode, setCopiedCode] = useState(false);
  const [feedback, setFeedback] = useState<null | 'up' | 'down'>(null);

  // Flattened list for search and navigation
  const allDocItems = useMemo(() => {
    return docSections.flatMap(section => 
      section.items.map(item => ({ ...item, sectionId: section.id, sectionTitle: section.title }))
    );
  }, []);

  const currentIndex = allDocItems.findIndex(item => item.id === activeItem);
  const currentItem = allDocItems[currentIndex] || allDocItems[0];
  const prevItem = currentIndex > 0 ? allDocItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allDocItems.length - 1 ? allDocItems[currentIndex + 1] : null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText("GET /api/v1/inventory\nAuthorization: Bearer <token>");
    setCopiedCode(true);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    toast.success("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-20">
      {/* Mobile Search Header */}
      <div className="lg:hidden sticky top-20 z-30 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 h-10 text-sm bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-blue-500/20"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className={cn(
            "fixed inset-0 z-40 lg:z-0 lg:relative lg:block w-72 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar border-r lg:border-none bg-white dark:bg-[#020617] transition-transform lg:translate-x-0 pt-8 lg:pt-12 pb-20",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="lg:hidden absolute top-4 right-4">
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden lg:block mb-8 pr-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full pl-9 h-9 text-xs bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg focus:ring-blue-500/20"
                />
              </div>
            </div>

            <nav className="space-y-8 pr-6">
              {docSections.map((section) => (
                <div key={section.id}>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
                    <section.icon className="w-4 h-4 text-blue-500" />
                    {section.title}
                  </h3>
                  <ul className="space-y-1 ml-1 border-l border-slate-200 dark:border-slate-800">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveItem(item.id);
                            setIsSidebarOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-1.5 text-[13px] transition-all border-l -ml-[1px]",
                            activeItem === item.id
                              ? "text-blue-600 border-blue-600 font-medium bg-blue-50/50 dark:bg-blue-900/10"
                              : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                          )}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl py-8 lg:py-12 min-h-[calc(100vh-80px)]">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
              <Link to="/docs" className="hover:text-blue-500">Docs</Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="hover:text-blue-500">{currentItem.sectionTitle}</span>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-slate-900 dark:text-white font-medium">{currentItem.title}</span>
            </nav>

            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                {currentItem.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Last updated: Aug 16, 2026
                </div>
              </div>

              {/* Dynamic Content Placeholders */}
              <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
                  Everything you need to understand, configure and use the {currentItem.sectionTitle} module of the Med4One platform.
                </p>

                {activeItem === 'intro' && (
                  <div className="space-y-6">
                    <p>Med4One is the intelligent healthcare platform built for the next generation of pharmacies. Our comprehensive ecosystem connects your entire business—from inventory and sales to advanced AI insights and multi-store management.</p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-2xl p-6">
                      <h4 className="text-blue-900 dark:text-blue-100 font-bold mb-2 flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        Quick Start
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200/80 text-sm mb-4">New to Med4One? Start with our onboarding guide to get your pharmacy set up in minutes.</p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg" onClick={() => setActiveItem('onboarding')}>
                        Go to Onboarding Guide
                      </Button>
                    </div>
                  </div>
                )}

                {activeItem === 'api-overview' && (
                  <div className="space-y-6">
                    <p>The Med4One API allows you to programmatically access your pharmacy data, integrate with third-party systems, and build custom workflows.</p>
                    <div className="bg-slate-900 dark:bg-black rounded-xl overflow-hidden group border border-slate-800">
                      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                        <span className="text-xs font-mono text-slate-400">Example Request</span>
                        <button onClick={handleCopyCode} className="text-slate-400 hover:text-white transition-colors">
                          {copiedCode ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <pre className="p-4 text-sm font-mono text-blue-400 overflow-x-auto">
                        <code>
                          GET /api/v1/inventory{"\n"}
                          Authorization: Bearer &lt;token&gt;
                        </code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Generic placeholder for other items */}
                {activeItem !== 'intro' && activeItem !== 'api-overview' && (
                  <div className="space-y-6">
                    <p>This section provides detailed documentation for {currentItem.title} within the {currentItem.sectionTitle} module.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 text-center py-12">
                        <FileText className="w-8 h-8 text-slate-300 dark:text-slate-800 mx-auto mb-3" />
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1">Technical Reference</h4>
                        <p className="text-xs">Coming soon</p>
                      </div>
                      <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 text-center py-12">
                        <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-800 mx-auto mb-3" />
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1">Step-by-Step Guide</h4>
                        <p className="text-xs">Coming soon</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Related Documentation */}
              <div className="mt-16 pt-8 border-t">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Related Documentation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all text-left group">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Pharmacy Onboarding</h4>
                      <p className="text-xs text-slate-500">Getting Started</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all text-left group">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">RBAC & Permissions</h4>
                      <p className="text-xs text-slate-500">Security Documentation</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Feedback Widget */}
              <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
                <h3 className="text-lg font-bold mb-2">Was this page helpful?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Your feedback helps us improve our documentation.</p>
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleFeedback('up')}
                    className={cn(
                      "rounded-lg gap-2",
                      feedback === 'up' && "bg-blue-600 text-white border-blue-600"
                    )}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Yes
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleFeedback('down')}
                    className={cn(
                      "rounded-lg gap-2",
                      feedback === 'down' && "bg-red-600 text-white border-red-600"
                    )}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    No
                  </Button>
                </div>
              </div>

              {/* Previous / Next Navigation */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between border-t pt-8 pb-12">
                {prevItem ? (
                  <button 
                    onClick={() => setActiveItem(prevItem.id)}
                    className="flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-left group"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      <ChevronLeft className="w-3 h-3" />
                      Previous
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{prevItem.title}</span>
                  </button>
                ) : <div />}

                {nextItem ? (
                  <button 
                    onClick={() => setActiveItem(nextItem.id)}
                    className="flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-right group"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1">
                      Next
                      <ChevronRight className="w-3 h-3" />
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">{nextItem.title}</span>
                  </button>
                ) : <div />}
              </div>
            </article>
          </main>

          {/* Right Table of Contents (Desktop Only) */}
          <aside className="hidden xl:block w-64 pt-12 pb-20 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">On this page</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-xs font-medium text-blue-600 border-l-2 border-blue-600 pl-3">Overview</a>
              <a href="#" className="block text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white pl-3 border-l-2 border-transparent">Quick Start</a>
              <a href="#" className="block text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white pl-3 border-l-2 border-transparent">Core Features</a>
              <a href="#" className="block text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white pl-3 border-l-2 border-transparent">Next Steps</a>
            </nav>

            <div className="mt-12 p-6 bg-blue-600 rounded-2xl text-white">
              <h5 className="font-bold text-sm mb-2">Need Help?</h5>
              <p className="text-[11px] text-blue-100 mb-4 leading-relaxed">Can't find what you're looking for? Our support team is here to help.</p>
              <Button asChild size="sm" variant="secondary" className="w-full text-xs font-bold rounded-lg shadow-lg">
                <Link to="/help">Help Centre</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
