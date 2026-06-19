import { motion } from "framer-motion";

const paragraphs = [
  "35 years old. Based in the Netherlands. Father of 3. I'm a self-taught front-end developer with a background in graphic design and illustration.",
  "Currently CTO at Marketing for a Day, where I lead the technical vision and build things that are both beautiful and functional.",
  "I care deeply about details, animations, and experiences that are calm or fancy.",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-10"
        >
          About
        </motion.p>

        <div className="max-w-2xl space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                delay: i * 0.14,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-lg md:text-xl text-[#f0f0f0]/60 leading-[1.8]"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
