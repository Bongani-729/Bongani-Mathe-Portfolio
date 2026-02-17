import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "Newsletter Sign-Up App",
      stack: ["React", "JavaScript", "CSS", "HTML"],
      description: "A responsive newsletter sign-up form with success message feedback, built with modern frontend patterns and clean component architecture.",
      type: "FRONTEND",
      link: "https://github.com/Bongani-729/newsletter-sign-up-with-success-message-main",
    },
    {
      image: project2,
      title: "MyTUT Event Management",
      stack: ["Kotlin", "Android", "HTML", "CSS"],
      description: "Event management system for Tshwane University of Technology, featuring event listings, scheduling, and user-friendly mobile interface.",
      type: "MOBILE",
      link: "https://github.com/Bongani-729/MyTUT-Event-Management-System",
    },
    {
      image: project3,
      title: "Tickets Platform",
      stack: ["PHP", "JavaScript", "SQL", "CSS"],
      description: "Full-stack ticketing platform with admin panel, ticket management, database integration, and server-side authentication.",
      type: "FULL-STACK",
      link: "https://github.com/Bongani-729/tickects_platform_",
    }
  ];

  return (
    <section id="projects" className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={0} variants={fadeUp} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <h2 className="text-minimal text-primary">PORTFOLIO</h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h3 className="text-3xl md:text-5xl font-bold text-architectural">
                Featured<br /><span className="gradient-text">projects</span>
              </h3>
              <a href="https://github.com/Bongani-729" target="_blank" rel="noopener noreferrer" className="text-minimal text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                VIEW ALL ON GITHUB <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={index + 1}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl block"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full bg-primary/90 text-primary-foreground">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[10px] font-mono font-medium tracking-wider uppercase rounded-md bg-muted text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
