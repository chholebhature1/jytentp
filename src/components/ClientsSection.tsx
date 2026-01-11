import { motion } from "framer-motion";
import { Building2, GraduationCap, Vote, Utensils, Calendar, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: GraduationCap,
    name: "Schools & Colleges",
    description: "Complete academic branding",
  },
  {
    icon: Building2,
    name: "Corporates",
    description: "Professional business materials",
  },
  {
    icon: Vote,
    name: "Political Parties",
    description: "Campaign materials at scale",
  },
  {
    icon: Utensils,
    name: "Restaurants & Cafés",
    description: "Menu & branding solutions",
  },
  {
    icon: Calendar,
    name: "Event Managers",
    description: "Exhibition & event graphics",
  },
  {
    icon: Briefcase,
    name: "Small Businesses",
    description: "Affordable branding packages",
  },
];

export const ClientsSection = () => {
  return (
    <section className="section-light py-24 overflow-hidden">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            ( Who We Serve )
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            Trusted By <span className="text-gradient-primary">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Client type cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <client.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-1">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
