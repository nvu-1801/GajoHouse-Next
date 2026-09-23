import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { SITE_CONFIG } from '@/data/site-config';

const AMENITIES = [
  {
    icon: 'fa-solid fa-broom',
    title: 'Dọn Spotless',
    sub: 'Sạch chuẩn 5 sao',
    desc: 'Dọn dẹp mỗi ngày, thay khăn & ga gối mới, sạch sẽ như khách sạn 5 sao.',
  },
  {
    icon: 'fa-regular fa-snowflake',
    title: 'Điều Hòa Êm',
    sub: 'Inverter êm ái',
    desc: 'Máy lạnh Inverter vận hành êm ái, mát lạnh dễ chịu suốt đêm dài.',
  },
  {
    icon: 'fa-solid fa-shower',
    title: 'Nước Nóng',
    sub: 'Hệ trung tâm',
    desc: 'Hệ nước nóng trung tâm ổn định, phục vụ cả phòng tắm lẫn bồn rửa.',
  },
  {
    icon: 'fa-solid fa-motorcycle',
    title: 'Thuê Xe Máy',
    sub: 'Xe mới tiết kiệm',
    desc: 'Xe tay ga / xe số đời mới, kèm 02 mũ bảo hiểm, giao tận homestay.',
  },
  {
    icon: 'fa-solid fa-shirt',
    title: 'Giặt Ủi Nhanh',
    sub: 'Lấy trong ngày',
    desc: 'Giặt sạch thơm, sấy khô, gấp gọn và trả tận phòng ngay trong ngày.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Bãi Xe An Toàn',
    sub: 'Camera an ninh',
    desc: 'Khu để xe rộng rãi, camera an ninh giám sát 24/7, hoàn toàn miễn phí.',
  },
];

interface PageProps {
  pageNum?: string;
}

export const PageStayAmenities: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-stay">
      <div className="stay-header">
        <div className="page-eyebrow">Stay · Eat · Explore</div>
        <h2 className="stay-title">
          Nhận Phòng &amp; <span>Tiện Nghi</span>
        </h2>
        <p className="stay-subtitle">Giờ lưu trú, WiFi &amp; tiện ích cho kỳ nghỉ trọn vẹn</p>
      </div>

      <div className="page-main-content">
        <div className="stay-top-grid">
          <div className="stay-sched-col">
            <span className="stay-sched-icon">
              <i className="fa-regular fa-calendar-check" />
            </span>
            <div className="stay-sched-badge">CHECK IN</div>
            <div className="stay-sched-time">{SITE_CONFIG.schedule.checkIn}</div>
            <div className="stay-sched-sub">{SITE_CONFIG.schedule.checkInSub}</div>
            <span className="stay-sched-rule" />
          </div>

          <div className="stay-sched-col">
            <span className="stay-sched-icon">
              <i className="fa-regular fa-calendar-xmark" />
            </span>
            <div className="stay-sched-badge">CHECK OUT</div>
            <div className="stay-sched-time">{SITE_CONFIG.schedule.checkOut}</div>
            <div className="stay-sched-sub">{SITE_CONFIG.schedule.checkOutSub}</div>
            <span className="stay-sched-rule" />
          </div>

          <div className="wifi-editorial-section">
            <div className="wifi-editorial-header">
              <span className="wifi-editorial-icon">
                <i className="fa-solid fa-wifi" />
              </span>
              <div className="wifi-editorial-headtext">
                <div className="wifi-editorial-title">WiFi Tốc Độ Cao</div>
                <div className="wifi-editorial-sub">Phủ sóng mạnh mẽ toàn bộ khuôn viên homestay</div>
              </div>
            </div>

            <div className="wifi-editorial-rows">
              <div className="wifi-editorial-row">
                <span>Tên Mạng</span>
                <strong>{SITE_CONFIG.wifi.ssid}</strong>
              </div>
              <div className="wifi-editorial-row">
                <span>Mật Khẩu</span>
                <strong>{SITE_CONFIG.wifi.pass}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="stay-section-row">
          <span className="stay-section-label">Tiện Nghi &amp; Dịch Vụ</span>
          <span className="stay-section-script">For a comfortable stay</span>
        </div>

        <div className="amenity-editorial-grid">
          {AMENITIES.map((a) => (
            <div className="amenity-editorial-item" key={a.title}>
              <span className="amenity-editorial-icon">
                <i className={a.icon} />
              </span>
              <div className="amenity-editorial-body">
                <div className="amenity-editorial-title">{a.title}</div>
                <div className="amenity-editorial-sub">{a.sub}</div>
                <div className="amenity-editorial-desc">{a.desc}</div>
              </div>
              <span className="amenity-editorial-arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          ))}
        </div>

        <div className="amenity-editorial-quote">
          <span className="quote-script">&ldquo;Feel like home&rdquo;</span>
          <p>Chủ nhà luôn sẵn sàng hỗ trợ bạn 24/7 với tất cả sự tận tâm.</p>
        </div>
      </div>
    </PageShell>
  );
};
