import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

interface FlipbookHeaderProps {
  onOpenBooklet: () => void;
  onShare: () => void;
}

export const FlipbookHeader: React.FC<FlipbookHeaderProps> = ({ onOpenBooklet, onShare }) => {
  return (
    <>
      <div className="brand-header">
        <img src={SITE_CONFIG.logoGoldImg} alt="GAJO'S HOUSE Logo" className="brand-logo-img" />
        <p>3D Interactive Catalogue &bull; Hoài Nhơn Đông, Gia Lai</p>
      </div>
      <div className="top-action-bar">
        <Link href="/" className="top-btn-pill">
          <i className="fa-solid fa-arrow-left" /> Về Trang Chủ
        </Link>
        <button className="top-btn-pill" id="topBookletBtn" onClick={onOpenBooklet}>
          <i className="fa-solid fa-book-open" /> In Booklet 2 Mặt (1-12, 2-11...)
        </button>
        <button className="top-btn-pill" id="topShareBtn" onClick={onShare}>
          <i className="fa-solid fa-share-nodes" /> Chia Sẻ
        </button>
        <a href={SITE_CONFIG.zaloUrl} target="_blank" rel="noopener noreferrer" className="top-btn-pill">
          <i className="fa-solid fa-comments" /> Đặt Phòng Zalo
        </a>
        <a href={`tel:${SITE_CONFIG.hotline}`} className="top-btn-pill">
          <i className="fa-solid fa-phone" /> {SITE_CONFIG.hotlineFormatted}
        </a>
      </div>
    </>
  );
};
