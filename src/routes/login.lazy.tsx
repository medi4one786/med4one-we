import { useEffect, useState } from "react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Loader2, LogIn, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

export const Route = createLazyFileRoute("/login")({
  component: LoginPage,
});

type Mode = "signin" | "signup";

function LoginPage() {
  const navigate = useNavigate();
  const { session, loading } = useSession();
  const [mode, setMode] = useState<Mode>("signin");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    pharmacyName: "",
    phone: "",
  });

  useEffect(() => {
    if (!loading && session) navigate({ to: "/account" });
  }, [loading, session, navigate]);

  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password,
        });
        if (error) throw error;
        toast.success("Welcome back to Med4One.");
        navigate({ to: "/account" });
      } else {
        const { error } = await supabase.auth.signUp({
          email: form.email.trim(),
          password: form.password,
          options: {
            emailRedirectTo: `${window.location.origin}/account`,
            data: {
              full_name: form.fullName.trim(),
              pharmacy_name: form.pharmacyName.trim(),
              phone: form.phone.trim(),
            },
          },
        });
        if (error) throw error;
        toast.success("Account created. You are signed in.");
        navigate({ to: "/account" });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Authentication failed. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            {mode === "signin" ? "Sign in to Med4One" : "Create your Med4One account"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {mode === "signin"
              ? "Access your PharmacyOS workspace and account details."
              : "Set up your pharmacy profile in a few seconds."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {mode === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" required value={form.fullName} onChange={update("fullName")} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pharmacyName">Pharmacy name</Label>
                <Input id="pharmacyName" required value={form.pharmacyName} onChange={update("pharmacyName")} className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" inputMode="numeric" value={form.phone} onChange={update("phone")} className="h-12 rounded-xl" />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={form.email} onChange={update("email")} className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              value={form.password}
              onChange={update("password")}
              className="h-12 rounded-xl"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-12 font-semibold" disabled={busy}>
            {busy ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
              </>
            ) : mode === "signin" ? (
              <>
                <LogIn className="mr-2 h-4 w-4" /> Sign in
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" /> Create account
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 space-y-3 text-center text-sm text-muted-foreground">
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          >
            {mode === "signin" ? "New to Med4One? Create an account" : "Already have an account? Sign in"}
          </button>
          <p>
            Want a guided walkthrough first?{" "}
            <Link to="/book-demo" className="font-semibold text-primary hover:underline">
              Book a demo
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
