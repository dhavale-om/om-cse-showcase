import { motion } from "framer-motion";

const experiences = [
  {
    role: "Aspiring AI/ML Engineer",
    company: "Academic Projects & Self-Learning",
    period: "2024 – Present",
    responsibilities: [
      "Developing full-stack web applications and IoT systems as part of academic coursework",
      "Exploring machine learning algorithms and data preprocessing techniques",
      "Collaborating with peers on group projects involving real-world problem solving",
      "Participating in hackathons and coding competitions to sharpen problem-solving skills",
    ],
    learnings: "Gained hands-on experience with agile development practices, version control with Git, and deploying applications to cloud platforms.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">04 // Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Journey So Far</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <span className="font-mono text-primary text-xs">{exp.period}</span>
              <h3 className="text-xl font-bold font-display mt-1">{exp.role}</h3>
              <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span> {r}
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="font-mono text-primary text-xs mb-1">KEY LEARNINGS</p>
                <p className="text-sm text-muted-foreground">{exp.learnings}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
