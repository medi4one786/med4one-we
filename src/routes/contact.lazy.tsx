import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Send,
  Calendar,
  Building2,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/20 blur-[100px] rounded-full" />
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Let's Build the <span className="text-primary">Future of Healthcare</span> Together.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl"
            >
              Whether you're a pharmacy owner, healthcare business, technology partner, enterprise organization, or simply want to learn more about Med4One — our team is ready to connect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl inline-block"
            >
              <p className="text-lg font-medium text-slate-200">
                Have a question? Exploring PharmacyOS? Looking for a technology partnership?
              </p>
              <p className="text-accent font-semibold mt-2">Let's start a conversation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Contact Methods & Form */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Talk to Med4One</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Sales & Business Enquiries</h4>
                      <a href="mailto:sales@med4one.com" className="text-primary font-semibold hover:underline block mb-2">sales@med4one.com</a>
                      <p className="text-sm text-muted-foreground">For: PharmacyOS, Demonstrations, Pricing, Enterprise & Partnerships.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-primary font-bold text-xl mb-1">9980681844</p>
                      <p className="text-sm text-muted-foreground mb-3">Speak with our team about Med4One solutions and requirements.</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="tel:9980681844">Call Med4One</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t">
                <h2 className="text-3xl font-bold tracking-tight">Visit Our Office</h2>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg">Med4One Health Services Pvt Ltd</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Aspire Coworks<br />
                      No. 472/7 Balaji Arcade, 2nd & 3rd Floor<br />
                      A.V.S. Compound, 20th L Cross Road<br />
                      AVS Layout, 4th Block, Koramangala<br />
                      Bangalore – 560095, Karnataka, India
                    </p>
                    <Button variant="link" className="px-0 h-auto" asChild>
                      <a href="https://maps.google.com/?q=Aspire+Coworks+Koramangala" target="_blank" rel="noopener noreferrer">
                        Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm"
              >
                <div className="space-y-4 mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">Tell Us How We Can Help</h2>
                  <p className="text-muted-foreground">Complete the form and our team will get in touch with you.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullname">Full Name</Label>
                      <Input id="fullname" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Pharmacy / Company Name</Label>
                      <Input id="company" placeholder="Enter your business name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">What are you interested in?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pharmacyos">Med4One PharmacyOS</SelectItem>
                        <SelectItem value="ai">AI Solutions</SelectItem>
                        <SelectItem value="multistore">Multi-Store Management</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        <SelectItem value="customer">Customer Solutions</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Product Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements." className="min-h-[120px]" />
                  </div>

                  <Button className="w-full h-12 text-base" size="lg">
                    Send Enquiry <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Demo CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-accent-foreground font-bold tracking-wider uppercase text-sm">
                  <Calendar className="h-5 w-5" />
                  <span>Product Demonstration</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">See Med4One in Action.</h2>
                <p className="text-lg text-primary-foreground/80">
                  Discover how Med4One can help you manage pharmacy operations, inventory, billing, analytics and AI from one connected platform.
                </p>
                <Button size="lg" variant="secondary" className="h-12 px-10" asChild>
                  <Link to="/book-demo">Book a Demo</Link>
                </Button>
              </div>
              
              <div className="hidden md:block">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
                  {[
                    "Unified Billing & POS",
                    "AI-Powered Inventory",
                    "Multi-Store Analytics",
                    "Customer Loyalty App"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Footer Strip */}
      <section className="py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">We're Here to Help.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              One conversation could be the beginning of a smarter way to run your healthcare business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Call</span>
              <a href="tel:9980681844" className="text-2xl font-bold">9980681844</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Email</span>
              <a href="mailto:sales@med4one.com" className="text-2xl font-bold">sales@med4one.com</a>
            </div>
          </div>

          <div className="pt-8">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full" asChild>
              <Link to="/get-started">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>

          <div className="pt-12 text-muted-foreground">
            <h4 className="font-bold text-foreground mb-1">Med4One Health Services Pvt Ltd</h4>
            <p>Koramangala, Bangalore, Karnataka, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}
