interface HeaderProps {
  onMenuOpen: () => void;
  isDrawerOpen: boolean;
}

export default function Header({ onMenuOpen, isDrawerOpen }: HeaderProps) {
  const navLinks = ['Story', 'Projects', 'Community'];
  const socialLinks = ['Instagram', 'LinkedIn', 'GitHub'];

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
      {/* Brand */}
      <a
        href="#"
        className="anim-fade-up font-hn text-lg tracking-wide text-cream"
        style={{ animationDelay: '800ms' }}
      >
        Shrinidhi
      </a>

      {/* Desktop right cluster */}
      <div className="hidden sm:flex items-start gap-16 lg:gap-24">
        {/* Year */}
        <span
          className="anim-fade-up text-sm text-cream"
          style={{ animationDelay: '900ms' }}
        >
          2026
        </span>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5 text-sm">
          {navLinks.map((label, i) => (
            <a
              key={label}
              href="#"
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
              style={{ animationDelay: `${1000 + i * 80}ms` }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex flex-col gap-0.5 text-sm">
          {socialLinks.map((label, i) => (
            <a
              key={label}
              href="#"
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
              style={{ animationDelay: `${1150 + i * 80}ms` }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="anim-fade-up z-50 flex h-10 w-10 items-center justify-center sm:hidden"
        style={{ animationDelay: '900ms' }}
        onClick={onMenuOpen}
        aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isDrawerOpen}
      >
        <div className="relative h-4 w-6">
          {/* Top bar */}
          <span
            className="absolute left-0 top-0 h-[1.5px] w-full bg-cream transition-transform duration-500"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              transform: isDrawerOpen
                ? 'translateY(7.25px) rotate(45deg)'
                : 'translateY(0) rotate(0)',
            }}
          />
          {/* Middle bar */}
          <span
            className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-cream transition-opacity duration-300"
            style={{ opacity: isDrawerOpen ? 0 : 1 }}
          />
          {/* Bottom bar */}
          <span
            className="absolute bottom-0 left-0 h-[1.5px] w-full bg-cream transition-transform duration-500"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              transform: isDrawerOpen
                ? 'translateY(-7.25px) rotate(-45deg)'
                : 'translateY(0) rotate(0)',
            }}
          />
        </div>
      </button>
    </header>
  );
}
