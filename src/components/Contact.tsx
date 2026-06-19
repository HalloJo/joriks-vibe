import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import BehanceIcon from './icons/BehanceIcon';

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jorikvanruiswijk', Icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/HalloJo', Icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/jorikvanruiswijk', Icon: Instagram },
  { name: 'Behance', href: 'https://behance.net/jorikvanruiswijk', Icon: BehanceIcon },
] as const;

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 18 });

  const highlight = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,120,55,0.55) 0%, rgba(255,107,43,0.2) 38%, transparent 65%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-3xl px-10 py-14 md:px-16 md:py-20
                     bg-[#100600]
                     border border-accent/25"
        >
          {/* Static base gradient — orange warmth in top-left */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-[#1a0800]/80 to-transparent pointer-events-none" />

          {/* Mouse-follow highlight */}
          <motion.div
            style={{ background: highlight }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-xs font-mono text-accent/80 tracking-[0.25em] uppercase mb-10">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-5">
              Let's build something.
            </h2>

            <p className="text-base text-white/50 mb-12 max-w-md leading-relaxed">
              Open for freelance projects, collaborations, and interesting conversations.
            </p>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:jorikvanruiswijk@gmail.com"
                className="group flex items-center gap-3 w-fit"
              >
                <Mail
                  size={20}
                  className="text-accent/70 group-hover:text-accent transition-colors shrink-0"
                />
                <span className="text-lg md:text-xl font-medium text-white/70 group-hover:text-white transition-colors duration-200">
                  jorikvanruiswijk@gmail.com
                </span>
              </a>

              <a
                href="tel:+31631976419"
                className="group flex items-center gap-3 w-fit"
              >
                <Phone
                  size={18}
                  className="text-white/30 group-hover:text-white/60 transition-colors shrink-0"
                />
                <span className="text-base text-white/40 group-hover:text-white/70 transition-colors duration-200 font-mono tracking-wide">
                  06 31 97 64 19
                </span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group font-medium"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    <Icon size={17} />
                  </span>
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
