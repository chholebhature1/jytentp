import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  index?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  items,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Card className="h-full relative bg-card border-border/30 hover:border-primary/50 transition-all duration-500 overflow-hidden">
        {/* Top accent line that expands on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="pb-4 relative z-10">
          {/* Icon with background */}
          <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="text-primary" size={32} />
          </div>

          <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            {description}
          </p>
        </CardHeader>

        <CardContent className="relative z-10">
          <ul className="space-y-2.5 mb-6">
            {items.slice(0, 4).map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-card-foreground/80 transition-colors duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                {item}
              </li>
            ))}
          </ul>

          {/* Read More link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
          >
            <span className="relative">
              Read More
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
            </span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};
