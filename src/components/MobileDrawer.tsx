import { useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const navLinks = ['Story', 'Projects', 'Community'];
  const socialLinks = ['Instagram', 'LinkedIn', 'GitHub'];
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

  return (
    <div className="sm:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ${
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
        <div className="mt-16 flex flex-col gap-10">
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
              {navLinks.map((label, i) => (
                <a
                  key={label}
                  href="#"
                  className="text-4xl text-cream transition-all duration-500"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${300 + i * 80}ms` : '0ms',
                  }}
                >
                  {label}
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
              FIND ME
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {socialLinks.map((label, i) => (
                <a
                  key={label}
                  href="#"
                  className="text-cream transition-all duration-500"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${550 + i * 60}ms` : '0ms',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
