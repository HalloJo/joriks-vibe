import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import BehanceIcon from './icons/BehanceIcon';

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jorikvanruiswijk', Icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/jorikvanruiswijk', Icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/jorikvanruiswijk', Icon: Instagram },
  { name: 'Behance', href: 'https://behance.net/jorikvanruiswijk', Icon: BehanceIcon },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-10"
        >
          Contact
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#f0f0f0] mb-5">
            Let's build something.
          </h2>

          <p className="text-base text-[#f0f0f0]/45 mb-12 max-w-md leading-relaxed">
            Open for freelance projects, collaborations, and interesting conversations.
          </p>

          <div className="space-y-4 mb-12">
            <a
              href="mailto:jorikvanruiswijk@gmail.com"
              className="group flex items-center gap-3 w-fit"
            >
              <Mail
                size={20}
                className="text-accent/50 group-hover:text-accent transition-colors shrink-0"
              />
              <span className="text-lg md:text-xl font-medium text-[#f0f0f0]/65 group-hover:text-accent transition-colors duration-200">
                jorikvanruiswijk@gmail.com
              </span>
            </a>

            <a
              href="tel:+31631976419"
              className="group flex items-center gap-3 w-fit"
            >
              <Phone
                size={18}
                className="text-[#f0f0f0]/25 group-hover:text-[#f0f0f0]/50 transition-colors shrink-0"
              />
              <span className="text-base text-[#f0f0f0]/35 group-hover:text-[#f0f0f0]/60 transition-colors duration-200 font-mono tracking-wide">
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
                className="flex items-center gap-2 text-sm text-[#f0f0f0]/35 hover:text-accent transition-all duration-200 group font-medium"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  <Icon size={17} />
                </span>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
