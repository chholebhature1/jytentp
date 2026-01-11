import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Industry-leading printing standards with vivid colors and precise finishes",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality, even for bulk orders",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced designers and technicians dedicated to your success",
  },
];

const checkPoints = [
  "State-of-the-art printing technology",
  "Eco-friendly printing options",
  "Custom design assistance",
  "Bulk order discounts",
  "Pan-India delivery",
  "24/7 customer support",
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-dark py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4"
            >
              ( About MV Graphics )
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
            >
              Why Choose{" "}
              <span className="text-gradient-primary">MV Graphics?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              With over a decade of experience in printing and branding, we've
              helped hundreds of businesses, schools, and political campaigns
              make their mark. Our commitment to quality, speed, and customer
              satisfaction sets us apart.
            </motion.p>

            {/* Checkpoints */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {checkPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-secondary-foreground">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Feature cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group p-6 rounded-2xl bg-muted/5 border border-muted/10 hover:border-primary/30 hover:bg-muted/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
