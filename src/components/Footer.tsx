import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import visualMark from "@/assets/je-visualmark.jpg";

const footerLinks = {
  services: [
    "Corporate Branding",
    "Flex & Vinyl Printing",
    "Signage Solutions",
    "Event Branding",
    "Digital Marketing",
  ],
  products: [
    "ACP Sign Boards",
    "Glow Sign Boards",
    "Roll-Up Standees",
    "Brochures & Catalogues",
    "LED Signage",
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#products" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="container-xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center"
        >
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              From concept to execution, we bring your brand to life with
              impactful advertising and stunning branding solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get Free Quote
              </Button>
              <Button variant="secondary" size="xl">
                Call Us Now
              </Button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border/10">
        <div className="container-xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={visualMark}
                  alt="Jyoti Enterprises visual mark"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="w-16 h-16 rounded-2xl object-contain bg-background/90 p-2 ring-1 ring-border/20 shadow-sm"
                />
                <h3 className="font-display text-2xl text-primary-foreground tracking-wide">
                  JYOTI ENTERPRISES
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Your trusted partner for advertising, branding, printing, and
                promotional solutions. Serving corporates, institutions, and
                businesses across Delhi NCR & Pan India.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-xl text-primary-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-display text-xl text-primary-foreground mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-xl text-primary-foreground mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Sector-49, Noida, Uttar Pradesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a
                    href="tel:+919953099845"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 99530 99845
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@jyotienterpriseindia.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@jyotienterpriseindia.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10">
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Jyoti Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
