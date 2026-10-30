import { useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
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
    { label: 'Email', href: 'mailto:shrinidhirk0306@gmail.com' },
  ];

  const prevOverflow = useRef('');

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      prevOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow.current;
    }
    return () => {
      document.body.style.overflow = prevOverflow.current;
    };
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    if (href.startsWith('#')) {
      e.preventDefault();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <div className="sm:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm bg-[#0e0e0e] border-l border-cream/10 px-8 py-10 transition-transform duration-[600ms] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute right-6 top-6 text-cream transition-all duration-300"
          style={{
            transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: isOpen ? 1 : 0,
            transitionDelay: isOpen ? '300ms' : '0ms',
          }}
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="mt-14 flex flex-col gap-10">
          {/* Site Index */}
          <div>
            <h2
              className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
              style={{
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? '250ms' : '0ms',
              }}
            >
              SITE INDEX
            </h2>
            <nav className="flex flex-col gap-3">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-3xl text-cream font-light transition-all duration-500 hover:text-cream/70"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${300 + i * 70}ms` : '0ms',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Find Me */}
          <div>
            <h2
              className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
              style={{
                transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? '500ms' : '0ms',
              }}
            >
              CONNECT & FIND ME
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socialLinks.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => onClose()}
                  className="text-cream/80 transition-all duration-500 hover:text-cream"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${550 + i * 50}ms` : '0ms',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="pt-4 border-t border-cream/10">
            <p className="text-xs text-cream/40 leading-relaxed font-mono">
              B.Tech CSE (AI & ML) · Bengaluru, India
              <br />
              People · Ideas · Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
