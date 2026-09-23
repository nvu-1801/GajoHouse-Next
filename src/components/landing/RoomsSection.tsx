import React from 'react';
import Link from 'next/link';

interface RoomCardData {
  img: string;
  alt: string;
  badge: string;
  title: string;
  specs: { icon: string; text: string }[];
  desc: string;
}

const ROOMS: RoomCardData[] = [
  {
    img: '/assets/gajo-family-room.jpg',
    alt: 'Family Suite',
    badge: 'Dành Cho Gia Đình & Nhóm',
    title: 'Grand Family Suite',
    specs: [
      { icon: 'fa-solid fa-user-group', text: '4 - 6 Khách' },
      { icon: 'fa-solid fa-vector-square', text: '45 m²' },
      { icon: 'fa-solid fa-bed', text: '2 Giường Lớn' },
      { icon: 'fa-solid fa-tv', text: 'Smart TV 55"' },
    ],
    desc: 'Không gian rộng rãi, thoáng mát với cửa sổ lớn đón trọn gió biển và ánh ban mai. Phù hợp tuyệt đối cho gia đình nhỏ hoặc hội bạn thân cùng tận hưởng kì nghỉ.',
  },
  {
    img: '/assets/gajo-double-bed.jpg',
    alt: 'Deluxe Double Room',
    badge: 'Cặp Đôi & Trăng Mật',
    title: 'Deluxe Double Room',
    specs: [
      { icon: 'fa-solid fa-heart', text: '2 Khách' },
      { icon: 'fa-solid fa-vector-square', text: '28 m²' },
      { icon: 'fa-solid fa-bed', text: '1 Giường King' },
      { icon: 'fa-solid fa-book-open-reader', text: 'Góc Đọc Sách' },
    ],
    desc: 'Sự riêng tư và lãng mạn hòa quyện cùng ánh đèn vàng ấm áp. Nơi bạn có thể ngồi thưởng trà, lắng nghe giai điệu biển cả và tận hưởng phút giây dịu dàng.',
  },
  {
    img: '/assets/gajo-single-bed.jpg',
    alt: 'Cozy Single Room',
    badge: 'Du Lịch Độc Hành / Công Tác',
    title: 'Cozy Single Studio',
    specs: [
      { icon: 'fa-solid fa-user', text: '1 - 2 Khách' },
      { icon: 'fa-solid fa-vector-square', text: '20 m²' },
      { icon: 'fa-solid fa-laptop', text: 'Bàn Làm Việc' },
      { icon: 'fa-solid fa-wifi', text: 'WiFi Tốc Độ Cao' },
    ],
    desc: 'Lựa chọn tinh giản, thông minh và cực kỳ yên tĩnh dành cho người tìm kiếm sự tập trung hoặc muốn có một chốn trú ẩn riêng để chữa lành tâm hồn.',
  },
];

interface RoomsSectionProps {
  onNavigate: (id: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="rooms-section-wrapper" id="rooms">
      <div className="section-header-block">
        <span className="section-subtitle">Bộ Sưu Tập Phòng Nghỉ</span>
        <h2 className="section-title">CHỌN KHÔNG GIAN DÀNH CHO BẠN</h2>
        <p className="section-desc">
          Mỗi căn phòng tại GAJO&apos;S HOUSE mang một sắc thái riêng nhưng đều giữ trọn tinh thần thư thái, sạch
          sẽ và tiện nghi vượt trội.
        </p>
      </div>

      <div className="horizontal-scroll-container" id="horizontalContainer">
        <div className="horizontal-track" id="horizontalTrack">
          {ROOMS.map((room) => (
            <div className="room-card" key={room.title}>
              <img src={room.img} className="room-card-bg" alt={room.alt} />
              <div className="room-card-gradient" />
              <div className="room-card-info">
                <span className="room-badge">{room.badge}</span>
                <h3 className="room-title">{room.title}</h3>
                <div className="room-specs">
                  {room.specs.map((s) => (
                    <span className="room-spec-item" key={s.text}>
                      <i className={s.icon} /> {s.text}
                    </span>
                  ))}
                </div>
                <p className="room-desc">{room.desc}</p>
                <div className="room-action">
                  <a
                    href="#contact"
                    className="btn-room-book"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('contact');
                    }}
                  >
                    Liên Hệ Đặt Phòng
                  </a>
                  <Link href="/flipbook" className="btn-catalogue" style={{ borderRadius: 20 }}>
                    Xem Catalogue 3D
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
