export interface GuideRule {
  num: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
}

export const HOUSE_RULES: GuideRule[] = [
  {
    num: '01',
    icon: 'fa-solid fa-clock',
    title: 'Check-in & Check-out',
    desc: 'Nhận phòng từ 14:00 • Trả phòng trước 11:00 trưa hôm sau. Liên hệ lễ tân nếu cần nhận sớm hoặc trả muộn.',
    image: '/assets/gajo-double-bed.jpg',
  },
  {
    num: '02',
    icon: 'fa-solid fa-moon',
    title: 'Giờ yên tĩnh',
    desc: 'Từ 22:00 đến 07:00 sáng hôm sau. Vui lòng giữ âm lượng vừa phải để cùng gìn giữ giấc ngủ an lành.',
    image: '/assets/gajo-single-bed.jpg',
  },
  {
    num: '03',
    icon: 'fa-solid fa-ban-smoking',
    title: 'Không gian không khói thuốc',
    desc: 'Tuyệt đối không hút thuốc trong phòng. Quý khách vui lòng hút tại khu vực sân vườn ngoài trời.',
    image: '/assets/nhagao-1.jpg',
  },
  {
    num: '04',
    icon: 'fa-solid fa-leaf',
    title: 'Bảo vệ môi trường & thiết bị',
    desc: 'Tắt điều hòa và bình nóng lạnh khi rời phòng. Trân trọng giữ gìn trang thiết bị và tài sản chung.',
    image: '/assets/gajo-interior.jpg',
  },
];

export const CONCIERGE = [
  { icon: 'fa-solid fa-wifi', label: 'Wi-Fi miễn phí', value: 'GAJOS_HOUSE' },
  { icon: 'fa-solid fa-key', label: 'Mật khẩu', value: 'gajoshouse' },
  { icon: 'fa-solid fa-headset', label: 'Hotline 24/7', value: '0902 286 300' },
];

export const TECHNICAL_UTILITIES: GuideRule[] = [
  {
    num: '05',
    icon: 'fa-solid fa-wifi',
    title: 'Mạng Wi-Fi',
    desc: 'Tên mạng GAJOS_HOUSE — mật khẩu gajoshouse. Phủ sóng mạnh toàn khuôn viên homestay.',
    image: '/assets/cafe-gaocoffee.jpg',
  },
  {
    num: '06',
    icon: 'fa-solid fa-shower',
    title: 'Hệ thống nước nóng',
    desc: 'Bật công tắc nước nóng (đèn đỏ sáng) trước khi sử dụng 5-10 phút.',
    image: '/assets/gajo-family-room.jpg',
  },
  {
    num: '07',
    icon: 'fa-regular fa-snowflake',
    title: 'Remote điều hòa',
    desc: 'Dùng nút MODE để chọn COOL (Làm mát) hoặc DRY (Hút ẩm).',
    image: '/images/ga-moc/ga-moc-sofa.jpg',
  },
  {
    num: '08',
    icon: 'fa-solid fa-phone-volume',
    title: 'Liên hệ khẩn cấp',
    desc: 'Hotline / Zalo lễ tân 24/7: 0902 286 300. Trạm y tế gần nhất cách 1.5 km.',
    image: '/assets/gajo-sign-day.jpg',
  },
];
