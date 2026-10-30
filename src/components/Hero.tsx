import { useState } from 'react';
import { BACKGROUND_IMAGE, PORTRAIT_IMAGE } from '../constants/images';
import Header from './Header';
import Marquee from './Marquee';
import Footer from './Footer';
import MobileDrawer from './MobileDrawer';

export default function Hero() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* ── Background image (default z-index) ── */}
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* ── Scrolling name marquee (z-10) ── */}
      <Marquee />

      {/* ── Cream horizontal rule (z-10) ── */}
      <div className="anim-line absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream" />

      {/* ── Desktop footer (sm:z-10, mobile z-30) ── */}
      <Footer />

      {/* ── Foreground portrait cutout (z-20) ── */}
      <img
        src={PORTRAIT_IMAGE}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
      />

      {/* ── Header and mobile chrome (z-30) ── */}
      <Header
        onMenuOpen={() => setDrawerOpen((prev) => !prev)}
        isDrawerOpen={drawerOpen}
      />

      {/* ── Mobile drawer (z-40) ── */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </section>
  );
}
