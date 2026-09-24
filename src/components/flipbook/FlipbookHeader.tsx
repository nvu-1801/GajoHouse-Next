import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

interface FlipbookHeaderProps {
  onPrintBookletA4: () => void;
  onPrintBookletA3: () => void;
  onPrintPreviewUI: () => void;
  onShare: () => void;
}

export const FlipbookHeader: React.FC<FlipbookHeaderProps> = ({
  onPrintBookletA4,
  onPrintBookletA3,
  onPrintPreviewUI,
  onShare,
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
        <button className="top-btn-pill" id="topBookletA4Btn" onClick={onPrintBookletA4} title="In Booklet Khổ A4 (3 Tờ In 2 Mặt Gấp Đôi)">
          <i className="fa-solid fa-book-open" /> Booklet A4
        </button>
        <button className="top-btn-pill" id="topBookletA3Btn" onClick={onPrintBookletA3} title="In Booklet Khổ A3 (3 Tờ In 2 Mặt Gấp Đôi)">
          <i className="fa-solid fa-book" /> Booklet A3
        </button>
        <button className="top-btn-pill" id="topPreviewUIBtn" onClick={onPrintPreviewUI} title="In Xem Trước Dạng Slide (Trang Đôi Trải Phẳng)">
          <i className="fa-solid fa-images" /> Preview UI
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
