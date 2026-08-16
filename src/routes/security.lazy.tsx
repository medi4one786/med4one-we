import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  KeyRound,
  Users,
  Network,
  Server,
  Activity,
  Database,
  HardDrive,
  FileText,
  Eye,
  ArrowRight,
  CheckCircle2,
  Layers,
  Mail,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/security")({
  component: Security,
});

const pillars = [
  {
    title: "Data Protection",
    desc: "Protect information against unauthorized access, modification and disclosure.",
    icon: ShieldCheck,
  },
  {
    title: "Access Control",
    desc: "Ensure users can access only the information and functions appropriate to their role and permissions.",
    icon: Users,
  },
  {
    title: "Secure Authentication",
    desc: "Use secure authentication mechanisms to protect user accounts and prevent unauthorized access.",
    icon: KeyRound,
  },
  {
    title: "API Security",
    desc: "Design APIs with authentication, authorization and controlled access in mind.",
    icon: Network,
  },
  {
    title: "Infrastructure Security",
    desc: "Build Med4One on modern cloud infrastructure with appropriate security controls.",
    icon: Server,
  },
  {
    title: "Monitoring & Auditability",
    desc: "Maintain appropriate logs and monitoring capabilities to help identify suspicious activity and investigate security events.",
    icon: Activity,
  },
];

const roles = [
  { role: "Pharmacy Owner", scope: "Full business visibility and administration." },
  { role: "Manager", scope: "Store operations and management." },
  { role: "Pharmacist", scope: "Pharmacy and prescription-related workflows." },
  { role: "Billing Staff", scope: "Billing and customer transactions." },
  { role: "Inventory Staff", scope: "Purchase and inventory operations." },
  { role: "Support Team", scope: "Controlled access for customer support." },
  { role: "Administrator", scope: "System-level permissions based on authorized responsibilities." },
];

const safeguards = [
  "Encryption in transit",
  "Encryption at rest",
  "Secure authentication",
  "Role-based access",
  "Access controls",
  "Audit logs",
  "Secure APIs",
  "Database security",
  "Backup and recovery",
  "Infrastructure monitoring",
];

const privacyPoints = [
  "Collect only information necessary for the service",
  "Control who can access information",
  "Use information for legitimate business purposes",
  "Provide appropriate transparency about data handling",
  "Protect information throughout its lifecycle",
  "Follow applicable privacy and data-protection requirements",
];

const stack = [
  { label: "Application", icon: Layers },
  { label: "API", icon: Network },
  { label: "Authentication", icon: KeyRound },
  { label: "Database", icon: Database },
  { label: "Storage", icon: HardDrive },
  { label: "Monitoring", icon: Activity },
  { label: "Backup & Recovery", icon: Server },
];

const auditFields = [
  "User",
  "Action",
  "Date",
  "Time",
  "System activity",
  "Relevant business record",
];

const accountPractices = [
  "Use strong passwords",
  "Never share login credentials",
  "Use individual user accounts",
  "Keep authentication information confidential",
  "Log out from shared devices",
  "Report suspicious activity",
  "Use available security features",
];

