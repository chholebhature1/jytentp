import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { productCategories } from "@/data/products";
import { Flag, Vote, Users, Megaphone } from "lucide-react";

export const LargeFormatSection = () => {
  const largeFormatCategory = productCategories.find(
    (cat) => cat.id === "largeformat"
  );
  const displaysCategory = productCategories.find(
    (cat) => cat.id === "displays"
  );

  const stats = [
    { icon: Flag, value: "10,000+", label: "Signages Installed" },
    { icon: Vote, value: "50+", label: "Political Campaigns" },
    { icon: Users, value: "100+", label: "Events Covered" },
    { icon: Megaphone, value: "500+", label: "Brands Promoted" },
  ];

  return (
    <section className="section-dark py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-xl relative z-10">
        <SectionHeader
          label="Large Scale Solutions"
          title="Large Format &"
          highlight="Political Branding"
          description="Dominate the landscape with impactful outdoor advertising, event branding, and campaign materials that command attention."
          isDark
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-muted/5 border border-muted/10 hover:border-primary/30 transition-colors duration-300"
            >
              <stat.icon className="mx-auto mb-4 text-primary" size={32} />
              <div className="font-display text-3xl text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {largeFormatCategory && (
            <ServiceCard
              icon={largeFormatCategory.icon}
              title={largeFormatCategory.title}
              description={largeFormatCategory.description}
              items={largeFormatCategory.items}
              index={0}
            />
          )}
          {displaysCategory && (
            <ServiceCard
              icon={displaysCategory.icon}
              title={displaysCategory.title}
              description={displaysCategory.description}
              items={displaysCategory.items}
              index={1}
            />
          )}
        </div>
      </div>
    </section>
  );
};
