import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "PHP / Laravel", level: 85 },
  { name: "Vue.js", level: 70 },
  { name: "MySQL", level: 80 },
  { name: "Git & GitHub", level: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-display font-semibold text-sm">{skill.name}</span>
                <span className="text-muted-foreground text-sm font-body">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
