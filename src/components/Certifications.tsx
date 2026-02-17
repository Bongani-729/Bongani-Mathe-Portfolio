import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import certReact from "@/assets/cert-react.png";
import certSql from "@/assets/cert-sql.png";
import certRelationalDb from "@/assets/cert-relational-db.png";
import certResponsiveWeb from "@/assets/cert-responsive-web.png";

const certs = [
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Feb 2026",
    image: certReact,
    link: "https://www.hackerrank.com/certificates",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Feb 2026",
    image: certSql,
    link: "https://www.hackerrank.com/certificates",
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp",
    date: "Feb 2026",
    hours: "300 hours",
    image: certRelationalDb,
    link: "https://freecodecamp.org/certification/zero729/relational-databases-v9",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Feb 2026",
    hours: "300 hours",
    image: certResponsiveWeb,
    link: "https://freecodecamp.org/certification/zero729/responsive-web-design-v9",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <p className="text-minimal text-primary">CREDENTIALS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-architectural">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Certificate image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info bar */}
              <div className="p-5 flex items-center justify-between border-t border-border">
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} · {cert.date}
                      {cert.hours && <span className="text-primary"> · {cert.hours}</span>}
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
