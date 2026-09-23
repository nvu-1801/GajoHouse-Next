import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

export const BookletFooter: React.FC = () => {
  return (
    <footer className="bk-footer">
      <strong>GAJO&apos;S HOUSE</strong>
      <div>{SITE_CONFIG.address} &bull; Hoài Nhơn, Bình Định</div>
      <div className="bk-footer-links">
        <Link href="/">Trang chủ</Link>
        <Link href="/flipbook">Catalogue 3D</Link>
        <Link href="/guide">Cẩm nang</Link>
        <Link href="/services">Dịch vụ</Link>
        <Link href="/explore">Khám phá</Link>
        <a href={SITE_CONFIG.zaloUrl} target="_blank" rel="noopener noreferrer">
          Zalo {SITE_CONFIG.hotlineFormatted}
        </a>
      </div>
      <div style={{ marginTop: 12, fontSize: '0.7rem', opacity: 0.75 }}>
        © 2026 GAJO&apos;S HOUSE. Every room is a station, every station a story.
      </div>
    </footer>
  );
};
