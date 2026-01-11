import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix, label, delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="text-center"
    >
      <div
        ref={ref}
        className="font-display text-6xl sm:text-7xl lg:text-8xl text-primary mb-2"
      >
        0{suffix}
      </div>
      <p className="text-muted-foreground text-lg uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};

const stats = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "K", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Awards Won" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border/20">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
