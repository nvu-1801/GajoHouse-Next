import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { SITE_CONFIG } from '@/data/site-config';

export const CoverFront: React.FC = () => {
  return (
    <PageShell density="hard" extraClass="page-cover-top">
      <div className="cover-inner">
        <div className="cover-eyebrow">Boutique Homestay · Hoài Nhơn</div>
        <img src={SITE_CONFIG.logoGoldImg} alt="GAJO'S HOUSE Logo" className="cover-main-logo" />
        <div className="cover-divider" />
        <div className="cover-subtitle">{SITE_CONFIG.subTitle}</div>
        <div className="cover-script">{SITE_CONFIG.tagline}</div>
        <div className="cover-location">
          <i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-gold)', marginRight: '4px' }} />{' '}
          {SITE_CONFIG.locationName}
        </div>
        <div className="cover-hint">
          <i className="fa-solid fa-hand-point-right" /> Nhấn vào mép hoặc vuốt để mở sách
        </div>
      </div>
    </PageShell>
  );
};
