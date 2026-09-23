import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';

interface PageProps {
  pageNum?: string;
}

export const Page06Coffee: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-coffee">
      <PageHeaderBlock
        eyebrow="COFFEE & CHILL"
        title="Góc Cà Phê & Thư Giãn"
        desc="Những điểm đến bình yên không thể bỏ lỡ tại Hoài Nhơn"
      />
      <div className="page-main-content">
        <div className="dining-editorial-stack">
          <article className="dining-editorial-card">
            <div className="dining-media">
              <span className="dining-badge-navy">CHILL GIÓ BIỂN · NHẠC ACOUSTIC</span>
              <img src="/assets/cafe-gaocoffee.jpg" alt="Gạo Coffee không gian biển" style={{ objectPosition: 'center 55%' }} />
            </div>
            <div className="dining-card-body">
              <div className="dining-card-eyebrow">Seaside Acoustic</div>
              <div className="dining-card-title">Gạo Coffee (Seaside Acoustic)</div>
              <div className="dining-card-desc">
                Không gian mở sát biển lãng mạn, đón hoàng hôn và gió mát cùng những đêm nhạc acoustic mộc mạc.
              </div>
              <ul className="dining-card-highlights">
                <li>
                  <i className="fa-solid fa-circle-check" /> Uji Matcha Latte đánh bọt Chasen
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Cold Brew cam sảng khoái
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Trà thảo mộc thơm lành
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Bàn bãi cát ngắm hoàng hôn
                </li>
              </ul>
              <div className="dining-card-meta">
                <i className="fa-regular fa-clock" /> 06:30 – 22:00 · Cách ~2.5km
              </div>
              <div className="dining-footer">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-location-dot" /> Đ. Trường Sa, Thạnh Xuân Đông
                </a>
                <a href="tel:0902286300">
                  <i className="fa-solid fa-phone" /> 0902 286 300
                </a>
              </div>
            </div>
          </article>

          <article className="dining-editorial-card">
            <div className="dining-media">
              <span className="dining-badge-wood">GÓC NHỎ VINTAGE 1996</span>
              <img src="/assets/cafe-bonjour.jpg" alt="Bonjour Café mặt tiền vintage" style={{ objectPosition: 'center top' }} />
            </div>
            <div className="dining-card-body">
              <div className="dining-card-eyebrow">Vintage 1996</div>
              <div className="dining-card-title">Bonjour Café</div>
              <div className="dining-card-desc">
                Thiết kế gỗ mộc mạc, hoài cổ — chốn dừng chân yên tĩnh để nhâm nhi ly cà phê sáng gần homestay.
              </div>
              <ul className="dining-card-highlights">
                <li>
                  <i className="fa-solid fa-circle-check" /> Cà phê rang mộc đậm vị
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Donuts nướng nóng mỗi sáng
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Matcha Oreo &amp; Caramel Brûlée
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Không gian gạch nung hoài cổ
                </li>
              </ul>
              <div className="dining-card-meta">
                <i className="fa-regular fa-clock" /> 07:00 – 22:00 · Đi bộ 3 phút
              </div>
              <div className="dining-footer">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-location-dot" /> 56 Đ. Phan Trọng Tuệ, Hoài Nhơn Đông
                </a>
                <a href="tel:0965470833">
                  <i className="fa-solid fa-phone" /> 0965 470 833
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="dining-editorial-perk">
          <strong style={{ color: 'var(--accent-gold)' }}>
            <i className="fa-solid fa-lightbulb" /> Mẹo nhỏ từ GAJO&apos;s HOUSE:
          </strong>{' '}
          Bonjour Café nằm ngay trên trục đường Phan Trọng Tuệ, rất thuận tiện để đi bộ từ homestay ra thưởng
          thức cà phê sáng!
        </div>
      </div>
    </PageShell>
  );
};
