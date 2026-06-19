import { brands } from "../lib/constants";

const duplicated = [...brands, ...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="py-14 border-y border-white/30 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicated.map((brand, i) => (
          <span
            key={i}
            className="mx-10 inline-block text-xs font-mono text-[#f0f0f0]/50 hover:text-[#f0f0f0]/70 transition-colors duration-300 cursor-default uppercase tracking-[0.2em]"
          >
            {brand}
            <span className="mx-10 text-[#FF6B2B]/25">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
