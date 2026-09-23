export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  price?: string;
}

export interface ServiceGroup {
  eyebrow: string;
  title: string;
  items: ServiceItem[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    eyebrow: 'IN-HOUSE GARDEN DINING',
    title: 'Dịch vụ ẩm thực tại sân vườn',
    items: [
      {
        icon: 'fa-solid fa-fire-burner',
        title: 'Set tiệc nướng BBQ — Tiệm Nướng Nhà Gạo',
        desc: 'Combo thịt nướng ướp sốt đậm đà, hải sản tươi ngon và rau củ địa phương, kèm bếp than hồng phục vụ tận nơi tại sân vườn.',
        price: 'Combo Đôi 350.000đ • Combo Gia Đình 650.000đ',
      },
      {
        icon: 'fa-solid fa-mug-hot',
        title: 'Trà thảo mộc & Cà phê sáng',
        desc: 'Phục vụ tận phòng hoặc tại bàn trà sân vườn, từ 07:00 - 10:00. Trà thảo mộc bản địa miễn phí tự pha trong phòng.',
      },
    ],
  },
  {
    eyebrow: 'TRANSPORTATION',
    title: 'Phương tiện & di chuyển',
    items: [
      {
        icon: 'fa-solid fa-motorcycle',
        title: 'Cho thuê xe máy',
        desc: 'Tay ga / xe số đời mới, kèm 02 mũ bảo hiểm đạt chuẩn.',
        price: '120.000đ - 150.000đ / ngày',
      },
      {
        icon: 'fa-solid fa-car-side',
        title: 'Đưa đón sân bay / ga tàu',
        desc: 'Đặt xe 4 chỗ, 7 chỗ giá ưu đãi cho khách lưu trú.',
      },
    ],
  },
  {
    eyebrow: 'LAUNDRY & HOUSEKEEPING',
    title: 'Giặt sấy & chăm sóc phòng',
    items: [
      { icon: 'fa-solid fa-shirt', title: 'Giặt sấy quần áo', desc: 'Giặt sạch thơm, gấp gọn giao tận phòng.', price: '15.000đ / kg' },
      { icon: 'fa-solid fa-broom', title: 'Dọn dẹp phòng theo yêu cầu', desc: 'Miễn phí dọn dẹp mỗi ngày cho khách lưu trú từ 2 đêm trở lên.' },
    ],
  },
];

export const GUEST_PRIVILEGES = [
  { icon: 'fa-solid fa-crown', text: 'Giảm 10% cho lượt đặt phòng tiếp theo khi đặt trực tiếp qua Hotline / Zalo.' },
  { icon: 'fa-solid fa-gift', text: 'Tặng voucher 50.000đ cho tiệc BBQ Tiệm Nướng Nhà Gạo khi đánh giá 5 sao trên Google Maps.' },
  { icon: 'fa-solid fa-couch', text: "Ưu tiên bàn view đẹp tại Tiệm Nướng Nhà Gạo, GAJO'S THAI và Gạo Coffee." },
];
