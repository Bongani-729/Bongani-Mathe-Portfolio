import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import profileImg from "@/assets/bongani-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={profileImg} alt="Bongani Daniel Mathe" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 border-b-2 border-r-2 border-primary rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-2xl" />
              <div className="absolute -right-4 lg:-right-8 bottom-12 bg-card border border-border p-5 rounded-xl shadow-lg max-w-[180px]">
                <p className="text-3xl font-bold gradient-text">CS</p>
                <p className="text-xs text-muted-foreground mt-1">Diploma Graduate</p>
              </div>
            </motion.div>

            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={1} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-primary" />
                  <h2 className="text-minimal text-primary">ABOUT ME</h2>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-architectural mb-8">
                  Passionate about<br /><span className="gradient-text">building software</span>
                </h3>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={2} variants={fadeUp} className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  I'm Bongani Daniel Mathe, a Computer Science diploma graduate from Tshwane University of Technology (TUT), eMalahleni campus. I love turning ideas into clean, functional applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently completing my Work Integrated Learning (WIL) at ICEP in eMalahleni, gaining hands-on industry experience building real-world solutions across web, mobile, and backend technologies.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={3} variants={fadeUp} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold font-mono text-sm">01</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Education</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Diploma in Computer Science — TUT eMalahleni</p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <span className="text-accent font-bold font-mono text-sm">02</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Experience</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Software Developer at Inesthood IT</p>
                </div>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                    <span className="text-secondary font-bold font-mono text-sm">03</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Currently</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">WIL Intern at ICEP eMalahleni</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
