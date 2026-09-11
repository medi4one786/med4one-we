import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CalendarClock, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { BookDemoForm } from "@/components/BookDemoForm";

export const Route = createLazyFileRoute("/book-demo")({
  component: BookDemo,
});

const highlights = [
  {
    icon: CalendarClock,
    title: "30-minute guided walkthrough",
    desc: "A Med4One specialist shows billing, inventory, prescriptions and analytics on live software.",
  },
  {
    icon: MessageSquare,
    title: "Built around your pharmacy",
    desc: "Single store or a growing network — we tailor the session to how you actually operate.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays protected",
    desc: "Consent-based contact, encrypted storage and no sharing of your details with third parties.",
  },
];

function BookDemo() {
  return (
    <div className="flex min-h-screen flex-col pt-28 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Book a Demo
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              See Med4One running your pharmacy.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Share a few details and our team will schedule a personalised PharmacyOS demonstration covering
              billing, inventory, prescriptions, AI insights and multi-store reporting.
            </p>

            <div className="space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+919980681844" className="inline-flex items-center gap-2 font-semibold text-primary">
                <PhoneCall className="h-4 w-4" /> +91 99806 81844
              </a>
              <Link to="/pricing" className="hover:text-primary">View pricing</Link>
              <Link to="/contact" className="hover:text-primary">Other ways to reach us</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <BookDemoForm
              source="book-demo"
              title="Request your demo"
              description="Every enquiry lands directly in the Med4One team console."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
