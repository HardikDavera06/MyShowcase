import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import profileImg from "@/assets/profile-avatar.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body text-lg mb-4"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Hardik
            <br />
            <span className="text-foreground/80">Davera</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-md font-body leading-relaxed"
          >
            At the Heart of Development is an Opportunity to Solve Problems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-foreground text-foreground px-6 py-3 rounded-full font-display font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center lg:items-end gap-6"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card border-2 border-border overflow-hidden"
            >
              <img src={profileImg} alt="Hardik Davera" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
