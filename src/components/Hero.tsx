import { motion } from "framer-motion";
import profileImg from "@/assets/bongani-profile.jpg";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(225,25%,4%)]">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[hsl(210,100%,50%/0.08)] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[hsl(170,75%,40%/0.06)] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(210,100%,60%/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(210,100%,60%/0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[hsl(210,100%,55%)]" />
              <p className="text-minimal text-[hsl(210,100%,65%)]">FULL-STACK DEVELOPER</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-architectural mb-6">
              Bongani
              <br />
              <span className="gradient-text">Daniel</span> Mathe
            </h1>
            
            <p className="text-lg text-white/50 max-w-xl mb-4 leading-relaxed">
              Computer Science graduate from TUT eMalahleni. Building clean, scalable 
              applications with modern technologies. Currently completing WIL at ICEP.
            </p>

            {/* Terminal-style status */}
            <div className="font-mono text-sm text-white/30 mb-10 flex items-center gap-2">
              <span className="text-[hsl(170,75%,50%)]">→</span>
              <span>status:</span>
              <span className="text-[hsl(170,75%,50%)]">available for opportunities</span>
              <span className="w-2 h-4 bg-[hsl(210,100%,55%)] cursor-blink inline-block" />
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/#contact" className="px-8 py-3.5 bg-primary text-primary-foreground text-minimal font-bold rounded-md hover:brightness-110 transition-all glow-primary">
                HIRE ME
              </a>
              <a href="/#projects" className="px-8 py-3.5 border border-white/15 text-white text-minimal rounded-md hover:bg-white/5 hover:border-white/25 transition-all">
                VIEW PROJECTS
              </a>
              <a href="/Bongani_Mathe_CV.pdf" download className="px-8 py-3.5 border border-[hsl(170,75%,45%/0.3)] text-[hsl(170,75%,50%)] text-minimal rounded-md hover:bg-[hsl(170,75%,45%/0.08)] hover:border-[hsl(170,75%,45%/0.5)] transition-all flex items-center gap-2">
                <Download size={14} />
                DOWNLOAD CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Bongani-729" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[hsl(210,100%,55%)] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bongani-mathe-034759310" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[hsl(210,100%,55%)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:matheb239@gmail.com" className="text-white/30 hover:text-[hsl(210,100%,55%)] transition-colors">
                <Mail size={20} />
              </a>
              <div className="h-px flex-1 bg-white/10 max-w-[100px]" />
              <span className="text-minimal text-white/20">SA · EMALAHLENI</span>
            </div>
          </motion.div>
          
          {/* Photo — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-4 bg-[hsl(210,100%,50%/0.1)] rounded-2xl blur-2xl" />
              
              <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] overflow-hidden rounded-2xl border border-white/10">
                <img 
                  src={profileImg} 
                  alt="Bongani Daniel Mathe"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,25%,4%)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 bottom-20 bg-card/90 backdrop-blur-sm border border-border px-4 py-2.5 rounded-lg shadow-lg">
                <p className="text-minimal text-primary">FULL STACK DEVELOPER</p>
              </div>
              <div className="absolute -right-4 top-16 bg-card/90 backdrop-blur-sm border border-border px-4 py-2.5 rounded-lg shadow-lg">
                <p className="text-minimal text-accent">WIL @ ICEP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-minimal text-white/20">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
