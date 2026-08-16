import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  CreditCard, 
  RefreshCcw, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Mail,
  Printer,
  Search,
  ChevronRight,
  Clock,
  ShieldCheck,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "August 16, 2026";

const sections = [
  { id: "overview", title: "1. Overview", icon: FileText },
  { id: "cancellation", title: "2. Subscription Cancellation", icon: XCircle },
  { id: "eligibility", title: "3. Refund Eligibility", icon: CheckCircle2 },
  { id: "trials", title: "4. Free Trials", icon: Clock },
  { id: "errors", title: "5. Payment Errors", icon: AlertCircle },
  { id: "process", title: "6. Refund Process", icon: RefreshCcw },
  { id: "method", title: "7. Payment Method", icon: CreditCard },
  { id: "auto-renewal", title: "8. Cancellation of Auto-Renewal", icon: RefreshCcw },
  { id: "service-specific", title: "9. Service-Specific Refunds", icon: ShieldCheck },
  { id: "customer-purchases", title: "10. Customer Purchases", icon: HelpCircle },
  { id: "disputes", title: "11. Disputes", icon: AlertCircle },
  { id: "changes", title: "12. Changes to This Policy", icon: RefreshCcw },
  { id: "contact", title: "13. Contact", icon: Mail },
];

export const Route = createLazyFileRoute("/refund")({
  component: RefundPolicy,
});

