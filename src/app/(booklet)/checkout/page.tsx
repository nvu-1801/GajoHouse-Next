import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site-config';

export const metadata: Metadata = {
  title: "Trước Khi Rời Đi — GAJO'S HOUSE",
  description: 'Checklist trả phòng và lời cảm ơn từ GAJO\'s HOUSE.',
};

const STEPS = [
  {
    num: '01',
    icon: 'fa-solid fa-key',
    title: 'Gửi lại chìa khóa phòng',
    desc: 'Bàn giao chìa khóa tại quầy lễ tân hoặc thông báo cho chủ nhà trước 11:00.',
  },
  {
    num: '02',
    icon: 'fa-solid fa-suitcase-rolling',
    title: 'Kiểm tra hành lý & tư trang',
    desc: 'Kiểm tra ví tiền, sạc điện thoại, laptop và giấy tờ tùy thân tại khu vực phòng ngủ.',
  },
  {
    num: '03',
    icon: 'fa-solid fa-power-off',
    title: 'Tắt thiết bị điện & khóa nước',
    desc: 'Tắt máy lạnh, quạt và kiểm tra khóa vòi nước phòng tắm trước khi rời phòng.',
  },
  {
    num: '04',
    icon: 'fa-solid fa-car-side',
    title: 'Hỗ trợ xe đưa đón & giữ hành lý',
    desc: 'Homestay hỗ trợ đặt xe ra sân bay / bến xe và giữ hành lý miễn phí trong ngày.',
  },
];

export default function CheckoutPage() {
  return (
    <main className="bk-main bk-narrow">
      <div className="bk-section-head">
        <span className="bk-eyebrow">Departure Notes</span>
        <h1 className="bk-title">
          Trước Khi <span className="bk-script">Rời Đi</span>
        </h1>
        <p className="bk-lead">Một vài điều nhỏ để hành trình tiếp theo của bạn thật nhẹ nhàng.</p>
      </div>

      <div className="bk-info-list">
        {STEPS.map((step) => (
          <div className="bk-info-item" key={step.num}>
            <span className="bk-info-num">{step.num}</span>
            <div className="bk-info-body">
              <h3>
                <i className={step.icon} style={{ color: 'var(--gold-dark)', marginRight: 8 }} />
                {step.title}
              </h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bk-panel" style={{ textAlign: 'center', marginTop: 34 }}>
        <span className="bk-eyebrow">Đánh giá 5 sao</span>
        <div style={{ color: '#B8834F', fontSize: '1.4rem', letterSpacing: 6, marginBottom: 10 }}>★★★★★</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 8 }}>
          Bạn thấy kỳ nghỉ thế nào?
        </h2>
        <p className="bk-card-text" style={{ maxWidth: 520, margin: '0 auto 18px' }}>
          Một đánh giá 5★ của bạn là món quà ý nghĩa nhất, giúp GAJO&apos;S HOUSE thêm ấm áp và được nhiều du
          khách biết đến hơn.
        </p>
        <div className="bk-detail-actions" style={{ justifyContent: 'center' }}>
          <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bk-btn bk-btn-primary">
            <i className="fa-solid fa-star" /> Đánh giá trên Google Maps
          </a>
          <Link href="/flipbook" className="bk-btn bk-btn-ghost">
            <i className="fa-solid fa-book-open" /> Xem Catalogue 3D
          </Link>
        </div>
      </div>

      <div className="bk-banner">
        <i className="fa-solid fa-heart" />
        <p>
          <strong>Cảm ơn bạn đã lựa chọn GAJO&apos;S HOUSE.</strong> Hẹn gặp lại bạn tại Hoài Nhơn Đông &bull; Gia Lai trong một mùa nắng khác.
        </p>
      </div>
    </main>
  );
}
