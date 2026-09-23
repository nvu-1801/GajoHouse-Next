'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { Navbar } from './Navbar';
import { MobileDrawer } from './MobileDrawer';
import { HeroSection } from './HeroSection';
import { StorySection } from './StorySection';
import { RoomsSection } from './RoomsSection';
import { DestinationSection } from './DestinationSection';
import { AmenitiesSection } from './AmenitiesSection';
import { CtaSection } from './CtaSection';
import { SiteFooter } from './SiteFooter';
import { SITE_CONFIG } from '@/data/site-config';

export default function LandingPage() {
  const lenisRef = useRef<Lenis | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  const scrollToId = useCallback((id: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(`#${id}`);
    if (el && lenisRef.current) {
      lenisRef.current.start();
      lenisRef.current.scrollTo(el as HTMLElement, { offset: -40, duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
    lenisRef.current?.stop();
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    lenisRef.current?.start();
  }, []);

  const handleCopyWifi = useCallback(() => {
    const pass = SITE_CONFIG.wifi.pass;
    navigator.clipboard
      .writeText(pass)
      .then(() => showToast(`Đã sao chép mật khẩu WiFi: ${pass}`))
      .catch(() => showToast(`Mật khẩu WiFi: ${pass}`));
  }, [showToast]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const progressEl = document.getElementById('scroll-progress');
      if (progressEl) progressEl.style.width = `${scrolled}%`;
      setBackToTopVisible(winScroll > 400);
    };
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .from('.hero-badge', { y: -30, opacity: 0, duration: 1, delay: 0.2 })
        .from('.hero-title', { y: 40, opacity: 0, duration: 1.2 }, '-=0.6')
        .from('.hero-subtitle', { y: 30, opacity: 0, duration: 1 }, '-=0.8')
        .from('.hero-desc', { y: 30, opacity: 0, duration: 1 }, '-=0.8')
        .from('.hero-buttons', { y: 30, opacity: 0, duration: 1 }, '-=0.8')
        .from('.scroll-indicator', { opacity: 0, duration: 1 }, '-=0.5');

      gsap.to('#heroBg', {
        scale: 1.25,
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      gsap.to('#heroContent', {
        yPercent: 30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: '60% top', scrub: true },
      });

      // Chapter 1: Pinned storytelling
      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#story',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '#storySticky',
          anticipatePin: 1,
        },
      });
      storyTl
        .to('#storyCard1', { opacity: 1, y: 0, scale: 1, duration: 1.5 })
        .to('#storyBg1', { scale: 1.15, duration: 2 }, '<')
        .to({}, { duration: 1 })
        .to('#storyCard1', { opacity: 0, y: -40, scale: 0.95, duration: 1.2 })
        .to('#storyBg2', { opacity: 1, scale: 1.1, duration: 2 }, '<')
        .to('#storyCard2', { opacity: 1, y: 0, scale: 1, duration: 1.5 }, '-=0.5')
        .to({}, { duration: 1 })
        .to('#storyCard2', { opacity: 0, y: -40, scale: 0.95, duration: 1.2 })
        .to('#storyBg3', { opacity: 1, scale: 1.1, duration: 2 }, '<')
        .to('#storyCard3', { opacity: 1, y: 0, scale: 1, duration: 1.5 }, '-=0.5')
        .to({}, { duration: 1 });

      // Chapter 2: Horizontal room showcase
      const horizontalTrack = document.getElementById('horizontalTrack');
      if (horizontalTrack) {
        const getScrollAmount = () =>
          -(horizontalTrack.scrollWidth - window.innerWidth + window.innerWidth * 0.16);

        gsap.to(horizontalTrack, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: '#horizontalContainer',
            start: 'top top',
            end: () => `+=${horizontalTrack.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // Chapter 3: Destination stagger
      gsap.utils.toArray<HTMLElement>('.dest-card').forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      });
    });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" />
      <div className="noise-overlay" />

      <Navbar onOpenMenu={openDrawer} onNavigate={scrollToId} />
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} onNavigate={scrollToId} />

      <HeroSection onNavigate={scrollToId} />
      <StorySection />
      <RoomsSection onNavigate={scrollToId} />
      <DestinationSection />
      <AmenitiesSection onCopyWifi={handleCopyWifi} />
      <CtaSection />
      <SiteFooter />

      <button
        className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}
        id="backToTop"
        aria-label="Back to Top"
        onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.5 })}
      >
        <i className="fa-solid fa-chevron-up" />
      </button>

      <div className={`toast ${toast ? 'show' : ''}`} id="toast">
        <i className="fa-solid fa-circle-check" />
        <span id="toastMsg">{toast}</span>
      </div>
    </>
  );
}
