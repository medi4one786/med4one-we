import { useState } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Rocket,
  CalendarCheck,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createLazyFileRoute("/get-started")({
  component: GetStarted,
});

const SIZES = [
  { value: "single", label: "Single pharmacy (1 store)" },
  { value: "small", label: "Small chain (2–5 stores)" },
  { value: "growing", label: "Growing chain (6–20 stores)" },
  { value: "enterprise", label: "Enterprise / Hospital (20+ stores)" },
] as const;

const trialSchema = z.object({
  company: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your pharmacy or company name" })
    .max(100, { message: "Company name must be under 100 characters" }),
  size: z.enum(["single", "small", "growing", "enterprise"], {
    message: "Please select your pharmacy size",
  }),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{8,15}$/, { message: "Enter a valid phone number" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid work email" })
    .max(255, { message: "Email must be under 255 characters" }),
});

type TrialValues = z.infer<typeof trialSchema>;

type Onboarding = {
  track: string;
  headline: string;
  detail: string;
  steps: string[];
  cta: { label: string; to: string };
  icon: typeof Store;
};

function routeLead(size: TrialValues["size"]): Onboarding {
  if (size === "single") {
    return {
      track: "Self-serve onboarding",
      headline: "You're set for instant activation.",
      detail:
        "Single-store pharmacies go live on PharmacyOS Starter the same day. Your trial workspace details arrive by email, and our team calls to help you import your first stock file.",
      steps: [
        "Activate your PharmacyOS workspace (7 days free)",
        "Import stock & supplier master data",
        "Run your first billing and GST-ready invoice",
      ],
      cta: { label: "See Starter plan details", to: "/pricing" },
      icon: Store,
    };
  }
  if (size === "small" || size === "growing") {
    return {
      track: "Guided multi-store onboarding",
      headline: "You're routed to guided multi-store setup.",
      detail:
        "An onboarding specialist configures store hierarchy, transfers and central purchase for you, so every branch reports into one dashboard from day one.",
      steps: [
        "Onboarding call to map your store hierarchy",
        "Central purchase, transfers & pricing rules configured",
        "Multi-store analytics and AI demand forecasting switched on",
      ],
      cta: { label: "Explore Multi-Store", to: "/multi-store" },
      icon: Rocket,
    };
  }
  return {
    track: "Enterprise onboarding",
    headline: "You're routed to our enterprise team.",
    detail:
      "Enterprise and hospital pharmacy networks get a solution architect, security review, RBAC design and a staged rollout plan before go-live.",
    steps: [
      "Solution architecture & security review",
      "RBAC, integrations and data migration plan",
      "Phased rollout with dedicated success manager",
    ],
    cta: { label: "Book an enterprise demo", to: "/book-demo" },
    icon: Building2,
  };
}

function GetStarted() {
  const [values, setValues] = useState<{
    company: string;
    size: string;
    phone: string;
    email: string;
  }>({ company: "", size: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ data: TrialValues; onboarding: Onboarding } | null>(null);

  const update = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = trialSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof TrialValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof TrialValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setResult({ data: parsed.data, onboarding: routeLead(parsed.data.size) });
      toast.success("Trial request received — routing you to the right onboarding step.");
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[0%] right-[-5%] w-[35%] h-[35%] bg-accent/25 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" /> 7 days free · No card required
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Start your <span className="text-primary">free trial</span> in under a minute.
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                Tell us a little about your pharmacy. We instantly route you to the right onboarding
                path — self-serve activation, guided multi-store setup, or enterprise rollout.
              </p>

              <ul className="space-y-4 pt-2">
                {[
                  "Full PharmacyOS access for 7 days",
                  "Guided data import and staff setup",
                  "AI insights enabled from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" /> Role-based access & encryption
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" /> Support in English, Hindi & Kannada
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
            >
              {!result ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Create your trial workspace</h2>
                    <p className="text-sm text-slate-400">
                      Four quick details — that's all we need to get you started.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-200">
                      Pharmacy / Company name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="e.g. Sunrise Pharmacy"
                      maxLength={100}
                      value={values.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="h-12 bg-white/5 border-white/15 text-white placeholder:text-slate-500"
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-slate-200">
                      Pharmacy size
                    </Label>
                    <Select value={values.size} onValueChange={(v) => update("size", v)}>
                      <SelectTrigger
                        id="size"
                        className="h-12 bg-white/5 border-white/15 text-white data-[placeholder]:text-slate-500"
                      >
                        <SelectValue placeholder="Select number of stores" />
                      </SelectTrigger>
                      <SelectContent>
                        {SIZES.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.size && <p className="text-sm text-destructive">{errors.size}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-200">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+91 98806 81844"
                        maxLength={15}
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="h-12 bg-white/5 border-white/15 text-white placeholder:text-slate-500"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Work email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@pharmacy.com"
                        maxLength={255}
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="h-12 bg-white/5 border-white/15 text-white placeholder:text-slate-500"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Preparing your trial…
                      </>
                    ) : (
                      <>
                        Start 7-day free trial <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By continuing you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-slate-300">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              ) : (
                <TrialResult data={result.data} onboarding={result.onboarding} onReset={() => setResult(null)} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Every pharmacy gets the right onboarding path
            </h2>
            <p className="text-muted-foreground">
              Your pharmacy size decides how we onboard you — no generic checklists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[routeLead("single"), routeLead("small"), routeLead("enterprise")].map((track) => (
              <div key={track.track} className="rounded-2xl border bg-card p-6 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <track.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{track.track}</h3>
                <ul className="space-y-2">
                  {track.steps.map((step) => (
                    <li key={step} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <Button size="lg" className="h-14 px-8" asChild>
              <Link to="/book-demo">
                <CalendarCheck className="mr-2 h-5 w-5" /> Book a demo instead
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8" asChild>
              <a href="mailto:sales@med4one.com">
                <Mail className="mr-2 h-5 w-5" /> Talk to sales
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrialResult({
  data,
  onboarding,
  onReset,
}: {
  data: TrialValues;
  onboarding: Onboarding;
  onReset: () => void;
}) {
  const Icon = onboarding.icon;
  const whatsappHref = `https://wa.me/919980681844?text=${encodeURIComponent(
    `Hi Med4One, I just requested a free trial for ${data.company} (${onboarding.track}). My email is ${data.email}.`,
  )}`;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-2 text-sm font-semibold text-accent">
        <CheckCircle2 className="h-4 w-4" /> {onboarding.track}
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{onboarding.headline}</h2>
        <p className="text-slate-300 text-sm leading-relaxed">{onboarding.detail}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold truncate">{data.company}</p>
            <p className="text-xs text-slate-400 truncate">
              {SIZES.find((s) => s.value === data.size)?.label}
            </p>
          </div>
        </div>
        <ol className="space-y-2 pt-2">
          {onboarding.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm text-slate-300">
              <span className="h-5 w-5 rounded-full bg-white/10 text-[11px] font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <Button size="lg" className="w-full h-13" asChild>
          <Link to={onboarding.cta.to}>
            {onboarding.cta.label} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full h-13 bg-white/5 border-white/15 text-white hover:bg-white/10" asChild>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-5 w-5" /> Continue on WhatsApp
          </a>
        </Button>
        <button
          type="button"
          onClick={onReset}
          className="w-full text-sm text-slate-400 hover:text-slate-200 underline pt-1"
        >
          Submit another pharmacy
        </button>
      </div>
    </motion.div>
  );
}
