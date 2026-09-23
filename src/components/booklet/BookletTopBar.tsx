'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

const NAV = [
  { href: '/guide', label: 'Cẩm Nang' },
  { href: '/services', label: 'Dịch Vụ' },
  { href: '/explore', label: 'Khám Phá' },
  { href: '/policy', label: 'Nội Quy' },
];

export const BookletTopBar: React.FC = () => {
  return (
    <header className="bk-topbar">
      <Link href="/" className="bk-brand">
        <img src={SITE_CONFIG.logoGoldImg} alt="GAJO'S HOUSE" />
        <span className="bk-brand-text">
          <span className="bk-brand-title">GAJO&apos;S HOUSE</span>
          <span className="bk-brand-sub">Boutique Homestay</span>
        </span>
      </Link>

      <nav className="bk-nav">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="bk-nav-link is-desktop">
            {item.label}
          </Link>
        ))}
        <Link href="/flipbook" className="bk-nav-link is-primary">
          <i className="fa-solid fa-book-open" /> Catalogue 3D
        </Link>
        <button
          type="button"
          onClick={async () => {
            if (typeof window === 'undefined') return;
            const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
            imgs.forEach((img) => {
              img.removeAttribute('loading');
              img.decoding = 'sync';
            });
            if (document.fonts && document.fonts.ready) {
              try {
                await document.fonts.ready;
              } catch {}
            }
            await Promise.all(
              imgs.map((img) => {
                if (img.complete && img.naturalWidth > 0) return Promise.resolve();
                return new Promise<void>((resolve) => {
                  const done = () => resolve();
                  img.addEventListener('load', done, { once: true });
                  img.addEventListener('error', done, { once: true });
                  setTimeout(resolve, 600);
                });
              }),
            );
            window.print();
          }}
          className="bk-nav-link is-print"
          title="In hoặc xuất PDF cẩm nang"
        >
          <i className="fa-solid fa-print" /> In / PDF
        </button>
      </nav>
    </header>
  );
};
