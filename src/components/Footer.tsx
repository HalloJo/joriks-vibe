export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs font-mono text-[#f0f0f0]/50 tracking-wide">
          © {new Date().getFullYear()} Jorik van Ruiswijk
        </span>
        <span className="text-xs font-mono text-accent tracking-wide">
          Built with vibe coding + Claude
        </span>
      </div>
    </footer>
  );
}
