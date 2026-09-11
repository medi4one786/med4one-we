import { useEffect, useState } from "react";
import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Loader2, LogOut, Save, LayoutDashboard } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useSession, useIsAdmin } from "@/hooks/useSession";

export const Route = createLazyFileRoute("/account")({
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const { user, loading } = useSession();
  const { isAdmin } = useIsAdmin();
  const [profile, setProfile] = useState({ full_name: "", pharmacy_name: "", phone: "" });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    let active = true;
    supabase
      .from("profiles")
      .select("full_name, pharmacy_name, phone")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (!active) return;
        if (data) {
          setProfile({
            full_name: data.full_name ?? "",
            pharmacy_name: data.pharmacy_name ?? "",
            phone: data.phone ?? "",
          });
        }
        setLoadingProfile(false);
      });
    return () => {
      active = false;
    };
  }, [user]);

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, email: user.email ?? null, ...profile }, { onConflict: "id" });
    setSaving(false);
    if (error) {
      toast.error("Could not save your details. Please try again.");
      return;
    }
    toast.success("Profile updated.");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out.");
    navigate({ to: "/" });
  };

  if (loading || loadingProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-28">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold md:text-4xl">My Account</h1>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <Link to="/pharmacyos">
                  <LayoutDashboard className="mr-2 h-4 w-4" /> Open PharmacyOS
                </Link>
              </Button>
              {isAdmin && (
                <Button variant="outline" asChild>
                  <Link to="/admin/leads">Lead console</Link>
                </Button>
              )}
              <Button variant="ghost" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" /> Sign out
              </Button>
            </div>
          </div>

          <form onSubmit={save} className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="full_name">Full name</Label>
              <Input
                id="full_name"
                value={profile.full_name}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pharmacy_name">Pharmacy name</Label>
              <Input
                id="pharmacy_name"
                value={profile.pharmacy_name}
                onChange={(e) => setProfile({ ...profile, pharmacy_name: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 font-semibold" disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Save changes
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
