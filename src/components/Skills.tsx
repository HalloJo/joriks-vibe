import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { primarySkills, secondarySkills } from "../lib/constants";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-10"
        >
          Skills
        </motion.p>

        <div className="space-y-10">
          {/* Primary skills */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono text-[#f0f0f0]/50 tracking-widest uppercase mb-4"
            >
              Proficient in
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {primarySkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + i * 0.045,
                    ease: "easeOut",
                  }}
                  className="px-3.5 py-1.5 text-sm font-medium
                             border border-accent/35 text-[#f0f0f0]/75 rounded-full
                             hover:border-accent hover:text-accent
                             hover:shadow-[0_0_12px_rgba(255,107,43,0.2)]
                             transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Secondary skills */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-xs font-mono text-[#f0f0f0]/50 tracking-widest uppercase mb-4"
            >
              Also comfortable with
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {secondarySkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className="px-3.5 py-1.5 text-sm font-medium
                             border border-white/12 text-[#f0f0f0]/50 rounded-full
                             hover:border-white/40 hover:text-[#f0f0f0]/55
                             transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
