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
  Scale
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "August 16, 2026";

const sections = [
  { id: "about", title: "1. About This Privacy Policy", icon: Info },
  { id: "collection", title: "2. Information We May Collect", icon: Database },
  { id: "usage", title: "3. How We Use Information", icon: Activity },
  { id: "sharing", title: "4. How We Share Information", icon: ExternalLink },
  { id: "health", title: "5. Health & Prescription Information", icon: Shield },
  { id: "security", title: "6. Data Security", icon: Lock },
  { id: "retention", title: "7. Data Retention", icon: RefreshCcw },
  { id: "cookies", title: "8. Cookies & Tracking", icon: Eye },
  { id: "third-party", title: "9. Third-Party Services", icon: Smartphone },
  { id: "rights", title: "10. User Rights & Choices", icon: UserCheck },
  { id: "account", title: "11. Account Security", icon: Lock },
  { id: "children", title: "12. Children's Privacy", icon: UserCheck },
  { id: "international", title: "13. International Transfers", icon: ExternalLink },
  { id: "breaches", title: "14. Data Breaches", icon: AlertTriangle },
  { id: "changes", title: "15. Changes to Policy", icon: RefreshCcw },
  { id: "contact", title: "16. Contact Us", icon: Mail },
];

export const Route = createLazyFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("about");
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
      { threshold: 0.5 }
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
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At Med4One, we respect your privacy and are committed to protecting the information entrusted to us.
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
                Print Document
              </Button>
            </div>
          </aside>

          {/* Policy Content */}
          <main className="flex-1 max-w-3xl order-1 lg:order-2 bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm print:p-0 print:border-0 print:shadow-none">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 italic">
                This Privacy Policy explains how Med4One may collect, use, store, process and protect information when you use our websites, applications, software platforms and services.
              </p>

              <section id="about" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">1</span>
                  About This Privacy Policy
                </h2>
                <p>
                  This Privacy Policy describes how Med4One Health Services Pvt Ltd ("Med4One", "we", "us", or "our") manages information. It applies to our corporate websites, software applications (including PharmacyOS), customer-facing products, and other services where this policy is linked or referenced.
                </p>
                <p>
                  Our goal is to provide transparency about our data practices while ensuring the security and integrity of the information entrusted to us by our business customers and their authorized users.
                </p>
              </section>

              <section id="collection" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">2</span>
                  Information We May Collect
                </h2>
                <p>We categorize the information we collect into several groups to provide clarity on our practices:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li><strong>Account Information:</strong> Name, professional contact details, and authentication credentials.</li>
                  <li><strong>Business Information:</strong> Pharmacy name, license details, and operational structure.</li>
                  <li><strong>Transaction & Billing:</strong> Payment methods, billing address, and subscription details.</li>
                  <li><strong>Inventory & Sales:</strong> Data related to stock levels, purchase history, and commercial transactions.</li>
                  <li><strong>Technical Data:</strong> IP address, device type, browser information, and usage logs.</li>
                  <li><strong>Support Data:</strong> Communications sent to our customer success or technical support teams.</li>
                </ul>
                <div className="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Sensitive Information Notice
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 italic">
                    If healthcare or prescription-related information is processed through our services, it is identified as sensitive information. We handle such data only for legitimate service purposes, subject to applicable legal and regulatory requirements.
                  </p>
                </div>
              </section>

              <section id="usage" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">3</span>
                  How We Use Information
                </h2>
                <p>Med4One uses the information collected for the following business and operational purposes:</p>
                <ul>
                  <li>Providing, operating, and maintaining Med4One services and platforms.</li>
                  <li>Processing commercial transactions and managing customer accounts.</li>
                  <li>Delivering technical support and responding to inquiries.</li>
                  <li>Analyzing service performance to improve our products and develop new features.</li>
                  <li>Maintaining the security and integrity of our systems.</li>
                  <li>Detecting, preventing, and addressing fraud or unauthorized activity.</li>
                  <li>Providing business analytics and reporting tools to our customers.</li>
                  <li>Communicating essential service updates and administrative information.</li>
                  <li>Complying with applicable legal, regulatory, and tax obligations.</li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">4</span>
                  How We Share Information
                </h2>
                <p className="font-medium text-slate-900 dark:text-white">Med4One does not sell personal information to third parties.</p>
                <p>We may share information with specific categories of recipients as necessary to provide our services:</p>
                <ul>
                  <li><strong>Authorized Users:</strong> Information is shared within your organization according to your defined access controls.</li>
                  <li><strong>Service Providers:</strong> Technology partners who provide cloud infrastructure, payment processing, and communication tools.</li>
                  <li><strong>Professional Advisers:</strong> Auditors, legal counsel, and consultants where necessary for business operations.</li>
                  <li><strong>Legal Authorities:</strong> Government or regulatory bodies where we are legally compelled to disclose information.</li>
                </ul>
                <p className="text-sm text-slate-500">We aim to share only the minimum information necessary for the relevant purpose.</p>
              </section>

              <section id="health" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">5</span>
                  Health & Prescription Information
                </h2>
                <p>Certain workflows within Med4One platforms, particularly PharmacyOS, may involve the processing of prescription or healthcare-related data.</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Access to healthcare data should be strictly limited to authorized clinical or administrative personnel.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Information must only be used for legitimate service purposes such as dispensing, counseling, or inventory management.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                    </div>
                    <p className="text-sm">Users are responsible for ensuring they have the legal right to upload any healthcare data into the system.</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  Med4One applies technical and organizational safeguards designed to protect this information based on the specific service provided and applicable local requirements.
                </p>
              </section>

              <section id="security" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">6</span>
                  Data Security
                </h2>
                <p>
                  Med4One uses reasonable technical and organizational safeguards designed to protect information against unauthorized access, misuse, alteration, or disclosure. These measures include encrypted data transport, access control matrices, and regular infrastructure monitoring.
                </p>
                <p className="text-sm italic text-slate-500">
                  While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is absolutely secure.
                </p>
              </section>

              <section id="retention" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">7</span>
                  Data Retention
                </h2>
                <p>We retain information for as long as reasonably necessary to fulfill the following objectives:</p>
                <ul>
                  <li>Providing services to our customers.</li>
                  <li>Maintaining accurate business and financial records.</li>
                  <li>Meeting legal, regulatory, or tax obligations.</li>
                  <li>Resolving disputes and enforcing our agreements.</li>
                  <li>Maintaining security logs and audit trails.</li>
                </ul>
                <p>Retention periods vary depending on the data type and the specific service context.</p>
              </section>

              <section id="cookies" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">8</span>
                  Cookies & Tracking Technologies
                </h2>
                <p>We use cookies and similar technologies to enhance user experience and analyze service performance:</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for authentication and system security.</li>
                  <li><strong>Analytics:</strong> Used to understand how our platforms are navigated and used.</li>
                  <li><strong>Preferences:</strong> Used to remember your language or interface settings.</li>
                </ul>
              </section>

              <section id="third-party" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">9</span>
                  Third-Party Services
                </h2>
                <p>
                  Med4One services may integrate with or utilize third-party providers for infrastructure (e.g., cloud hosting), payment processing, map services, and analytics. We encourage users to review the privacy policies of these third-party services, as they govern the information handled by those providers.
                </p>
              </section>

              <section id="rights" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">10</span>
                  User Rights & Choices
                </h2>
                <p>
                  Depending on your location and applicable law, you may have specific rights regarding your personal information. These may include the right to access, correct, or delete your data, as well as the right to data portability or to object to certain processing activities.
                </p>
                <p>
                  To exercise these rights, please contact your organization's administrator or reach out to us directly as described in the "Contact Us" section.
                </p>
              </section>

              <section id="account" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">11</span>
                  Account Security
                </h2>
                <p>
                  Users are responsible for maintaining the confidentiality of their login credentials. You should immediately report any suspected unauthorized access to your account.
                </p>
                <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-500/5">
                  <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-1">Security Reminder</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Med4One will never ask you to share your password or OTP (One-Time Password) through unofficial channels such as email, SMS, or phone calls.
                  </p>
                </div>
              </section>

              <section id="children" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">12</span>
                  Children's Privacy
                </h2>
                <p>
                  Our services are intended for professional use by businesses and adult users. We do not knowingly collect personal information from children under the age of 18 unless a specific service workflow legally requires it and appropriate safeguards are implemented.
                </p>
              </section>

              <section id="international" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">13</span>
                  International Data Transfers
                </h2>
                <p>
                  Information may be processed or stored in locations outside of your specific state or country through our global cloud infrastructure and service providers. By using our services, you acknowledge that your information may be transferred to and processed in these locations.
                </p>
              </section>

              <section id="breaches" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">14</span>
                  Data Breaches & Security Incidents
                </h2>
                <p>
                  Med4One maintains internal processes intended to identify, investigate, and respond to potential security incidents. In the event of a significant data breach, we will notify affected parties and relevant authorities in accordance with applicable legal and regulatory requirements.
                </p>
              </section>

              <section id="changes" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">15</span>
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last Updated" date at the top of this policy indicates when the latest changes were made.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32 mb-16">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">16</span>
                  Contact Us
                </h2>
                <p>For any privacy-related enquiries or to exercise your rights, please contact us at:</p>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 w-fit">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a href="mailto:privacy@med4one.com" className="text-blue-500 font-medium hover:underline">
                    privacy@med4one.com
                  </a>
                </div>
              </section>

              <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                  <Scale className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    This Privacy Policy is provided for informational purposes and should be reviewed and finalized by qualified legal counsel before being published as Med4One's official Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
