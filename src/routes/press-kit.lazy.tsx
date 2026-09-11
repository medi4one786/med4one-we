import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Mail, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import med4oneLogo from "@/assets/med4one-logo.png";
import heroShot from "@/assets/home-v2/hero.webp";
import posShot from "@/assets/pharmacyos/pos-showcase.webp";

export const Route = createLazyFileRoute("/press-kit")({
  component: PressKit,
});

const facts = [
  { label: "Legal name", value: "Med4One Health Services Pvt Ltd" },
  { label: "Headquarters", value: "Koramangala, Bangalore, India" },
  { label: "Category", value: "Healthcare technology / SaaS" },
  { label: "Flagship product", value: "PharmacyOS" },
  { label: "Press contact", value: "sales@med4one.com" },
];

const colours = [
  { name: "Med4One Blue", hex: "#0040A0" },
  { name: "Med4One Green", hex: "#00B060" },
  { name: "Med4One Red", hex: "#F03030" },
  { name: "Deep Navy", hex: "#0F172A" },
];

function PressKit() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 lg:pt-44 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Press Kit</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Media resources for Med4One
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Everything journalists, partners and event organisers need to write about Med4One
              Health Services Pvt Ltd and PharmacyOS — company facts, brand assets and product
              visuals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" /> Company boilerplate
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Med4One Health Services Pvt Ltd is a Bangalore-based healthcare technology company
              building PharmacyOS — an intelligent operating system for pharmacies. The platform
              brings billing, inventory, prescriptions, purchase orders, business intelligence and
              AI assistance into a single connected workspace so independent pharmacies and
              multi-store groups can run smarter, grow faster and care better.
            </p>
            <ul className="divide-y rounded-2xl border bg-card">
              {facts.map((fact) => (
                <li key={fact.label} className="flex flex-wrap justify-between gap-2 px-5 py-4 text-sm">
                  <span className="text-muted-foreground">{fact.label}</span>
                  <span className="font-semibold">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Palette className="h-6 w-6 text-primary" /> Brand colours
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {colours.map((colour) => (
                <div key={colour.hex} className="rounded-2xl border bg-card overflow-hidden">
                  <div className="h-24" style={{ backgroundColor: colour.hex }} />
                  <div className="p-4">
                    <p className="font-semibold text-sm">{colour.name}</p>
                    <p className="text-xs text-muted-foreground">{colour.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border bg-card p-6 space-y-4">
              <img
                src={med4oneLogo}
                alt="Med4One Health Services logo"
                width={513}
                height={160}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Use the logo on white or light backgrounds with clear space around it. Do not
                stretch, recolour or add effects.
              </p>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={med4oneLogo} download="med4one-logo.png">
                  <Download className="h-4 w-4 mr-2" /> Download logo (PNG)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold">Product visuals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: heroShot, alt: "PharmacyOS running on desktop and laptop at a pharmacy counter" },
              { src: posShot, alt: "PharmacyOS billing and inventory dashboard" },
            ].map((shot) => (
              <figure key={shot.src} className="rounded-3xl overflow-hidden border bg-card">
                <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full h-auto" />
                <figcaption className="p-4 text-sm text-muted-foreground">{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">Media enquiries</h2>
              <p className="text-slate-300">
                For interviews, quotes or additional assets, write to sales@med4one.com.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild size="lg" className="rounded-xl">
                <a href="mailto:sales@med4one.com">
                  <Mail className="h-4 w-4 mr-2" /> Email press team
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl text-slate-950">
                <Link to="/media-kit">Media kit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
