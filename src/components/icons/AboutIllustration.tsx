const A = "#FF6B2B";
const AL = "#FF8A4C";
const D = "#120800";

export default function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <defs>
        <pattern id="about-dots" x="0" y="0" width="42" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill={A} opacity="0.09" />
        </pattern>
        <style>{`
          @keyframes cursor-blink {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 0; }
          }
          .about-cursor { animation: cursor-blink 1.1s step-end infinite; }
        `}</style>
      </defs>

      {/* Dot grid background */}
      <rect width="480" height="400" fill="url(#about-dots)" />

      {/* Subtle concentric rings */}
      <circle cx="240" cy="200" r="178" stroke={A} strokeWidth="0.5" opacity="0.05" />
      <circle cx="240" cy="200" r="128" stroke={A} strokeWidth="0.5" opacity="0.04" />

      {/* ── Left curly brace ── */}
      <path
        d="M 108 128 Q 88 128 88 148 L 88 182 Q 88 198 72 200 Q 88 202 88 218 L 88 252 Q 88 272 108 272"
        stroke={A} strokeWidth="3" strokeLinecap="round" opacity="0.45"
      />

      {/* ── Right curly brace ── */}
      <path
        d="M 372 128 Q 392 128 392 148 L 392 182 Q 392 198 408 200 Q 392 202 392 218 L 392 252 Q 392 272 372 272"
        stroke={A} strokeWidth="3" strokeLinecap="round" opacity="0.28"
      />

      {/* ── </> HTML tag — top right ── */}
      <path d="M 365 56 L 347 69 L 365 82" stroke={AL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      <line x1="376" y1="53" x2="370" y2="85" stroke={AL} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
      <path d="M 382 56 L 400 69 L 382 82" stroke={AL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />

      {/* ── CRT Monitor body ── */}
      <rect x="140" y="88" width="200" height="160" rx="12" fill={D} stroke={A} strokeWidth="1.5" />
      {/* Screen */}
      <rect x="153" y="101" width="174" height="135" rx="7" fill="#070200" />

      {/* Code lines on screen */}
      <rect x="165" y="115" width="56" height="5" rx="2" fill={A} opacity="0.9" />
      <rect x="165" y="127" width="110" height="5" rx="2" fill={AL} opacity="0.55" />
      <rect x="175" y="139" width="72" height="5" rx="2" fill={A} opacity="0.45" />
      <rect x="175" y="151" width="90" height="5" rx="2" fill={AL} opacity="0.4" />
      <rect x="165" y="163" width="56" height="5" rx="2" fill={A} opacity="0.65" />
      <rect x="165" y="175" width="124" height="5" rx="2" fill={AL} opacity="0.3" />
      <rect x="175" y="187" width="76" height="5" rx="2" fill={A} opacity="0.45" />
      <rect x="165" y="199" width="38" height="5" rx="2" fill={A} opacity="0.75" />
      {/* Blinking cursor */}
      <rect className="about-cursor" x="165" y="213" width="9" height="12" rx="1" fill={A} />

      {/* Monitor neck + base */}
      <rect x="228" y="248" width="24" height="18" rx="2" fill={D} stroke={A} strokeWidth="1.5" />
      <rect x="206" y="266" width="68" height="10" rx="4" fill={D} stroke={A} strokeWidth="1.5" />

      {/* ── Floppy disk — bottom left ── */}
      <g opacity="0.82">
        <rect x="44" y="288" width="52" height="52" rx="5" fill={D} stroke={A} strokeWidth="1.5" />
        <rect x="48" y="288" width="44" height="26" rx="3" fill={A} opacity="0.1" />
        <rect x="60" y="288" width="18" height="26" rx="1" stroke={A} strokeWidth="1" opacity="0.35" />
        <rect x="88" y="291" width="6" height="6" rx="1" stroke={A} strokeWidth="1" opacity="0.5" fill={D} />
        <rect x="52" y="320" width="36" height="16" rx="2" stroke={A} strokeWidth="1" opacity="0.22" />
      </g>

      {/* ── Pen / stylus — top left, angled ── */}
      <g transform="translate(80, 162) rotate(-38)">
        <rect x="-4" y="-36" width="8" height="12" rx="2" fill={A} opacity="0.5" />
        <rect x="-4" y="-24" width="8" height="52" rx="3" fill={D} stroke={A} strokeWidth="1.5" />
        <line x1="-4" y1="-10" x2="4" y2="-10" stroke={A} strokeWidth="1" opacity="0.3" />
        <polygon points="-4,28 4,28 0,43" fill={A} opacity="0.72" />
      </g>

      {/* ── Design grid — bottom right ── */}
      <g opacity="0.28">
        <rect x="376" y="288" width="60" height="46" rx="3" stroke={A} strokeWidth="1" />
        <line x1="396" y1="288" x2="396" y2="334" stroke={A} strokeWidth="0.75" />
        <line x1="416" y1="288" x2="416" y2="334" stroke={A} strokeWidth="0.75" />
        <line x1="436" y1="288" x2="436" y2="334" stroke={A} strokeWidth="0.75" />
        <line x1="376" y1="303" x2="436" y2="303" stroke={A} strokeWidth="0.75" />
        <line x1="376" y1="318" x2="436" y2="318" stroke={A} strokeWidth="0.75" />
      </g>

      {/* ── Pixel heart — bottom center-left ── */}
      <g transform="translate(62, 346)" opacity="0.38" fill={A}>
        {/* Row 0 */ }
        <rect x="5"  y="0"  width="4" height="4" /><rect x="10" y="0"  width="4" height="4" />
        <rect x="25" y="0"  width="4" height="4" /><rect x="30" y="0"  width="4" height="4" />
        {/* Row 1 */}
        <rect x="0"  y="5"  width="4" height="4" /><rect x="5"  y="5"  width="4" height="4" />
        <rect x="10" y="5"  width="4" height="4" /><rect x="15" y="5"  width="4" height="4" />
        <rect x="20" y="5"  width="4" height="4" /><rect x="25" y="5"  width="4" height="4" />
        <rect x="30" y="5"  width="4" height="4" /><rect x="35" y="5"  width="4" height="4" />
        {/* Row 2 */}
        <rect x="0"  y="10" width="4" height="4" /><rect x="5"  y="10" width="4" height="4" />
        <rect x="10" y="10" width="4" height="4" /><rect x="15" y="10" width="4" height="4" />
        <rect x="20" y="10" width="4" height="4" /><rect x="25" y="10" width="4" height="4" />
        <rect x="30" y="10" width="4" height="4" /><rect x="35" y="10" width="4" height="4" />
        {/* Row 3 */}
        <rect x="5"  y="15" width="4" height="4" /><rect x="10" y="15" width="4" height="4" />
        <rect x="15" y="15" width="4" height="4" /><rect x="20" y="15" width="4" height="4" />
        <rect x="25" y="15" width="4" height="4" /><rect x="30" y="15" width="4" height="4" />
        {/* Row 4 */}
        <rect x="10" y="20" width="4" height="4" /><rect x="15" y="20" width="4" height="4" />
        <rect x="20" y="20" width="4" height="4" /><rect x="25" y="20" width="4" height="4" />
        {/* Row 5 */}
        <rect x="15" y="25" width="4" height="4" /><rect x="20" y="25" width="4" height="4" />
      </g>

      {/* ── Star sparkles ── */}
      {/* top-left */}
      <polygon points="52,56 54.5,62 60,64 54.5,66 52,72 49.5,66 44,64 49.5,62" fill={A} opacity="0.38" />
      {/* right-middle */}
      <polygon points="426,162 428,167 433,169 428,171 426,176 424,171 419,169 424,167" fill={AL} opacity="0.42" />
      {/* bottom-right */}
      <polygon points="402,312 405,318 411,320 405,322 402,328 399,322 393,320 399,318" fill={A} opacity="0.48" />
      {/* near </> tag */}
      <polygon points="416,40 417.5,44 421,45.5 417.5,47 416,51 414.5,47 411,45.5 414.5,44" fill={AL} opacity="0.5" />
    </svg>
  );
}
