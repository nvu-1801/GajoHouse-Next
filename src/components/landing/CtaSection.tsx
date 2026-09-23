import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

export const CtaSection: React.FC = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-box">
        <span className="cta-badge">Trải Nghiệm Toàn Diện</span>
        <h2 className="cta-title">KHÁM PHÁ CATALOGUE 3D FLIPBOOK</h2>
        <p className="cta-desc">
          Lật giở từng trang cẩm nang du lịch sống động với âm thanh lật giấy chân thực, chi tiết từng góc phòng
          và danh mục quà tặng lưu niệm đặc sắc của GAJO&apos;s HOUSE.
        </p>

        <div className="cta-buttons">
          <Link href="/flipbook" className="btn-grand-catalogue">
            <i className="fa-solid fa-book-open" /> Mở 3D Flipbook Catalogue
          </Link>
          <a
            href={SITE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grand-contact"
            style={{ background: 'rgba(197, 160, 89, 0.2)', borderColor: 'var(--accent-gold)' }}
          >
            <i className="fa-solid fa-comments" /> Đặt Phòng Zalo
          </a>
          <a href={`tel:${SITE_CONFIG.hotline}`} className="btn-grand-contact">
            <i className="fa-solid fa-phone" /> {SITE_CONFIG.hotlineFormatted}
          </a>
        </div>

        <div className="contact-quick-list">
          <a href={SITE_CONFIG.zaloUrl} target="_blank" rel="noopener noreferrer" className="contact-quick-item">
            <i className="fa-solid fa-comments" /> Zalo: {SITE_CONFIG.hotlineFormatted}
          </a>
          <a href={`tel:${SITE_CONFIG.hotline}`} className="contact-quick-item">
            <i className="fa-solid fa-phone" /> Hotline: {SITE_CONFIG.hotlineFormatted}
          </a>
          <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="contact-quick-item">
            <i className="fa-solid fa-location-dot" /> Hoài Nhơn Đông, Gia Lai
          </a>
          <span className="contact-quick-item">
            <i className="fa-solid fa-star" style={{ color: '#FFD700' }} /> 5.0 / 5.0 Đánh giá xuất sắc
          </span>
        </div>
      </div>
    </section>
  );
};
