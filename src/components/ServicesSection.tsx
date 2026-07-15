import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { productCategories } from "@/data/products";

export const ServicesSection = () => {
  // First 6 categories for this section
  const mainServices = productCategories.slice(0, 6);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-xl">
        <SectionHeader
          label="What Can We Do"
          title="Services we can"
          highlight="HELP you with"
          description="From concept development to final execution, Jyoti Enterprises provides comprehensive advertising solutions under one roof, ensuring seamless project delivery and maximum client satisfaction."
          isDark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
