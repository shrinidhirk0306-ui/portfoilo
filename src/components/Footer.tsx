export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn z-30 sm:z-10">
      {/* Left footer */}
      <div
        className="anim-fade-up text-cream"
        style={{ animationDelay: '1400ms' }}
      >
        <p>Visuals Composer</p>
        <p>Digital Crafter</p>
        <p>Obsessed by The Office</p>
      </div>

      {/* Right footer */}
      <div
        className="anim-fade-up text-right text-cream"
        style={{ animationDelay: '1550ms' }}
      >
        <p>A homage to</p>
        <p>Marcus Holloway</p>
      </div>
    </footer>
  );
}
