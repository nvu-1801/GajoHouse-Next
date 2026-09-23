import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

export const SiteFooter: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">GAJO&apos;S HOUSE</span>
          <span className="footer-rights">
            © 2026 GAJO&apos;S HOUSE. All rights reserved. &bull; Hoài Nhơn Đông, Gia Lai
          </span>
        </div>

        <div className="footer-socials">
          <Link href="/flipbook" className="social-link" title="Xem 3D Catalogue">
            <i className="fa-solid fa-book" />
          </Link>
          <a href={SITE_CONFIG.zaloUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="Nhắn tin Zalo">
            <i className="fa-solid fa-comments" />
          </a>
          <a href={`tel:${SITE_CONFIG.hotline}`} className="social-link" title="Gọi điện thoại">
            <i className="fa-solid fa-phone" />
          </a>
          <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="Chỉ đường Google Maps">
            <i className="fa-solid fa-map-location-dot" />
          </a>
        </div>
      </div>
    </footer>
  );
};
