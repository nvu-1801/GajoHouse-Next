import React from 'react';

interface DestCard {
  size: 'large' | 'medium' | 'small';
  img: string;
  alt: string;
  tagIcon: string;
  tag: string;
  name: string;
  info: string;
  position?: string;
}

const DESTINATIONS: DestCard[] = [
  {
    size: 'large',
    img: '/assets/exp-deolodieu.jpg',
    alt: 'Đèo Lộ Diêu',
    tagIcon: 'fa-solid fa-location-dot',
    tag: 'Hoài Mỹ, Hoài Nhơn',
    name: 'Đèo & Bãi Biển Lộ Diêu',
    info: 'Cung đường ven biển đẹp ngoạn mục với bãi cát vàng hoang sơ hình cánh cung, ôm trọn làn nước xanh như ngọc bích.',
  },
  {
    size: 'medium',
    img: '/assets/exp-muivirong.jpg',
    alt: 'Mũi Vi Rồng',
    tagIcon: 'fa-solid fa-location-dot',
    tag: 'Tân Phụng, Phù Mỹ',
    name: 'Mũi Vi Rồng Kì Vĩ',
    info: 'Mỏm đá vươn mình ra biển lớn như một chú rồng khổng lồ, điểm ngắm sóng vỗ trắng xóa và bình minh rực rỡ.',
    position: 'center 40%',
  },
  {
    size: 'small',
    img: '/assets/exp-tamquan.jpg',
    alt: 'Rừng Dừa Tam Quan',
    tagIcon: 'fa-solid fa-location-dot',
    tag: 'Tam Quan Bắc',
    name: 'Rừng Dừa Tam Quan',
    info: 'Thủ phủ xứ dừa bạt ngàn bóng mát, nơi lưu giữ tinh hoa ẩm thực bánh tráng nước dừa thơm lừng.',
  },
  {
    size: 'small',
    img: '/assets/exp-lavuong.jpg',
    alt: 'Cao Nguyên La Vuông',
    tagIcon: 'fa-solid fa-location-dot',
    tag: 'Hoài Sơn',
    name: 'Cao Nguyên La Vuông',
    info: 'Khí hậu trong lành mát mẻ quanh năm trên độ cao hơn 700m, tọa độ cắm trại săn mây lý tưởng.',
  },
  {
    size: 'small',
    img: '/assets/dining-gajothai.jpg',
    alt: 'Ẩm Thực GAJO',
    tagIcon: 'fa-solid fa-utensils',
    tag: 'Hệ Thống GAJO',
    name: 'Ẩm Thực GAJO & Nhà Gạo',
    info: "Tiệc BBQ Tiệm Nướng Nhà Gạo & GAJO'S THAI view sông hoàng hôn cực chill.",
    position: 'center 50%',
  },
];

export const DestinationSection: React.FC = () => {
  return (
    <section className="destination-section" id="destination">
      <div className="section-header-block">
        <span className="section-subtitle">Hành Trình Khám Phá</span>
        <h2 className="section-title">THIÊN NHIÊN HOÀI NHƠN KÌ VĨ</h2>
        <p className="section-desc">
          Từ những cung đèo uốn lượn ôm trọn biển xanh đến những rạn đá trầm tích ngàn năm, Hoài Nhơn luôn sẵn
          sàng làm bạn say lòng.
        </p>
      </div>

      <div className="dest-grid">
        {DESTINATIONS.map((d) => (
          <div className={`dest-card dest-card-${d.size}`} key={d.name}>
            <img src={d.img} className="dest-img" alt={d.alt} style={d.position ? { objectPosition: d.position } : undefined} />
            <div className="dest-overlay">
              <span className="dest-tag">
                <i className={d.tagIcon} /> {d.tag}
              </span>
              <h3 className="dest-name">{d.name}</h3>
              <p className="dest-info">{d.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
