export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn z-30 sm:z-10">
      {/* Left footer */}
      <div
        className="anim-fade-up text-cream"
        style={{ animationDelay: '1400ms' }}
      >
        <p className="font-medium text-cream">Tech &amp; AI/ML Student</p>
        <p className="text-cream/80">Community &amp; Events</p>
        <p className="text-cream/60">Always curious about people &amp; ideas</p>
      </div>

      {/* Right footer */}
      <div
        className="anim-fade-up text-right text-cream"
        style={{ animationDelay: '1550ms' }}
      >
        <p className="text-cream/80">Building at the intersection of</p>
        <p className="font-medium text-cream">People, ideas &amp; technology</p>
      </div>
    </footer>
  );
}
