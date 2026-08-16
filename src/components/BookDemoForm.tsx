import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const demoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  pharmacyName: z.string().min(2, "Pharmacy name is required"),
});

type DemoFormData = z.infer<typeof demoSchema>;

export function BookDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Demo requested:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Demo request sent successfully!");
  };

  const handleReset = () => {
    setIsSuccess(false);
    reset();
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
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
              <h3 className="text-2xl font-bold text-slate-900">Book a Personalized Demo</h3>
              <p className="text-slate-600">See how Med4One can transform your pharmacy operations.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-bold text-slate-700">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  className={`h-12 rounded-xl border-slate-200 focus:ring-primary/20 ${errors.fullName ? 'border-red-500' : ''}`}
                  {...register("fullName")}
                />
                {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@pharmacy.com"
                    className={`h-12 rounded-xl border-slate-200 focus:ring-primary/20 ${errors.email ? 'border-red-500' : ''}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="9988776655"
                    className={`h-12 rounded-xl border-slate-200 focus:ring-primary/20 ${errors.phone ? 'border-red-500' : ''}`}
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pharmacyName" className="text-sm font-bold text-slate-700">Pharmacy/Entity Name</Label>
                <Input
                  id="pharmacyName"
                  placeholder="Med4One Pharmacy"
                  className={`h-12 rounded-xl border-slate-200 focus:ring-primary/20 ${errors.pharmacyName ? 'border-red-500' : ''}`}
                  {...register("pharmacyName")}
                />
                {errors.pharmacyName && <p className="text-xs text-red-500 font-medium">{errors.pharmacyName.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    Schedule My Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
                No credit card required • 7 days free trial included
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center space-y-8"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">Request Received!</h3>
              <p className="text-slate-600 leading-relaxed">
                Thank you for your interest. A Med4One healthcare technology specialist will contact you within 24 hours to schedule your personalized walkthrough.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleReset}
              className="rounded-xl px-8 h-12 font-bold"
            >
              Back to Website
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
