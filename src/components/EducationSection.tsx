import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor's of Computer Application",
    school: "Saurashtra University, Rajkot",
    year: "2023 - 2026",
    score: "7.77 CGPA",
  },
  {
    degree: "Class XII (Gujarat Board)",
    school: "Jay Vijay School, Rajkot",
    year: "2022 - 2023",
    score: "86.85%",
  },
  {
    degree: "Class X (Gujarat Board)",
    school: "Shradha School, Rajkot",
    year: "2020 - 2021",
    score: "83.00%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-16 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 items-start bg-background rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-display font-bold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground font-body">{edu.year}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm mt-1">{edu.school}</p>
                <span className="inline-block mt-2 text-xs bg-primary/20 text-foreground px-3 py-1 rounded-full font-display font-semibold">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
