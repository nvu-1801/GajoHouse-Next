import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

interface FlipbookHeaderProps {
  onOpenBooklet: () => void;
  onShare: () => void;
  onPrintA4: () => void;
  onPrintA3: () => void;
}

export const FlipbookHeader: React.FC<FlipbookHeaderProps> = ({
  onOpenBooklet,
  onShare,
  onPrintA4,
  onPrintA3,
}) => {
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
        <button className="top-btn-pill" id="topPrintA4Btn" onClick={onPrintA4} title="In Xem Trước Dạng Slide - Khổ A4 Ngang (6 Tờ)">
          <i className="fa-solid fa-print" /> In A4 Ngang
        </button>
        <button className="top-btn-pill" id="topPrintA3Btn" onClick={onPrintA3} title="In Xem Trước Dạng Slide - Khổ A3 Ngang (6 Tờ)">
          <i className="fa-solid fa-file-contract" /> In A3 Ngang
        </button>
        <button className="top-btn-pill" id="topBookletBtn" onClick={onOpenBooklet}>
          <i className="fa-solid fa-book-open" /> Booklet 2 Mặt
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
