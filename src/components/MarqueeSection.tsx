import { motion } from "framer-motion";

const marqueeItems = [
  "Brand Strategy_",
  "Graphic Design_",
  "Large Format Printing_",
  "Digital Displays_",
  "Promotional Materials_",
  "Corporate Branding_",
  "Political Campaigns_",
  "School Branding_",
];

export const MarqueeSection = () => {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -50 * marqueeItems.length * 4] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {/* Duplicate items multiple times for seamless loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${setIndex}-${index}`}
                  className="font-display text-2xl sm:text-3xl text-primary-foreground/90 uppercase tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
