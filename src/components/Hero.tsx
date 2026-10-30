import { useState } from 'react';
import { BACKGROUND_IMAGE, PORTRAIT_IMAGE } from '../constants/images';
import Header from './Header';
import Marquee from './Marquee';
import Footer from './Footer';
import MobileDrawer from './MobileDrawer';

export default function Hero() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToStory = () => {
    const target = document.querySelector('#story');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden select-none bg-black">
      {/* ── Background image (default z-index) ── */}
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover opacity-80"
      />
      {/* Subtle editorial vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />

      {/* ── Scrolling name marquee (z-10) ── */}
      <Marquee />

      {/* ── Cream horizontal rule (z-10) ── */}
      <div className="anim-line absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream/90" />

      {/* ── Desktop & mobile hero footer (sm:z-10, mobile z-30) ── */}
      <Footer />

      {/* ── Foreground portrait cutout (z-20) ── */}
      <img
        src={PORTRAIT_IMAGE}
        alt="Portrait of Shrinidhi Kotagiri"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
      />

      {/* ── Header and mobile chrome (z-30) ── */}
      <Header
        onMenuOpen={() => setDrawerOpen((prev) => !prev)}
        isDrawerOpen={drawerOpen}
      />

      {/* ── Subtle Scroll Cue (z-30) ── */}
      <button
        onClick={scrollToStory}
        className="anim-fade-up absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-cream/50 hover:text-cream transition-colors duration-300"
        style={{ animationDelay: '1700ms' }}
        aria-label="Scroll to portfolio content"
      >
        <span>Explore</span>
        <span className="w-1 h-3 rounded-full border border-cream/40 flex items-start justify-center p-0.5">
          <span className="w-0.5 h-1 bg-cream rounded-full animate-bounce" />
        </span>
      </button>

      {/* ── Mobile drawer (z-40) ── */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </section>
  );
}
