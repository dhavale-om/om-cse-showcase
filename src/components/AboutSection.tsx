import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">01 // About</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-10">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Om Dhavale</span>, a passionate B.Tech Computer Science Engineering student specializing in 
              <span className="text-primary"> Artificial Intelligence & Machine Learning</span> at Woxsen University.
            </p>
            <p>
              My passion lies at the intersection of software engineering and intelligent systems. I love building practical solutions that leverage modern technologies — from full-stack web applications to IoT-integrated systems.
            </p>
            <p>
              I'm driven by curiosity, constantly exploring new frameworks and algorithms. My goal is to contribute to innovative tech solutions that make a real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="font-mono text-primary text-xs mb-2">EDUCATION</p>
              <p className="font-display font-semibold">B.Tech CSE (AI & ML)</p>
              <p className="text-muted-foreground text-sm">Woxsen University • 2024 – 2028</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="font-mono text-primary text-xs mb-2">INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Web Development', 'IoT', 'Data Science', 'Cloud Computing', 'System Design'].map((interest) => (
                  <span key={interest} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="font-mono text-primary text-xs mb-2">CAREER OBJECTIVE</p>
              <p className="text-muted-foreground text-sm">To leverage AI/ML expertise in building scalable, intelligent applications that solve complex real-world problems.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
