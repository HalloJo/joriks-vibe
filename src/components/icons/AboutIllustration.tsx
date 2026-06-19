import { motion } from "framer-motion";

const A = "rgba(255,107,43";

interface P {
  id: number;
  x: number; y: number; size: number;
  shape: "circle" | "square";
  variant: "solid" | "bright" | "ring" | "ghost";
  rotate?: number;
  duration: number;
  delay?: number;
  repeatDelay?: number;
  breathing?: boolean;
}

const particles: P[] = [
  // ── breathing center ──
  { id: 1, x: 50, y: 50, size: 110, shape: "circle", variant: "ring",   rotate: 0,  duration: 4.0, breathing: true },
  { id: 2, x: 50, y: 50, size: 42,  shape: "circle", variant: "bright", rotate: 0,  duration: 3.2, breathing: true },
  // ── inner orbit ──
  { id: 3,  x: 50, y: 14, size: 26, shape: "circle", variant: "bright", rotate: 0,  duration: 2.8, delay: 0.4, repeatDelay: 1.2 },
  { id: 4,  x: 81, y: 35, size: 20, shape: "square", variant: "ring",   rotate: 20, duration: 3.0, delay: 1.2, repeatDelay: 0.9 },
  { id: 5,  x: 74, y: 70, size: 32, shape: "circle", variant: "ghost",  rotate: 0,  duration: 3.6, delay: 0.8, repeatDelay: 1.4 },
  { id: 6,  x: 44, y: 84, size: 18, shape: "square", variant: "bright", rotate: 35, duration: 2.4, delay: 1.8, repeatDelay: 1.0 },
  { id: 7,  x: 14, y: 55, size: 24, shape: "circle", variant: "solid",  rotate: 0,  duration: 2.9, delay: 0.2, repeatDelay: 1.5 },
  { id: 8,  x: 22, y: 24, size: 18, shape: "square", variant: "ring",   rotate: 15, duration: 2.6, delay: 1.6, repeatDelay: 0.8 },
  { id: 9,  x: 78, y: 18, size: 14, shape: "circle", variant: "ghost",  rotate: 0,  duration: 2.2, delay: 2.2, repeatDelay: 1.8 },
  { id: 10, x: 20, y: 76, size: 20, shape: "square", variant: "solid",  rotate: 28, duration: 3.2, delay: 1.0, repeatDelay: 1.1 },
  // ── outer satellites ──
  { id: 11, x: 64, y:  6, size: 10, shape: "circle", variant: "bright", rotate: 0,  duration: 1.8, delay: 0.6, repeatDelay: 2.2 },
  { id: 12, x: 90, y: 58, size:  8, shape: "circle", variant: "ghost",  rotate: 0,  duration: 1.6, delay: 2.4, repeatDelay: 1.8 },
  { id: 13, x: 30, y: 90, size: 12, shape: "square", variant: "solid",  rotate: 45, duration: 2.0, delay: 0.3, repeatDelay: 2.5 },
  { id: 14, x:  6, y: 34, size:  8, shape: "circle", variant: "ring",   rotate: 0,  duration: 1.7, delay: 1.4, repeatDelay: 2.0 },
  { id: 15, x: 70, y: 88, size: 10, shape: "circle", variant: "bright", rotate: 0,  duration: 1.9, delay: 2.8, repeatDelay: 1.6 },
  { id: 16, x:  8, y: 68, size:  6, shape: "square", variant: "ghost",  rotate: 20, duration: 1.5, delay: 1.9, repeatDelay: 2.3 },
  { id: 17, x: 56, y: 92, size:  8, shape: "circle", variant: "ring",   rotate: 0,  duration: 1.8, delay: 3.2, repeatDelay: 1.4 },
  { id: 18, x: 92, y: 26, size:  6, shape: "square", variant: "bright", rotate: 30, duration: 1.6, delay: 2.0, repeatDelay: 2.8 },
];

function variantStyle(v: P["variant"]): React.CSSProperties {
  if (v === "bright") return { backgroundColor: `${A},1)` };
  if (v === "solid")  return { backgroundColor: `${A},0.72)` };
  if (v === "ring")   return { backgroundColor: "transparent", boxShadow: `0 0 0 1.5px ${A},0.42)` };
  return { backgroundColor: `${A},0.1)`, boxShadow: `0 0 0 1px ${A},0.2)` };
}

export default function AboutIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            style={{
              width: p.size,
              height: p.size,
              borderRadius: p.shape === "circle" ? "50%" : 4,
              rotate: p.rotate ?? 0,
              ...variantStyle(p.variant),
            }}
            initial={p.breathing ? { scale: 0.88, opacity: 0.4 } : { scale: 0, opacity: 0 }}
            animate={
              p.breathing
                ? { scale: [0.88, 1.08, 0.88], opacity: [0.4, 0.9, 0.4] }
                : { scale: [0, 1.1, 1, 0],     opacity: [0, 1, 0.8, 0] }
            }
            transition={
              p.breathing
                ? { duration: p.duration, repeat: Infinity, ease: "easeInOut" }
                : {
                    duration: p.duration,
                    delay: p.delay ?? 0,
                    repeat: Infinity,
                    repeatDelay: p.repeatDelay ?? 1,
                    times: [0, 0.2, 0.7, 1],
                    ease: "easeInOut",
                  }
            }
          />
        </div>
      ))}
    </div>
  );
}
