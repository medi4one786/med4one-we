import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import med4oneLogo from "@/assets/med4one-logo.png";
import med4oneLogoWebp from "@/assets/med4one-logo.webp";
import heroShot from "@/assets/home-v2/hero.webp";
import aiShot from "@/assets/home-v2/ai.webp";
import biShot from "@/assets/home-v2/bi.webp";
import multiStoreShot from "@/assets/home-v2/multistore.webp";

export const Route = createLazyFileRoute("/media-kit")({
  component: MediaKit,
});

const downloads = [
  { name: "Primary logo (PNG)", href: med4oneLogo, file: "med4one-logo.png" },
  { name: "Primary logo (WebP)", href: med4oneLogoWebp, file: "med4one-logo.webp" },
  { name: "PharmacyOS hero visual", href: heroShot, file: "med4one-pharmacyos-hero.webp" },
  { name: "AI assistant visual", href: aiShot, file: "med4one-ai.webp" },
  { name: "Business intelligence visual", href: biShot, file: "med4one-business-intelligence.webp" },
  { name: "Multi-store visual", href: multiStoreShot, file: "med4one-multi-store.webp" },
];

function MediaKit() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 lg:pt-44 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Media Kit</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Med4One brand and product assets
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Download official Med4One logos and PharmacyOS product visuals for articles, event
              listings, partner pages and presentations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold">Downloads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item) => (
              <div key={item.file} className="rounded-3xl border bg-card p-6 flex flex-col gap-4">
                <div className="rounded-2xl bg-muted/50 p-4 flex items-center justify-center min-h-32">
                  <img src={item.href} alt={item.name} loading="lazy" className="max-h-28 w-auto object-contain" />
                </div>
                <p className="font-semibold">{item.name}</p>
                <Button asChild variant="outline" className="rounded-xl mt-auto">
                  <a href={item.href} download={item.file}>
                    <Download className="h-4 w-4 mr-2" /> Download
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border bg-card p-8 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" /> Please do
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Use the logo with clear space on white or light backgrounds.</li>
              <li>Write the company name as “Med4One Health Services Pvt Ltd”.</li>
              <li>Write the product name as “PharmacyOS”, one word.</li>
              <li>Keep the brand blue, green and red exactly as supplied.</li>
            </ul>
          </div>
          <div className="rounded-3xl border bg-card p-8 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" /> Please don’t
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Stretch, rotate, recolour or add shadows to the logo.</li>
              <li>Place the logo on busy photography or low-contrast colour.</li>
              <li>Alter product screenshots or add invented figures to them.</li>
              <li>Use the brand to imply a partnership that is not in place.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">Need something specific?</h2>
              <p className="text-slate-300">
                Ask us for higher-resolution files, product walkthroughs or company details.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/contact">Contact us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl text-slate-950">
                <Link to="/press-kit">Press kit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
