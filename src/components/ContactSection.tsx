import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">05 // Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a project idea or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <label className="font-mono text-xs text-primary mb-1.5 block">NAME</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-display text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="font-mono text-xs text-primary mb-1.5 block">EMAIL</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-display text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="font-mono text-xs text-primary mb-1.5 block">MESSAGE</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-display text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <a href="mailto:dhavale.tanaji_2028@woxsen.edu.in"
              className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-glow hover:glow transition-all duration-300 group">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-primary">EMAIL</p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">dhavale.tanaji_2028@woxsen.edu.in</p>
              </div>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-glow hover:glow transition-all duration-300 group">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-primary">GITHUB</p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">github.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-lg border border-border hover:border-glow hover:glow transition-all duration-300 group">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-mono text-xs text-primary">LINKEDIN</p>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">linkedin.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
