import { motion } from "framer-motion";
import { primarySkills, secondarySkills } from "../lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
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
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[#f0f0f0]/50 tracking-widest uppercase mb-4"
            >
              Proficient in
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {primarySkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-3.5 py-1.5 text-sm font-medium
                             border border-accent/35 text-[#f0f0f0]/75 rounded-full
                             hover:border-accent hover:text-accent
                             hover:shadow-[0_0_12px_rgba(255,107,43,0.2)]
                             transition-[border-color,color,box-shadow] duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Secondary skills */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[#f0f0f0]/50 tracking-widest uppercase mb-4"
            >
              Also comfortable with
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {secondarySkills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-3.5 py-1.5 text-sm font-medium
                             border border-white/12 text-[#f0f0f0]/50 rounded-full
                             hover:border-white/40 hover:text-[#f0f0f0]/55
                             transition-[border-color,color] duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
