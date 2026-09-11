import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { submitDemoRequest, CONSENT_TEXT } from "@/lib/demo.functions";

const demoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  pharmacyName: z.string().min(2, "Pharmacy name is required"),
  message: z.string().max(1500, "Please keep it under 1500 characters").optional(),
  consentGiven: z.literal(true, { message: "Please accept the consent statement to continue" }),
  honeypot: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoSchema>;

export function BookDemoForm({
  source = "homepage",
  title = "Book a Personalized Demo",
  description = "See how Med4One can transform your pharmacy operations.",
}: {
  source?: string;
  title?: string;
  description?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const mountedAt = useRef(Date.now());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: { message: "", honeypot: "" },
  });

  const consentGiven = watch("consentGiven");

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitDemoRequest({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          pharmacyName: data.pharmacyName,
          message: data.message ?? "",
          source,
          consentGiven: true,
          honeypot: data.honeypot ?? "",
          elapsedMs: Date.now() - mountedAt.current,
        },
      });
      setReference(result.reference);
      setIsSuccess(true);
      toast.success("Demo request received. Our team will contact you shortly.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setReference(null);
    mountedAt.current = Date.now();
    reset();
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 md:p-10 space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("honeypot")}
              />

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-semibold">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Rahul Sharma"
                  className={`h-12 rounded-xl ${errors.fullName ? "border-destructive" : ""}`}
                  {...register("fullName")}
                />
                {errors.fullName && <p className="text-xs text-destructive font-medium">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@pharmacy.com"
                  className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                  {...register("email")}
                />
                {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  inputMode="numeric"
                  placeholder="9980681844"
                  className={`h-12 rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                  {...register("phone")}
                />
                {errors.phone && <p className="text-xs text-destructive font-medium">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pharmacyName" className="text-sm font-semibold">Pharmacy / Business Name</Label>
                <Input
                  id="pharmacyName"
                  placeholder="Med Plus Pharmacy"
                  className={`h-12 rounded-xl ${errors.pharmacyName ? "border-destructive" : ""}`}
                  {...register("pharmacyName")}
                />
                {errors.pharmacyName && (
                  <p className="text-xs text-destructive font-medium">{errors.pharmacyName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold">What would you like to see? (optional)</Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="Billing speed, multi-store reporting, AI insights..."
                  className="rounded-xl resize-none"
                  {...register("message")}
                />
              </div>

              <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentGiven"
                    checked={consentGiven === true}
                    onCheckedChange={(checked) =>
                      setValue("consentGiven", checked === true ? true : (undefined as never), {
                        shouldValidate: true,
                      })
                    }
                    className="mt-0.5"
                  />
                  <Label htmlFor="consentGiven" className="text-xs leading-relaxed font-normal text-muted-foreground">
                    {CONSENT_TEXT}{" "}
                    <Link to="/privacy" className="text-primary font-semibold underline-offset-2 hover:underline">
                      Read the Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>
                {errors.consentGiven && (
                  <p className="text-xs text-destructive font-medium">{errors.consentGiven.message}</p>
                )}
                <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Spam-protected and validated on our secure servers.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending request...
                  </>
                ) : (
                  <>
                    Schedule My Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 text-center space-y-5"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Your demo request is confirmed</h3>
            <p className="text-muted-foreground">
              Our Med4One specialist will reach out within one business day to schedule your walkthrough.
            </p>
            {reference && (
              <p className="text-sm font-mono text-muted-foreground">Reference: {reference}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild variant="outline">
                <a href="https://wa.me/919980681844" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="ghost" onClick={handleReset}>
                Submit another request
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
