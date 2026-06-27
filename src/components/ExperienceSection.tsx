import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "PHP Developer",
    company: "Flexgrew Technology",
    period: "July 2025 - Present",
    points: [
      "Independently developed production-ready modules for a multi-tenant ERP platform.",
      "Built a configurable Custom Import Module for import data from excel with dynamic field mapping, data transformation, validation rules and automated data processing and reduced manual entries by 90%.",
      "Designed and developed Purchase Lifecycle workflows from procurement to stock batch management and implemented HR management modules.",
      "Designed and developed RESTful APIs and optimized MySQL queries to improve application scalability and performance.",
      "Followed MVC architecture, coding standards, version control practices, and project delivery timelines.",
      "Analyzed requirements, troubleshot issues, and delivered features within project timelines."
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 items-start bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-display font-bold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground font-body">{exp.period}</span>
                </div>
                <p className="text-primary font-body text-sm mt-1 font-semibold">{exp.company}</p>
                <ul className="mt-3 space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
