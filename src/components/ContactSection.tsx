import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-4"
        >
          Let's Work Together
        </motion.h2>
        <p className="text-muted-foreground font-body mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="mailto:daverahardik43@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:shadow-lg transition-all"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-body text-sm">daverahardik5@gmail.com</span>
          </a>
          <a
            href="tel:+919106770262"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:shadow-lg transition-all"
          >
            <Phone className="w-5 h-5 text-secondary" />
            <span className="font-body text-sm">+91 91067 70262</span>
          </a>
          <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <MapPin className="w-5 h-5 text-foreground/60" />
            <span className="font-body text-sm">Rajkot, Gujarat, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
