import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

const heroVideos = ["/videos/hero-background-2.mp4"];

const typewriterTexts = ["Brands", "Vision", "Success", "Growth"];

export const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Auto-rotate videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Rotate typewriter text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[11] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]"
        />
      </div>

      <div className="container-xl relative z-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest">
                Premium Print & Branding Solutions
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[0.95] mb-4"
            >
              We are Helping to Build a
            </motion.h1>

            {/* Animated text */}
            <div className="h-20 sm:h-24 lg:h-28 xl:h-32 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary"
                >
                  {typewriterTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-md mb-10"
            >
              Build Your Brand's Journey with MV Graphics. From concept to print,
              we deliver excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="xl"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 group"
              >
                Discover More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                size="xl"
                onClick={() => setIsContactOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Contact Form Dialog */}
            <ContactFormDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>

          {/* Right side - Award badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]" />
              <div className="relative bg-background/50 backdrop-blur-sm border border-border/30 rounded-3xl p-8 max-w-sm">
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  We Have Achieved Award of{" "}
                  <span className="text-primary font-semibold">
                    Best Creative & Innovative Branding
                  </span>{" "}
                  Agency Of The Year
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