function Security() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-accent/25 blur-[120px] rounded-full" />
        </div>
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent"
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                <span>Security at Med4One</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Built With <span className="text-accent">Security</span> in Mind.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 text-lg text-slate-300 max-w-xl"
              >
                <p>Healthcare technology requires trust.</p>
                <p>
                  Med4One is being designed with security, privacy and responsible data management at
                  the core of the platform.
                </p>
                <p className="text-white font-semibold text-xl">
                  Protect your data. Control access. Build trust.
                </p>
              </motion.div>
            </div>

            {/* Architecture visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 text-center">
                <div className="text-xs uppercase tracking-widest text-accent/80 mb-1">Platform</div>
                <div className="font-bold text-lg">Med4One</div>
              </div>

              <div className="mt-4 space-y-3">
                {stack.map((node, i) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-px w-6 bg-white/20 shrink-0" />
                    <div className="flex-1 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <node.icon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{node.label}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">
                        controlled
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Security is not an add-on */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Security Is Not an Add-On.
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              It Is Part of How We Build.
            </h3>
            <p className="text-lg text-muted-foreground">
              Med4One is designed with security considerations across the entire technology ecosystem
              — from user authentication and access permissions to APIs, databases, applications and
              infrastructure.
            </p>
            <p className="text-lg text-muted-foreground">
              We continuously work to strengthen the platform as Med4One grows.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Protecting What Matters */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Protecting What Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Med4One may support information related to pharmacies, businesses, employees,
              customers, transactions and healthcare workflows. We take the responsibility of
              protecting this information seriously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Role-Based Access */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <Users className="h-5 w-5" />
                <span>Role-Based Access</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                The Right Access for the Right Person.
              </h2>
              <p className="text-lg text-muted-foreground">
                Every employee should not have access to everything. Med4One is designed around
                role-based permissions so organizations can control access according to
                responsibilities.
              </p>
              <p className="text-muted-foreground">
                Access should always follow the principle of giving users only the permissions they
                need to perform their role.
              </p>
            </div>

            <div className="space-y-3">
              {roles.map((r, i) => (
                <motion.div
                  key={r.role}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 p-5 rounded-2xl border bg-card"
                >
                  <div className="sm:w-44 shrink-0 font-bold">{r.role}</div>
                  <div className="text-sm text-muted-foreground">{r.scope}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Data Security */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[140px] opacity-60" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Data Security</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-accent">
                Your Business Data Deserves Responsible Protection.
              </h3>
              <p className="text-lg text-slate-300">
                Med4One is designed to protect important business and operational information through
                appropriate technical and organizational safeguards. These may include, where
                implemented:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {safeguards.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm text-slate-200">{s}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300 leading-relaxed">
                Safeguards are listed as part of our security design approach. Each control is
                presented as implemented only once it has been configured and verified in the Med4One
                production environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Privacy by Design */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm">
                <Eye className="h-5 w-5" />
                <span>Privacy by Design</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Technology Should Respect Privacy.
              </h2>
              <p className="text-lg text-muted-foreground">
                Privacy should be considered from the beginning of product design, not added later.
              </p>
              <p className="text-muted-foreground">
                Healthcare information can be particularly sensitive, so privacy and security must
                evolve together.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-primary/5 p-8 md:p-10 space-y-5">
              <h3 className="font-bold text-lg">Med4One aims to:</h3>
              {privacyPoints.map((p) => (
                <div key={p} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Secure Infrastructure */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Secure Infrastructure</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              Built for a Scalable Future.
            </h3>
            <p className="text-lg text-muted-foreground">
              Med4One's future application infrastructure is designed to use modern cloud technology
              with security controls across every layer. As the platform grows, security practices
              and infrastructure controls should evolve with it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {stack.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full flex items-center justify-between rounded-2xl border bg-background px-6 py-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <node.icon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">{node.label}</span>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-accent" />
                </div>
                {i < stack.length - 1 && <div className="h-6 w-px bg-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Audit & Accountability */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <FileText className="h-5 w-5" />
                <span>Audit & Accountability</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Know What Happens Inside Your Platform.
              </h2>
              <p className="text-lg text-muted-foreground">
                For appropriate administrative and operational actions, Med4One can maintain audit
                information that helps organizations understand activity, investigate issues and
                improve accountability.
              </p>
              <p className="text-sm text-muted-foreground">
                Only audit capabilities that are actually available in the product are exposed.
              </p>
            </div>

            <div className="rounded-3xl border bg-card overflow-hidden">
              <div className="px-6 py-4 border-b bg-muted/40 text-sm font-semibold">
                Audit record
              </div>
              <div className="divide-y">
                {auditFields.map((f) => (
                  <div key={f} className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm font-medium">{f}</span>
                    <div className="h-2 w-24 rounded bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Account Security */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Account Security</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Your Account. Your Responsibility. Our Shared Security.
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {accountPractices.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-3 rounded-xl border bg-background px-5 py-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground">
              Med4One should never ask users to share their passwords or authentication codes through
              unofficial channels.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Security Monitoring */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Security Monitoring</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-accent">
                Security Is an Ongoing Process.
              </h3>
              <p className="text-lg text-slate-300">
                No technology platform can eliminate every security risk. As the platform matures,
                security processes, monitoring and controls are regularly reviewed and strengthened.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Monitor", "Detect", "Investigate", "Respond", "Improve"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold">
                    {step}
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-accent" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Responsible Disclosure */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Responsible Disclosure
              </h2>
              <h3 className="text-xl font-semibold text-primary">Found a Security Issue?</h3>
              <p className="text-muted-foreground">
                We take security reports seriously. If you believe you have discovered a security
                vulnerability affecting Med4One, please contact our security team with relevant
                details so the issue can be investigated responsibly.
              </p>
              <p className="text-sm text-muted-foreground">
                Please do not include passwords, OTPs, patient information or other sensitive
                personal information in an initial security report.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 space-y-4">
              <div className="text-sm font-bold uppercase tracking-widest text-primary">
                Security Contact
              </div>
              <a
                href="mailto:sales@med4one.com"
                className="flex items-center gap-3 font-semibold text-lg hover:underline"
              >
                <Mail className="h-5 w-5 text-primary" />
                sales@med4one.com
              </a>
              <a
                href="tel:9980681844"
                className="flex items-center gap-3 font-semibold text-lg hover:underline"
              >
                <Phone className="h-5 w-5 text-primary" />
                9980681844
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Commitment + transparency */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-5">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Commitment</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Trust Is Something We Earn.
              </h3>
              <p className="text-lg text-muted-foreground">
                Security is not a feature we add to a product.{" "}
                <span className="text-foreground font-semibold">
                  It is a responsibility we carry as we build.
                </span>
              </p>
              <p className="text-muted-foreground">
                As Med4One grows, we will continue strengthening our technology, processes and
                security practices to help protect the businesses and people who rely on our
                platform.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8 md:p-10 space-y-4">
              <h3 className="text-2xl font-bold">Security & Compliance</h3>
              <div className="text-sm font-bold uppercase tracking-widest text-primary">
                Current Approach
              </div>
              <p className="text-muted-foreground">
                Security controls are continuously being developed and strengthened as the Med4One
                platform moves toward production. We publish certification or compliance status only
                once it has been formally obtained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary/5 border border-primary/20 p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Have Questions About Security?
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand that security is an important part of choosing a healthcare technology
              platform. Contact the Med4One team to discuss your organization's security and data
              requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-10" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10" asChild>
                <a href="mailto:sales@med4one.com">sales@med4one.com</a>
              </Button>
              <Button size="lg" variant="ghost" className="h-12 px-10" asChild>
                <a href="tel:9980681844">9980681844</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
