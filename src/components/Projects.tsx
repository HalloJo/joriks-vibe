import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-12"
        >
          Selected Work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{
                opacity: { duration: 0.65, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] },
                y: { duration: 0.65, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 0.25 },
              }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl
                         bg-white/[0.025] backdrop-blur-sm
                         border border-white/[0.07]
                         hover:border-[#FF6B2B]/40
                         hover:bg-white/[0.04]
                         hover:shadow-[0_0_40px_rgba(255,107,43,0.08),0_8px_32px_rgba(0,0,0,0.4)]
                         transition-colors transition-shadow duration-300"
            >
              <ExternalLink
                size={14}
                className="absolute top-5 right-5 text-[#f0f0f0]/15 group-hover:text-[#FF6B2B]/60 transition-colors duration-200"
              />

              <h3 className="text-base font-semibold text-[#f0f0f0]/90 group-hover:text-[#FF6B2B] transition-colors duration-200 pr-6">
                {project.name}
              </h3>

              <p className="text-sm text-[#f0f0f0]/45 leading-[1.7] flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-[#f0f0f0]/35 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
