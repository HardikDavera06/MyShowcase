import { motion } from "framer-motion";
import { Code, Layout, Database, Globe, Server, GitBranch } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "HTML, CSS, Bootstrap, JavaScript — responsive and modern UIs." },
  { icon: Server, title: "Backend Development", desc: "PHP, Laravel, CodeIgniter — robust server-side applications." },
  { icon: Code, title: "Vue.js Apps", desc: "Interactive single-page applications with Vue.js framework." },
  { icon: Database, title: "Database Design", desc: "MySQL database architecture, optimization and management." },
  { icon: Globe, title: "Full-Stack Web Apps", desc: "End-to-end web applications from concept to deployment." },
  { icon: GitBranch, title: "Version Control", desc: "Git & GitHub workflows for collaborative development." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-4"
        >
          Digital Services I am Providing
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 font-body">Building modern web solutions with cutting-edge technologies</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="service-card group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
