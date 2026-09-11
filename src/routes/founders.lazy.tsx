import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Compass, Handshake, Lightbulb, Mail, Phone, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/founders")({
  component: Founders,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const principles = [
  {
    icon: Lightbulb,
    title: "Start at the counter",
    desc: "Every feature begins with a real pharmacy workflow — billing a queue, chasing an expiry, checking a batch.",
  },
  {
    icon: ShieldCheck,
    title: "Trust before growth",
    desc: "Health data is handled with consent, encryption and role-based access from day one, not as a later upgrade.",
  },
  {
    icon: Handshake,
    title: "Priced for independents",
    desc: "Enterprise-grade software should be affordable for a single-store chemist, not only for large chains.",
  },
  {
    icon: Compass,
    title: "Build for the long term",
    desc: "PharmacyOS is the first layer of a connected healthcare platform, not a one-off product.",
  },
];

const responsibilities = [
  {
    role: "Founder & Managing Director",
    scope: "Company direction, partnerships, funding and long-term product vision for Med4One.",
  },
  {
    role: "Technology & Product",
    scope: "PharmacyOS architecture, AI capability, platform reliability and the engineering roadmap.",
  },
  {
    role: "Business & Growth",
    scope: "Pharmacy relationships, pricing, onboarding, distributor partnerships and market expansion.",
  },
  {
    role: "Customer Success",
    scope: "Implementation, migration from legacy billing software, training and day-to-day support.",
  },
];

function Founders() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Founders
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Med4One was founded to fix how pharmacies run.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Med4One Health Services Pvt Ltd was started in Bangalore around one observation: pharmacies were doing
              critical healthcare work on software that had barely changed in a decade. PharmacyOS is our answer.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                <Link to="/contact">Talk to the founding team</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-transparent px-8 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/team">Meet the team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <Building2 className="h-9 w-9 text-primary" />
            <h2 className="mt-6 text-2xl font-bold md:text-3xl">Why we started</h2>
            <p className="mt-4 text-muted-foreground">
              Pharmacists were losing hours to manual stock registers, expiry losses nobody spotted in time, and billing
              software that slowed the counter during a rush. Meanwhile every other part of business software had moved
              on. We set out to give pharmacies the same quality of tooling that modern retail and finance take for
              granted — with healthcare-grade care for data.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
            <Users className="h-9 w-9 text-primary" />
            <h2 className="mt-6 text-2xl font-bold md:text-3xl">How we build</h2>
            <p className="mt-4 text-muted-foreground">
              PharmacyOS is designed alongside working pharmacists. Features are validated at real counters before they
              ship, and the roadmap is shaped by what stores actually ask for: faster billing, cleaner expiry control,
              honest margins and reporting they can trust.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
            Founding principles
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <motion.div
                {...fadeUp}
                key={principle.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <principle.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{principle.title}</h3>
                <p className="mt-2 text-muted-foreground">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold md:text-4xl">Leadership responsibilities</h2>
            <p className="text-muted-foreground">
              How ownership is divided across the company. For named leadership profiles, photographs or interview
              requests, contact us and we will share the current details.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {responsibilities.map((item) => (
              <motion.div {...fadeUp} key={item.role} className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold">{item.role}</h3>
                <p className="mt-2 text-muted-foreground">{item.scope}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold md:text-4xl">Founder & media enquiries</h2>
            <div className="flex flex-wrap gap-6 text-slate-300">
              <a href="mailto:sales@med4one.com" className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> sales@med4one.com
              </a>
              <a href="tel:+919980681844" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> +91 99806 81844
              </a>
            </div>
          </div>
          <Button size="lg" className="h-12 px-8 font-semibold" asChild>
            <Link to="/press-kit">
              Press kit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
