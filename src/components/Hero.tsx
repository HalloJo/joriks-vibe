import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, ArrowDown } from "lucide-react";
import BehanceIcon from "./icons/BehanceIcon";

const VIBE_CODED_AT = new Date("2026-06-19T10:05:06+02:00");

function formatElapsed(ms: number): string {
  if (ms < 0) return "just now";
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 35) {
    const weeks = Math.floor(days / 7);
    return weeks < 2
      ? `${days} day${days !== 1 ? "s" : ""} ago`
      : `${weeks} weeks ago`;
  }
  const months = Math.floor(days / 30.44);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  const years = Math.floor(days / 365.25);
  const remainingMonths = Math.floor((days % 365.25) / 30.44);
  if (remainingMonths === 0)
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  return `${years}yr ${remainingMonths}mo ago`;
}

function useVibeAge() {
  const [label, setLabel] = useState(() =>
    formatElapsed(Date.now() - VIBE_CODED_AT.getTime())
  );
  useEffect(() => {
    const id = setInterval(
      () => setLabel(formatElapsed(Date.now() - VIBE_CODED_AT.getTime())),
      1000
    );
    return () => clearInterval(id);
  }, []);
  return label;
}

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jorikvanruiswijk",
    Icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/HalloJo", Icon: Github },
  {
    name: "Instagram",
    href: "https://instagram.com/jorikvanruiswijk",
    Icon: Instagram,
  },
  {
    name: "Behance",
    href: "https://behance.net/jorikvanruiswijk",
    Icon: BehanceIcon,
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const photoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
  },
};

export default function Hero() {
  const vibeAge = useVibeAge();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center py-14">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-mono text-accent tracking-[0.25em] uppercase mb-5 flex items-center gap-3"
          >
            Portfolio
            <span className="text-[#f0f0f0]/50 normal-case tracking-normal">
              ·
            </span>
            <span className="text-[#f0f0f0]/50 normal-case tracking-normal">
              Vibe-coded {vibeAge}
            </span>
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-4 text-[#f0f0f0]"
          >
            Jorik van Ruiswijk
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#f0f0f0]/40 font-light tracking-widest mb-7 font-mono"
          >
            CTO · Designer · Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-[#f0f0f0]/55 leading-[1.75] max-w-md mb-10"
          >
            Self-taught front-end dev. Graduated designer & illustrator.
            Building things that look good and work well.
          </motion.p>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#f0f0f0]/40 hover:text-accent transition-all duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  <Icon size={17} />
                </span>
                <span className="font-medium">{name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Retro sticker card photo */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.025 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-64 sm:w-64 md:w-72 rounded-2xl overflow-hidden
                         shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                         border-2 border-white/10
                         hover:border-accent/50
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(255,107,43,0.25)]
                         transition-[border-color,box-shadow] duration-300 cursor-pointer"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-linear-to-b from-[#111827] to-[#0d1117]" />

              {/* Top strip — retro sticker header */}
              <div className="relative z-10 bg-accent px-4 py-1.75 text-center">
                <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-black uppercase">
                  Just started vibe-coding
                </span>
              </div>

              {/* Photo area */}
              <div className="relative z-10">
                <div className="aspect-3/4 bg-[#111827] overflow-hidden">
                  <img
                    src="/jorik.png"
                    alt="Jorik van Ruiswijk"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bottom strip — name plate */}
              <div className="relative z-10 px-4 py-3 text-center border-t border-white/8">
                <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase">
                  Millenial
                </p>
                <p className="text-[9px] text-white/50 font-mono mt-0.5 tracking-widest">
                  Mixing retro with modern
                </p>
              </div>
            </motion.div>

            {/* Ambient glow behind card */}
            <div className="absolute inset-0 -z-10 blur-3xl scale-90 rounded-full bg-accent/8" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-[#f0f0f0]/50 tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
