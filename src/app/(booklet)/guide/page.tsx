import React from 'react';
import type { Metadata } from 'next';
import { HOUSE_RULES, CONCIERGE, TECHNICAL_UTILITIES } from '@/data/guidance';
import { SITE_CONFIG } from '@/data/site-config';

export const metadata: Metadata = {
  title: "Sổ Tay Lưu Trú — GAJO'S HOUSE",
  description: 'Nội quy lưu trú, tiện ích kỹ thuật và thông tin liên hệ trong kỳ nghỉ tại GAJO\'s HOUSE.',
};

const SCHEDULE = [
  { badge: 'Check-in', time: SITE_CONFIG.schedule.checkIn, sub: SITE_CONFIG.schedule.checkInSub },
  { badge: 'Check-out', time: SITE_CONFIG.schedule.checkOut, sub: SITE_CONFIG.schedule.checkOutSub },
];

export default function GuidePage() {
  return (
    <main className="bk-main">
      <div className="bk-section-head">
        <span className="bk-eyebrow">In-Room Guide</span>
        <h1 className="bk-title">
          Sổ Tay <span className="bk-script">Lưu Trú</span>
        </h1>
        <p className="bk-lead">
          Những điều nhỏ giúp kỳ nghỉ của bạn tại GAJO&apos;S HOUSE trọn vẹn và an yên hơn.
        </p>
      </div>

      <div className="bk-grid-3">
        {SCHEDULE.map((s) => (
          <div className="bk-card" key={s.badge}>
            <div className="bk-card-body" style={{ textAlign: 'center' }}>
              <span className="bk-card-tagline">{s.badge}</span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--ink)', lineHeight: 1.1 }}>
                {s.time}
              </div>
              <p className="bk-card-text" style={{ marginTop: 6 }}>
                {s.sub}
              </p>
            </div>
          </div>
        ))}
        <div className="bk-card">
          <div className="bk-card-body" style={{ textAlign: 'center' }}>
            <span className="bk-card-tagline">Hotline 24/7</span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: 'var(--gold-dark)', lineHeight: 1.2 }}>
              {SITE_CONFIG.hotlineFormatted}
            </div>
            <p className="bk-card-text" style={{ marginTop: 6 }}>
              Luôn sẵn sàng hỗ trợ bạn mọi lúc
            </p>
          </div>
        </div>
      </div>

      <div className="bk-section-block">
        <div className="bk-section-label">
          <span className="bk-roman">01</span>
          <div>
            <h3>Nội quy lưu trú</h3>
            <p>Gìn giữ không gian tĩnh lặng và an yên cho mọi vị khách</p>
          </div>
        </div>
        <div className="bk-info-list">
          {HOUSE_RULES.map((rule) => (
            <div className="bk-info-item" key={rule.num}>
              <span className="bk-info-num">{rule.num}</span>
              <div className="bk-info-body">
                <h3>
                  <i className={rule.icon} style={{ color: 'var(--gold-dark)', marginRight: 8 }} />
                  {rule.title}
                </h3>
                <p>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bk-section-block">
        <div className="bk-section-label">
          <span className="bk-roman">02</span>
          <div>
            <h3>Tiện ích kỹ thuật</h3>
            <p>Thông tin nhanh để bạn sử dụng thuận tiện</p>
          </div>
        </div>
        <div className="bk-grid-2">
          {TECHNICAL_UTILITIES.map((item) => (
            <div className="bk-info-item" key={item.title}>
              <span className="bk-info-icon">
                <i className={item.icon} />
              </span>
              <div className="bk-info-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bk-banner">
        <i className="fa-solid fa-bell-concierge" />
        <p>
          <strong>Lễ tân hỗ trợ 24/7:</strong> {CONCIERGE.map((c) => `${c.label} — ${c.value}`).join(' • ')}
        </p>
      </div>
    </main>
  );
}
