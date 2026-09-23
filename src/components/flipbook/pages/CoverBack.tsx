import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { SITE_CONFIG } from '@/data/site-config';

export const CoverBack: React.FC = () => {
  return (
    <PageShell density="hard" extraClass="page-cover-bottom">
      <div className="cover-inner cover-thanks">
        <div className="cover-thanks-head">
          <img
            src={SITE_CONFIG.logoGoldImg}
            alt="GAJO'S HOUSE Logo"
            className="cover-main-logo cover-thanks-logo"
          />
          <div className="cover-thanks-script">Thank you</div>
          <h2 className="cover-thanks-title">Cảm ơn bạn đã ghé thăm!</h2>
          <div className="cover-divider" />
        </div>

        <a
          href={SITE_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cover-qr-card"
          title="Mở vị trí trên Google Maps"
        >
          <span className="cover-qr-frame">
            <img src={SITE_CONFIG.qrMapsImg} alt="QR Code đánh giá 5 sao GAJO's HOUSE" />
          </span>
          <span className="cover-qr-text">
            <span className="cover-qr-stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </span>
            <span className="cover-qr-caption">
              Quét mã để đánh giá 5 sao
              <br />
              trên Google Maps
            </span>
          </span>
        </a>

        <div className="cover-thanks-contact">
          <strong>GAJO&apos;S HOUSE • BOUTIQUE HOMESTAY</strong>
          <span>
            <i className="fa-solid fa-location-dot" /> {SITE_CONFIG.address}
          </span>
          <span>
            <i className="fa-solid fa-phone" />{' '}
            <a href={`tel:${SITE_CONFIG.hotline}`}>{SITE_CONFIG.hotlineFormatted}</a>
            <em className="cover-contact-sep">•</em>
            <a href={SITE_CONFIG.zaloUrl} target="_blank" rel="noopener noreferrer">
              Zalo
            </a>
          </span>
        </div>

        <div className="cover-thanks-foot">
          <div className="cover-thanks-tagline">Stay simple, live slow, feel home.</div>
          <div className="cover-location">Hẹn gặp lại bạn tại Hoài Nhơn • Bình Định</div>
        </div>
      </div>
    </PageShell>
  );
};
