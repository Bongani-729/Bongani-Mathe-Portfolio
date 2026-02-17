import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: "EMAIL", value: "matheb239@gmail.com", href: "mailto:matheb239@gmail.com" },
    { icon: Phone, label: "PHONE", value: "068 158 1115", href: "tel:0681581115" },
    { icon: MapPin, label: "LOCATION", value: "eMalahleni, Mpumalanga, SA", href: null },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Bongani-729" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bongani-mathe-034759310" },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={0} variants={fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <h2 className="text-minimal text-primary">GET IN TOUCH</h2>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-architectural mb-4">
              Let's build something<br /><span className="gradient-text">great together</span>
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm actively looking for opportunities. Whether it's web, mobile, or backend — I'm ready to contribute and grow.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={index + 1}
                variants={fadeUp}
              >
                {item.href ? (
                  <a href={item.href} className="block p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <p className="text-minimal text-muted-foreground mb-2">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </a>
                ) : (
                  <div className="p-8 rounded-2xl bg-card border border-border text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <p className="text-minimal text-muted-foreground mb-2">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={4} variants={fadeUp} className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 text-sm font-medium hover:text-primary transition-all duration-300 group"
              >
                <social.icon size={16} />
                {social.label}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp} className="mt-24 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">© 2026 Bongani Daniel Mathe. Built with React & TypeScript.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
