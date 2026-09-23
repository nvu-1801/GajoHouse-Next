import React from 'react';
import { SITE_CONFIG } from '@/data/site-config';

interface AmenitiesSectionProps {
  onCopyWifi: () => void;
}

const AMENITIES = [
  {
    icon: 'fa-solid fa-mug-hot',
    name: 'Trà & Cà Phê Chào Mừng',
    desc: 'Thưởng thức trà thảo mộc organic và cà phê rang xay thơm ngon miễn phí mỗi sáng.',
  },
  {
    icon: 'fa-solid fa-motorcycle',
    name: 'Thuê Xe Máy Phượt Biển',
    desc: 'Hỗ trợ thuê xe máy đời mới kèm mũ bảo hiểm để bạn tự do khám phá các cung đèo.',
  },
  {
    icon: 'fa-solid fa-fire-burner',
    name: 'Bếp BBQ Sân Vườn',
    desc: 'Không gian bếp mở đầy đủ gia vị và lò nướng BBQ để tổ chức tiệc hải sản tươi ngon.',
  },
  {
    icon: 'fa-solid fa-key',
    name: 'Tự Do Check-in 24/7',
    desc: 'Khóa thông minh Smart Lock giúp bạn check-in linh hoạt mọi thời điểm trong ngày.',
  },
];

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onCopyWifi }) => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-container">
        <div className="wifi-quick-box">
          <div className="wifi-icon-pulse">
            <i className="fa-solid fa-wifi" />
          </div>
          <h3 className="wifi-title">Kết Nối 1-Chạm</h3>
          <p className="wifi-subtitle">
            Bấm trực tiếp vào khung dưới đây để sao chép mật khẩu WiFi tốc độ cao miễn phí tại homestay.
          </p>

          <div className="wifi-pass-card" id="wifiCopyCard" title="Bấm để sao chép mật khẩu" onClick={onCopyWifi}>
            <div style={{ textAlign: 'left' }}>
              <div className="wifi-label">Mạng WiFi: {SITE_CONFIG.wifi.ssid}_5G</div>
              <div className="wifi-pass-val" id="wifiPass">
                {SITE_CONFIG.wifi.pass}
              </div>
            </div>
            <button className="btn-copy-wifi" id="btnCopyWifi">
              <i className="fa-regular fa-copy" /> Sao chép
            </button>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)' }}>
            <i className="fa-solid fa-shield-halved" /> Băng thông cáp quang 500Mbps không giới hạn
          </div>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a) => (
            <div className="amenity-item" key={a.name}>
              <div className="amenity-icon">
                <i className={a.icon} />
              </div>
              <h4 className="amenity-name">{a.name}</h4>
              <p className="amenity-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
