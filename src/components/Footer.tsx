import { Link } from "@tanstack/react-router";
import med4oneLogo from "@/assets/med4one-logo-premium.png.asset.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="bg-slate-950 p-1.5 rounded-lg shadow-xl border border-slate-800 inline-block transition-all duration-300 hover:shadow-2xl">
                <img
                  src={med4oneLogo.url}
                  alt="Med4One Logo"
                  className="h-10 w-auto md:h-12 object-contain brightness-110"
                />
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Med4One Health Services Pvt Ltd. Intelligent technology for the future of healthcare. Building the operating system for the modern pharmacy.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Med4One Health Services Pvt Ltd</p>
              <p className="text-sm text-muted-foreground">
                Aspire Coworks, No. 472/7 Balaji Arcade, 2nd & 3rd Floor, A.V.S. Compound, 20th L Cross Road, Koramangala, Bangalore – 560095, India.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/pharmacyos" className="text-muted-foreground hover:text-primary transition-colors">PharmacyOS</Link></li>
              <li><Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link to="/bi" className="text-muted-foreground hover:text-primary transition-colors">Business Intelligence</Link></li>
              <li><Link to="/multi-store" className="text-muted-foreground hover:text-primary transition-colors">Multi-Store</Link></li>
              <li><Link to="/enterprise" className="text-muted-foreground hover:text-primary transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Vision & Mission</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Centre</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Med4One Health Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-primary">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
