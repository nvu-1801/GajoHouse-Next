export interface CuisineItem {
  number: string;
  name: string;
  badge: string;
  tagline: [string, string];
  highlights: [string, string];
  location: string;
  image: string;
}

export const CUISINES: CuisineItem[] = [
  {
    number: '01',
    name: 'Bún Dây Bồng Sơn',
    badge: 'ĐẶC SẢN ĐỘC BẢN HOÀI NHƠN',
    tagline: ['Sợi bún ngâm tro củi, ép thủ công', 'Thoa dầu hẹ, chấm mắm ớt chua ngọt'],
    highlights: [
      'Gạo lúa cũ ngâm nước tro củi, ép thủ công thành vỉ bún vàng óng',
      'Thoa dầu hẹ thơm lừng, chấm mắm ớt tỏi chua ngọt đậm vị xứ Nẫu',
    ],
    location: 'Khu ẩm thực & chợ quanh Hoài Nhơn Đông (06:00 - 09:30)',
    image: '/images/dac-san/01_bun_day_bong_son.png',
  },
  {
    number: '02',
    name: 'Bánh Mì Chả Cá',
    badge: 'HẢI SẢN TƯƠI CẢNG TAM QUAN',
    tagline: ['Chả cá cảng Tam Quan quết tay giòn', 'Bánh mì nướng than hồng giòn rụm'],
    highlights: [
      'Chả cá thu, cá nhồng cảng Tam Quan quết tay giòn sần sật',
      'Bánh mì nướng than giòn rụm, kẹp rau răm & sốt mắm rim cay nồng',
    ],
    location: 'Dọc các tuyến đường trung tâm quanh Hoài Nhơn Đông',
    image: '/images/dac-san/02_banh_mi_cha_ca.png',
  },
  {
    number: '03',
    name: 'Bánh Canh Cá Lóc',
    badge: 'MÓN NGON ẤM LÒNG XỨ NẪU',
    tagline: ['Nước dùng xương cá lóc ngọt thanh', 'Thơm củ nén & nghệ tươi ấm lòng'],
    highlights: [
      'Nước dùng xương cá lóc đồng ngọt thanh, thơm củ nén & nghệ tươi',
      'Sợi bánh canh gạo mềm dai, ăn một tô ấm cả người',
    ],
    location: 'Các quán ăn bình dân quanh Hoài Nhơn Đông (Sáng & Tối)',
    image: '/images/dac-san/03_banh_canh_ca_loc.png',
  },
  {
    number: '04',
    name: 'Phở Bò Bình Định',
    badge: 'ĐI BỘ 3 PHÚT (CÁCH 300M)',
    tagline: ['Nước dùng bò hầm, gừng nướng & hoa hồi', 'Bò tái mềm ngọt, thơm húng quế'],
    highlights: [
      'Nước dùng bò hầm trong vắt, thơm hoa hồi, thảo quả & gừng nướng',
      'Bò tái mềm ngọt, ăn cùng húng quế & ớt xiêm xanh giòn cay',
    ],
    location: 'Quán ăn sáng địa phương quanh Hoài Nhơn Đông (Cách 300m)',
    image: '/images/dac-san/04_pho_bo_binh_dinh.png',
  },
];

export interface BreakfastInfo {
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  priceUnit: string;
  seasonNote: string;
  contactNote: string;
  dishes: string[];
}

export const LOCAL_BREAKFAST: BreakfastInfo = {
  title: 'Bữa Sáng Truyền Thống Xứ Nẫu',
  subtitle: 'Các món ăn truyền thống & đặc sản địa phương',
  badge: 'ĐIỂM TÂM BẢN ĐỊA',
  price: '40.000',
  priceUnit: 'VNĐ / suất',
  seasonNote: '✦ Tùy theo mùa & thay đổi theo ngày',
  contactNote: 'Vui lòng liên hệ tại quầy để chọn món trong ngày',
  dishes: [
    'Bánh xèo',
    'Bánh bèo',
    'Bánh căn',
    'Bánh hỏi cháo lòng',
    'Bánh canh chả cá',
    'Bánh mì thập cẩm',
    'Bánh mì trứng ốp la',
    'Đồ ăn chay',
    'Bún chả cá',
    'Phở bò',
  ],
};
