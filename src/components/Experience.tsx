import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../lib/constants";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const newLocal =
    "absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-accent/60 via-[#FF6B2B]/20 to-transparent";
  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-12"
        >
          Experience
        </motion.p>

        <div className="relative pl-6 md:pl-8">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            style={{ originY: 0 }}
            className={newLocal}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.14,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Pulsing dot */}
                <div className="absolute -left-6 md:-left-8 top-1.5 -translate-x-1/2">
                  <motion.div
                    animate={
                      isInView
                        ? { scale: [1, 1.45, 1], opacity: [1, 0.55, 1] }
                        : {}
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-accent"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1">
                    <h3 className="text-base font-semibold text-[#f0f0f0]">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-accent/12 border border-accent/30 text-accent tracking-widest uppercase">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-accent/75 font-medium mb-1">
                    {exp.role}
                  </p>

                  {exp.period && (
                    <p className="text-xs text-[#f0f0f0]/40 font-mono mb-3 tracking-wide">
                      {exp.period}
                    </p>
                  )}

                  <p className="text-sm text-[#f0f0f0]/50 leading-[1.75] max-w-xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
