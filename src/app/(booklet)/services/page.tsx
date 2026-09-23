import React from 'react';
import type { Metadata } from 'next';
import { SERVICE_GROUPS, GUEST_PRIVILEGES } from '@/data/extra-services';
import { SITE_CONFIG } from '@/data/site-config';

export const metadata: Metadata = {
  title: "Dịch Vụ Bổ Sung — GAJO'S HOUSE",
  description: 'BBQ sân vườn, thuê xe máy, giặt sấy và ưu đãi đặc quyền cho khách lưu trú tại GAJO\'s HOUSE.',
};

export default function ServicesPage() {
  return (
    <main className="bk-main">
      <div className="bk-section-head">
        <span className="bk-eyebrow">Extra Services</span>
        <h1 className="bk-title">
          Dịch Vụ &amp; <span className="bk-script">Đặc Quyền</span>
        </h1>
        <p className="bk-lead">
          Những tiện ích được chuẩn bị sẵn để bạn chỉ việc tận hưởng kỳ nghỉ trọn vẹn.
        </p>
      </div>

      {SERVICE_GROUPS.map((group, gi) => (
        <div className="bk-section-block" key={group.title} style={gi === 0 ? { marginTop: 0 } : undefined}>
          <div className="bk-section-label">
            <span className="bk-roman">{String(gi + 1).padStart(2, '0')}</span>
            <div>
              <h3>{group.title}</h3>
              <p>{group.eyebrow}</p>
            </div>
          </div>
          <div className="bk-grid-2">
            {group.items.map((item) => (
              <div className="bk-info-item" key={item.title}>
                <span className="bk-info-icon">
                  <i className={item.icon} />
                </span>
                <div className="bk-info-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.price ? <span className="bk-info-price">{item.price}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bk-section-block">
        <div className="bk-section-label">
          <span className="bk-roman">★</span>
          <div>
            <h3>Ưu đãi khách thân thiết</h3>
            <p>Dành riêng cho khách lưu trú tại GAJO&apos;S HOUSE</p>
          </div>
        </div>
        <div className="bk-grid-3">
          {GUEST_PRIVILEGES.map((p) => (
            <div className="bk-info-item" key={p.text}>
              <span className="bk-info-icon">
                <i className={p.icon} />
              </span>
              <div className="bk-info-body">
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bk-banner">
        <i className="fa-solid fa-phone" />
        <p>
          Đặt trước dịch vụ qua lễ tân: <strong>{SITE_CONFIG.hotlineFormatted}</strong> (Hotline / Zalo 24/7).
        </p>
      </div>
    </main>
  );
}
