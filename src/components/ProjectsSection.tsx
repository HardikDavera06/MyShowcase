import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TheEmployee",
    desc: "Full-stack employee management system with CRUD operations, authentication, and role-based access control.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    color: "bg-secondary",
  },
  {
    title: "Simon Says Game",
    desc: "Interactive sequence tracking memory game built to practice and demonstrate JavaScript concepts.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "bg-primary",
  },
  {
    title: "E-Commerce Store",
    desc: "Small e-commerce application with product catalog, cart handling, and Stripe payment integration for seamless checkout.",
    tech: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
    color: "bg-secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 lg:px-24 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`h-48 ${project.color} flex items-center justify-center`}>
                <span className="text-3xl font-display font-bold text-primary-foreground opacity-30 group-hover:opacity-60 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-xl">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground font-body text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-body bg-muted px-3 py-1 rounded-full text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
