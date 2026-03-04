import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Online Examination System",
    overview: "A comprehensive web-based platform for conducting online examinations with automated grading, timer functionality, and result analytics.",
    technologies: ["Java", "JavaScript", "HTML/CSS", "MySQL", "JDBC"],
    features: [
      "User authentication for students and administrators",
      "Timed examinations with auto-submission",
      "Randomized question paper generation",
      "Real-time score calculation and result display",
      "Admin dashboard for managing questions and viewing analytics",
    ],
  },
  {
    title: "Warehouse Management System",
    overview: "An inventory and warehouse management application designed to streamline stock tracking, order processing, and supply chain operations.",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
    features: [
      "Real-time inventory tracking and stock alerts",
      "Order management with status tracking",
      "Barcode/SKU-based product identification",
      "Automated reports for stock levels and sales",
      "Role-based access control for warehouse staff",
    ],
  },
  {
    title: "IoT-Based Smart Agriculture System",
    overview: "An Internet of Things solution for precision agriculture, enabling remote monitoring of soil conditions, weather data, and automated irrigation.",
    technologies: ["Arduino", "C++", "Python", "Firebase", "Sensors"],
    features: [
      "Real-time soil moisture and temperature monitoring",
      "Automated irrigation based on sensor thresholds",
      "Cloud-based data logging and visualization",
      "Mobile notifications for critical conditions",
      "Historical data analysis for crop optimization",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">03 // Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Featured Work</h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 rounded-xl border border-border bg-card hover:border-glow transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-primary text-xs">PROJECT {String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-bold font-display mt-1">{project.title}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.overview}</p>

              <div className="mb-6">
                <p className="font-mono text-xs text-primary mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-primary mb-2">KEY FEATURES</p>
                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span> {feature}
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

export default ProjectsSection;
