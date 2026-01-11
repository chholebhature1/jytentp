import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { productCategories } from "@/data/products";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const DigitalDisplaysSection = () => {
  const digitalCategory = productCategories.find((cat) => cat.id === "digital");
  const officeCategory = productCategories.find((cat) => cat.id === "office");
  const miscCategory = productCategories.find((cat) => cat.id === "misc");

  return (
    <section id="products" className="section-light py-24">
      <div className="container-xl">
        <SectionHeader
          label="Complete Solutions"
          title="Digital Displays &"
          highlight="Office Essentials"
          description="From LED signage to corporate stationery, we've got everything to make your brand shine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {digitalCategory && (
            <ServiceCard
              icon={digitalCategory.icon}
              title={digitalCategory.title}
              description={digitalCategory.description}
              items={digitalCategory.items}
              index={0}
            />
          )}
          {officeCategory && (
            <ServiceCard
              icon={officeCategory.icon}
              title={officeCategory.title}
              description={officeCategory.description}
              items={officeCategory.items}
              index={1}
            />
          )}
          {miscCategory && (
            <ServiceCard
              icon={miscCategory.icon}
              title={miscCategory.title}
              description={miscCategory.description}
              items={miscCategory.items}
              index={2}
            />
          )}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-secondary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-3">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground max-w-lg">
              Can't find what you're looking for? We specialize in custom print
              and branding solutions tailored to your exact requirements.
            </p>
          </div>
          <Button variant="hero" size="xl" className="flex-shrink-0">
            Contact Us
            <ArrowRight size={20} />
          </Button>

          {/* Background accent */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
