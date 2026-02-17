import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Code2, Server, Smartphone, Wrench } from "lucide-react";

const Services = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, interactive interfaces with React, JavaScript, HTML & CSS.",
      techs: ["React", "JavaScript", "HTML", "CSS"],
      color: "primary" as const,
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Server-side logic, APIs, and database design with Java, PHP & SQL.",
      techs: ["Java", "PHP", "SQL"],
      color: "accent" as const,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native Android applications with Kotlin, focused on clean architecture.",
      techs: ["Kotlin", "Android"],
      color: "primary" as const,
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      description: "Version control, collaboration, and modern development workflows.",
      techs: ["Git", "GitHub", "Agile"],
      color: "accent" as const,
    }
  ];

  return (
    <section id="skills" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={0} variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <h2 className="text-minimal text-primary">SKILLS & EXPERTISE</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-architectural">
              Technologies I<br /><span className="gradient-text">work with</span>
            </h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={index + 1}
                variants={fadeUp}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  skill.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <skill.icon size={22} className={skill.color === "primary" ? "text-primary" : "text-accent"} />
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-mono font-medium tracking-wider uppercase rounded-full bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
