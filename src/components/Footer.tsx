import { Link } from "@tanstack/react-router";
import med4oneLogo from "@/assets/med4one-logo.png";
import med4oneLogoWebp from "@/assets/med4one-logo.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 xl:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <picture>
                <source srcSet={med4oneLogoWebp} type="image/webp" sizes="(max-width: 768px) 150px, 200px" />
                <img
                  src={med4oneLogo}
                  alt="Med4One Health Services logo"
                  width={513}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto md:h-12 object-contain"
                />
              </picture>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Med4One Health Services Pvt Ltd. Intelligent technology for the future of healthcare. Building the operating system for the modern pharmacy.
            </p>
            
            <div className="flex flex-col gap-4 py-4 border-y border-primary/5 md:border-none">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold text-xs">Call</span>
                </div>
                <a href="tel:9980681844" className="font-bold text-lg hover:text-primary transition-colors">9980681844</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold text-xs">Mail</span>
                </div>
                <a href="mailto:sales@med4one.com" className="font-bold text-lg hover:text-primary transition-colors">sales@med4one.com</a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-foreground">Office Location</p>
              <address className="text-sm text-muted-foreground not-italic leading-relaxed max-w-xs">
                Aspire Coworks, No. 472/7 Balaji Arcade, 2nd & 3rd Floor, A.V.S. Compound, Koramangala, Bangalore – 560095, India.
              </address>
            </div>
          </div>

          <div className="space-y-6 md:space-y-0">
            <details className="md:block group" open>
              <summary className="font-bold mb-6 list-none flex justify-between items-center cursor-pointer md:cursor-default pointer-events-auto md:pointer-events-none">
                Solutions
                <span className="md:hidden transition-transform group-open:rotate-180">▼</span>
              </summary>
              <ul className="space-y-4 pt-2 md:pt-0">
                <li><Link to="/pharmacyos" className="text-muted-foreground hover:text-primary transition-colors">PharmacyOS</Link></li>
                <li><Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
                <li><Link to="/bi" className="text-muted-foreground hover:text-primary transition-colors">Business Intelligence</Link></li>
                <li><Link to="/multi-store" className="text-muted-foreground hover:text-primary transition-colors">Multi-Store</Link></li>
                <li><Link to="/enterprise" className="text-muted-foreground hover:text-primary transition-colors">Enterprise</Link></li>
              </ul>
            </details>
          </div>

          <div className="space-y-6 md:space-y-0 border-t border-primary/5 pt-6 md:border-none md:pt-0">
            <details className="md:block group" open>
              <summary className="font-bold mb-6 list-none flex justify-between items-center cursor-pointer md:cursor-default pointer-events-auto md:pointer-events-none">
                Company
                <span className="md:hidden transition-transform group-open:rotate-180">▼</span>
              </summary>
              <ul className="space-y-4 pt-2 md:pt-0">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Vision & Mission</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </details>
          </div>

          <div className="space-y-6 md:space-y-0 border-t border-primary/5 pt-6 md:border-none md:pt-0">
            <details className="md:block group" open>
              <summary className="font-bold mb-6 list-none flex justify-between items-center cursor-pointer md:cursor-default pointer-events-auto md:pointer-events-none">
                Resources
                <span className="md:hidden transition-transform group-open:rotate-180">▼</span>
              </summary>
              <ul className="space-y-4 pt-2 md:pt-0">
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Centre</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
                <li><Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
              </ul>
            </details>
          </div>

          <div className="space-y-6 md:space-y-0 border-t border-primary/5 pt-6 md:border-none md:pt-0">
            <details className="md:block group" open>
              <summary className="font-bold mb-6 list-none flex justify-between items-center cursor-pointer md:cursor-default pointer-events-auto md:pointer-events-none">
                Legal
                <span className="md:hidden transition-transform group-open:rotate-180">▼</span>
              </summary>
              <ul className="space-y-4 pt-2 md:pt-0">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link></li>
              </ul>
            </details>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Med4One Health Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-primary">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
