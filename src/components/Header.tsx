interface HeaderProps {
  onMenuOpen: () => void;
  isDrawerOpen: boolean;
}

export default function Header({ onMenuOpen, isDrawerOpen }: HeaderProps) {
  const navItems = [
    { label: 'Story', href: '#story' },
    { label: 'Projects', href: '#projects' },
    { label: 'Community', href: '#community' },
    { label: 'Vision', href: '#vision' },
    { label: 'Connect', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/shrinidhirk0306-ui' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 transition-colors duration-300">
      {/* Brand */}
      <a
        href="#"
        className="anim-fade-up font-hn text-lg tracking-wide text-cream"
        style={{ animationDelay: '800ms' }}
      >
        Shrinidhi
      </a>

      {/* Desktop right cluster */}
      <div className="hidden sm:flex items-start gap-12 lg:gap-20">
        {/* Year & Location */}
        <div
          className="anim-fade-up flex flex-col text-sm text-cream/70"
          style={{ animationDelay: '900ms' }}
        >
          <span className="text-cream font-medium">2026</span>
          <span className="text-xs text-cream/50">Bengaluru, IN</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 text-sm">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
              style={{ animationDelay: `${1000 + i * 70}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex flex-col gap-1 text-sm">
          {socialLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
              style={{ animationDelay: `${1150 + i * 70}ms` }}
            >
              {item.label}
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
