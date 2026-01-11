import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  isDark?: boolean;
  centered?: boolean;
}

export const SectionHeader = ({
  label,
  title,
  highlight,
  description,
  className,
  isDark = true,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-muted-foreground text-sm font-medium mb-4"
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary-foreground"
      >
        {title}{" "}
        {highlight && (
          <span className="text-primary">{highlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
