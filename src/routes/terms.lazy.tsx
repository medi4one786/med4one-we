import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  Shield, 
  ChevronRight, 
  Search, 
  Printer, 
  Info, 
  UserCheck, 
  Lock, 
  Eye, 
  Activity, 
  Database, 
  RefreshCcw, 
  ExternalLink,
  Smartphone,
  AlertTriangle,
  Mail,
  Scale,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "August 16, 2026";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "about", title: "2. About Med4One" },
  { id: "eligibility", title: "3. Eligibility & Account" },
  { id: "use", title: "4. Use of Med4One Services" },
  { id: "pharmacyos", title: "5. PharmacyOS" },
  { id: "ai", title: "6. AI Features" },
  { id: "privacy", title: "7. User Data & Privacy" },
  { id: "healthcare", title: "8. Customer & Healthcare Info" },
  { id: "integrations", title: "9. Third-Party Services" },
  { id: "payments", title: "10. Payments & Subscriptions" },
  { id: "ip", title: "11. Intellectual Property" },
  { id: "content", title: "12. User Content" },
  { id: "availability", title: "13. Service Availability" },
  { id: "backup", title: "14. Data Backup & Export" },
  { id: "suspension", title: "15. Suspension & Termination" },
  { id: "disclaimer", title: "16. Disclaimer" },
  { id: "liability", title: "17. Limitation of Liability" },
  { id: "indemnification", title: "18. Indemnification" },
  { id: "changes-services", title: "19. Changes to Services" },
  { id: "changes-terms", title: "20. Changes to Terms" },
  { id: "governing", title: "21. Governing Law" },
  { id: "contact", title: "22. Contact" },
];

export const Route = createLazyFileRoute("/terms")({
  component: TermsAndConditions,
});

function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("acceptance");
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
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium mb-4 border border-blue-500/20">
            Last Updated: {LAST_UPDATED}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            These Terms & Conditions govern your access to and use of Med4One websites, applications, software platforms and services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-80 lg:shrink-0">
            <div className="sticky top-32 space-y-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border rounded-lg text-sm"
                />
              </div>
              <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-lg transition-all",
                      activeSection === section.id
                        ? "bg-blue-500/10 text-blue-500"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400"
                    )}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 max-w-3xl bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-2xl border shadow-sm prose prose-slate dark:prose-invert">
            <p className="italic">By accessing or using Med4One services, you agree to these Terms & Conditions. If you do not agree, please do not use the applicable service.</p>
            
            <section id="acceptance"><h2>1. Acceptance of Terms</h2><p>By accessing or using any Med4One website, application, or service, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p></section>
            <section id="about"><h2>2. About Med4One</h2><p>Med4One provides healthcare technology and software solutions, including PharmacyOS, AI features, Business Intelligence, and enterprise management tools.</p></section>
            <section id="eligibility"><h2>3. Eligibility & Account</h2><p>You must provide accurate information, keep your credentials confidential, and notify us of unauthorized access.</p></section>
            <section id="use"><h2>4. Use of Med4One Services</h2><p>Use our platform lawfully and only for authorized purposes. Unauthorized access, compromise, reverse engineering, or malicious activity is strictly prohibited.</p></section>
            <section id="pharmacyos"><h2>5. PharmacyOS</h2><p>PharmacyOS provides tools for operations like billing, inventory, and sales. Feature availability depends on your specific subscription plan.</p></section>
            <section id="ai"><h2>6. AI Features</h2><p>AI features provide assistance, not medical advice. AI outputs may be inaccurate and require independent professional judgment. Do not rely on AI for diagnosis or treatment.</p></section>
            <section id="privacy"><h2>7. User Data & Privacy</h2><p>We handle information per our Privacy Policy. <Button variant="link" onClick={() => window.location.href='/privacy'} className="p-0 h-auto">View Privacy Policy</Button>.</p></section>
            <section id="healthcare"><h2>8. Customer & Healthcare Information</h2><p>You are responsible for ensuring you have all necessary rights to collect and process any information uploaded to Med4One.</p></section>
            <section id="integrations"><h2>9. Third-Party Services</h2><p>We may integrate with payment, SMS, WhatsApp, and cloud providers. Third-party terms may apply.</p></section>
            <section id="payments"><h2>10. Payments & Subscriptions</h2><p>Billing follows your selected plan. You are responsible for all applicable taxes and fees.</p></section>
            <section id="ip"><h2>11. Intellectual Property</h2><p>Med4One owns all platform software, branding, and content. You are granted a limited right to use the service as per your subscription.</p></section>
            <section id="content"><h2>12. User Content</h2><p>You retain appropriate rights to content you provide, while granting Med4One the necessary permissions to operate our services.</p></section>
            <section id="availability"><h2>13. Service Availability</h2><p>We strive for reliability but do not guarantee uninterrupted service. Maintenance or external events may cause downtime.</p></section>
            <section id="backup"><h2>14. Data Backup & Export</h2><p>We provide tools for data export; please review your specific service agreement regarding data retention and backup.</p></section>
            <section id="suspension"><h2>15. Suspension & Termination</h2><p>Access may be suspended or terminated for misuse, fraud, non-payment, or security threats.</p></section>
            <section id="disclaimer"><h2>16. Disclaimer</h2><p>Med4One is a technology platform, not a healthcare provider. Use our tools for informational purposes only; always verify data independently.</p></section>
            <section id="liability"><h2>17. Limitation of Liability</h2><p><em>(Clearly marked for legal review)</em>. Our total liability is limited to the extent permitted by applicable law.</p></section>
            <section id="indemnification"><h2>18. Indemnification</h2><p>You agree to indemnify Med4One against claims resulting from unauthorized use, misuse, or breach of these terms.</p></section>
            <section id="changes-services"><h2>19. Changes to Services</h2><p>We may update or discontinue features over time. Material changes will be communicated as required.</p></section>
            <section id="changes-terms"><h2>20. Changes to Terms</h2><p>We may update these terms. Last Updated: {LAST_UPDATED}</p></section>
            <section id="governing"><h2>21. Governing Law</h2><p>Governed by the laws of India. Any disputes are subject to the jurisdiction of competent courts in India.</p></section>
            <section id="contact"><h2>22. Contact</h2><p>For legal enquiries, email: legal@med4one.com</p></section>

            <div className="mt-16 pt-8 border-t text-sm text-slate-500 italic">
              These Terms & Conditions should be reviewed and finalized by qualified legal counsel before being published as Med4One's official Terms & Conditions.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
