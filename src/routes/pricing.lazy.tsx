import { createLazyFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, ShieldCheck, Globe, Bot, LayoutDashboard } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pricing")({
  component: Pricing,
});

function Pricing() {
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: "7-Day Free Trial",
      monthly: 0,
      description: "Experience the complete Med4One Pro experience for 7 days.",
      limits: [
        { label: "AI Actions", value: "50" },
        { label: "Comm Credits", value: "50" },
      ],
      features: [
        "Full PharmacyOS Access",
        "Billing & POS",
        "Inventory & Purchase",
        "All AI Assistants",
        "Analytics & Insights",
        "Offline Mode & Sync",
      ],
      icon: ShieldCheck,
      cta: "Start Free Trial",
      color: "border-border",
    },
    {
      name: "Basic",
      monthly: 999,
      description: "Everything you need to run one pharmacy professionally.",
      limits: [
        { label: "AI Actions", value: "100" },
        { label: "Comm Credits", value: "200" },
      ],
      features: [
        "Single Store Management",
        "A4/A5/Thermal Billing",
        "Basic AI Assistant",
        "Stock Adjustment",
        "Basic Financial Reports",
        "Up to 3 Users",
      ],
      icon: LayoutDashboard,
      cta: "Choose Basic",
      color: "border-border",
    },
    {
      name: "Pro",
      monthly: 2499,
      description: "The complete AI-powered PharmacyOS for growing pharmacies.",
      popular: true,
      limits: [
        { label: "AI Actions", value: "500" },
        { label: "Comm Credits", value: "1000" },
      ],
      features: [
        "Everything in Basic",
        "Unlimited Billing",
        "Advanced AI Advisor",
        "Smart Stock Reorder",
        "Purchase Invoice OCR",
        "Customer CRM & Loyalty",
      ],
      icon: Zap,
      cta: "Choose Pro",
      color: "border-primary shadow-xl shadow-primary/10",
    },
    {
      name: "Enterprise Advanced",
      monthly: 5999,
      description: "Centralized control for pharmacy chains and healthcare groups.",
      limits: [
        { label: "AI Actions", value: "2000" },
        { label: "Comm Credits", value: "5000" },
      ],
      features: [
        "Everything in Pro",
        "Multi-Store Command Center",
        "Inter-Store Stock Transfer",
        "Unlimited Users",
        "Advanced Audit Logs",
        "Priority 24/7 Support",
      ],
      icon: Globe,
      cta: "Talk to Sales",
      color: "border-border",
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Simple, Transparent <span className="text-primary">Pricing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Choose the plan that fits your healthcare business. From independent pharmacies to enterprise groups.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24 items-start">
            {tiers.map((tier, i) => (
              <motion.div 
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border bg-card flex flex-col h-full ${tier.color}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                    <tier.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl font-bold">₹{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm font-medium text-primary mt-2 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    7 Days Free Trial
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button 
                    className={`w-full h-12 text-base font-semibold rounded-xl ${tier.popular ? 'bg-primary' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/get-started">Start 7 Days Free Trial</Link>
                  </Button>
                  <a 
                    href="/#demo" 
                    className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-xl text-muted-foreground hover:text-primary"
                  >
                    Book a Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">Need a custom solution for your enterprise?</h2>
              <p className="text-slate-400">Specialized pricing and dedicated infrastructure for large hospital groups and nationwide pharmacy chains.</p>
            </div>
            <Button size="lg" className="h-14 px-8 text-lg font-bold shrink-0" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {[
              { q: "Is there a setup fee?", a: "No, we believe in transparent pricing. There are no hidden setup or onboarding fees." },
              { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your plan at any time as your business grows." },
              { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption and secure cloud infrastructure to protect your business data." },
              { q: "Do you offer offline billing?", a: "Yes, PharmacyOS supports offline billing to ensure your business never stops, even without internet." }
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-bold">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