function RefundPolicy() {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium mb-4 border border-blue-500/20">
            Last Updated: {LAST_UPDATED}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We believe in keeping our pricing, subscriptions and refund process transparent and easy to understand.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 lg:shrink-0 order-2 lg:order-1">
            <div className="sticky top-32 space-y-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search policy..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
              </div>

              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all text-left",
                      activeSection === section.id
                        ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <section.icon className="w-4 h-4 shrink-0" />
                    {section.title}
                  </button>
                ))}
              </nav>

              <Button 
                variant="outline" 
                className="w-full border-slate-200 dark:border-slate-800 gap-2"
                onClick={() => window.print()}
              >
                <Printer className="w-4 h-4" />
                Print Policy
              </Button>
            </div>
          </aside>

          {/* Policy Content */}
          <main className="flex-1 max-w-3xl order-1 lg:order-2 bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm print:p-0 print:border-0 print:shadow-none">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Refund eligibility depends on the Med4One product or service purchased, the applicable plan, cancellation timing and applicable laws.
              </p>

              <section id="overview" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">1</span>
                  Overview
                </h2>
                <p>
                  This policy applies to eligible Med4One products, subscriptions and paid services. Please note that different Med4One services may have varying refund rules based on their nature and the specific agreements in place.
                </p>
              </section>

              <section id="cancellation" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">2</span>
                  Subscription Cancellation
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Users may request cancellation according to their applicable subscription terms.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Cancellation may stop future renewals of the subscription.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Cancellation does not automatically mean the current subscription period will be refunded.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Any refund will depend on the applicable plan and refund eligibility criteria.</p>
                  </div>
                </div>
              </section>

              <section id="eligibility" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">3</span>
                  Refund Eligibility
                </h2>
                <p className="mb-6">
                  Eligibility for a refund is evaluated based on the following criteria, subject to final Med4One commercial policy and applicable law.
                </p>
                
                <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-xl mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <th className="text-left p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-green-600 dark:text-green-400">Potentially Eligible</th>
                        <th className="text-left p-4 font-bold border-b border-slate-200 dark:border-slate-800 text-red-600 dark:text-red-400">Not Automatically Eligible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-r border-slate-200 dark:border-slate-800 vertical-align-top">
                          <ul className="space-y-2 list-none p-0 m-0">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Duplicate payment</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Payment taken incorrectly</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Service not provided as agreed</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Unresolvable technical issue</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Required by applicable law</li>
                          </ul>
                        </td>
                        <td className="p-4 vertical-align-top">
                          <ul className="space-y-2 list-none p-0 m-0">
                            <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Change of mind</li>
                            <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Unused subscription period</li>
                            <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Failure to use the software</li>
                            <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> User-side internet/device problems</li>
                            <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Request after refund period</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="trials" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">4</span>
                  Free Trials
                </h2>
                <p>
                  If a free trial is offered, users can cancel before the trial ends to avoid conversion to a paid subscription, where applicable. Please note that not every Med4One plan currently includes a free trial; check your specific plan details for confirmation.
                </p>
              </section>

              <section id="errors" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">5</span>
                  Payment Errors
                </h2>
                <p>Customers should contact Med4One billing support immediately if:</p>
                <ul>
                  <li>They were charged twice for a single transaction.</li>
                  <li>The wrong amount was charged to their payment method.</li>
                  <li>A payment was successful but the corresponding subscription was not activated.</li>
                </ul>
              </section>

              <section id="process" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">6</span>
                  Refund Process
                </h2>
                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                  <ol className="space-y-4 m-0 p-0 list-none">
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">1</div>
                      <p className="m-0">Submit a formal refund request to our billing team.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">2</div>
                      <p className="m-0">Provide order, subscription, and payment transaction details.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">3</div>
                      <p className="m-0">Med4One reviews the request against eligibility criteria.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">4</div>
                      <p className="m-0">The customer receives a decision regarding their request.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">5</div>
                      <p className="m-0">Approved refunds are processed through the original payment method.</p>
                    </li>
                  </ol>
                </div>
              </section>

              <section id="method" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">7</span>
                  Payment Method
                </h2>
                <p>
                  Approved refunds will normally be processed through the original payment method used for the purchase, or another appropriate method permitted by the applicable payment provider and law.
                </p>
              </section>

              <section id="auto-renewal" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">8</span>
                  Cancellation of Auto-Renewal
                </h2>
                <p>
                  Users can cancel recurring payments through their account settings or by contacting support. Cancellation of auto-renewal does not necessarily cancel access immediately; access may continue until the end of the paid period, subject to the specific terms of the applicable plan.
                </p>
              </section>

              <section id="service-specific" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">9</span>
                  Service-Specific Refunds
                </h2>
                <p>Different Med4One services may have separate refund terms defined in their respective agreements:</p>
                <ul>
                  <li>PharmacyOS SaaS subscriptions</li>
                  <li>Enterprise software licensing agreements</li>
                  <li>Professional/Consulting services</li>
                  <li>Implementation and onboarding services</li>
                  <li>Customer-facing digital purchases</li>
                </ul>
              </section>

              <section id="customer-purchases" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">10</span>
                  Customer Purchases
                </h2>
                <p>
                  Please note that this policy pertains to software and technology services. If Med4One later introduces the sale of medicines or physical healthcare products, a separate "Customer Product Returns & Refunds" policy will be established to govern those specific transactions.
                </p>
              </section>

              <section id="disputes" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">11</span>
                  Disputes
                </h2>
                <p>
                  Customers should first contact Med4One support or customer service to resolve any refund-related issues. Where applicable, complaints will be handled through Med4One's internal grievance mechanism and in accordance with applicable consumer protection laws.
                </p>
              </section>

              <section id="changes" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">12</span>
                  Changes to This Policy
                </h2>
                <p>
                  Med4One may update this Refund & Cancellation Policy from time to time to reflect changes in our services or legal requirements. Material changes will be communicated to active subscribers via their registered email address or platform notifications.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">13</span>
                  Contact
                </h2>
                <p>
                  For all refund, billing, and subscription inquiries, please contact us at:
                </p>
                <div className="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href="mailto:billing@med4one.com" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">billing@med4one.com</a>
                </div>
              </section>

              <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 italic">
                This Refund & Cancellation Policy should be reviewed and finalized by qualified legal counsel before being published as Med4One's official policy.
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
