export interface TravelItem {
  number: string;
  name: string;
  badge: string;
  tagline: string;
  highlights: [string, string];
  location: string;
  image: string;
  position?: string;
}

export const TRAVEL_PLACES: TravelItem[] = [
  {
    number: '01',
    name: 'Cầu Lại Giang & Cồn "Cá Voi"',
    badge: 'CÁCH 6KM · BỒNG SƠN',
    tagline: 'Cồn cát hình chú cá voi & vẻ đẹp sông Lại Giang',
    highlights: [
      'Cồn cát giữa dòng Lại Giang tựa chú "cá voi" khổng lồ bơi ra cửa biển',
      'Điểm ngắm bình minh – hoàng hôn sông nước bình yên',
    ],
    location: 'Cầu Lại Giang, Bồng Sơn (Ngắm hoàng hôn & bình minh)',
    image: '/images/members-of-gao/travel/tam-quan-lai-giang.jpg',
  },
  {
    number: '02',
    name: 'Gành Hoài Hải',
    badge: 'CÁCH 14KM · BIỂN HOÀI HẢI',
    tagline: 'Bãi đá trầm tích · Cung đường đá ven sóng biển',
    highlights: [
      'Rạn đá trầm tích gồ ghề hình rồng, sư tử & lưỡi câu vươn ra biển',
      'Nước biển xanh ngọc, làng chài & nghề nước mắm truyền thống',
    ],
    location: 'Xã Hoài Hải, TX. Hoài Nhơn (Sáng sớm & Chiều mát)',
    image: '/images/members-of-gao/travel/ganh-hoai-hai.jpg',
  },
  {
    number: '03',
    name: 'Đèo Lộ Diêu (ĐT639)',
    badge: 'CUNG ĐƯỜNG VEN BIỂN HÙNG VĨ',
    tagline: 'Men sườn núi đá & toàn cảnh làng chài',
    highlights: [
      'Cung đèo ven biển ngoạn mục: một bên vách đá, một bên đại dương',
      'Ngắm toàn cảnh làng chài Lộ Diêu — "một biển ba đèo"',
    ],
    location: 'Tuyến ĐT639, Hoài Mỹ (Chiều mát ngắm biển lộng gió)',
    image: '/images/members-of-gao/travel/deo-hoaihai-lodieu.jpg',
  },
  {
    number: '04',
    name: 'Cao Nguyên La Vuông',
    badge: 'CÁCH 25KM · CAO 700M',
    tagline: 'Săn mây 05:30 · Đồi cỏ & cắm trại',
    highlights: [
      'Cao 700m se lạnh, đồi cỏ ngút ngàn & rừng thông lộng gió',
      'Săn mây 05:30, picnic & cắm trại qua đêm',
    ],
    location: 'Xã Hoài Sơn, TX. Hoài Nhơn (05:30 săn mây hoặc 15:00)',
    image: '/images/members-of-gao/travel/la-vuong.jpg',
  },
  {
    number: '05',
    name: 'Mũi Vi Rồng',
    badge: 'MỸ THỌ · PHÙ MỸ',
    tagline: 'Ghềnh đá tựa rồng khổng lồ, hang xuyên núi vươn ra biển',
    highlights: [
      'Khối núi đá vươn ra biển tựa rồng khổng lồ, hang xuyên núi ra biển',
      'Truyền thuyết "Đá Vảy Rồng" & làng chài Tân Phụng đậm chất biển',
    ],
    location: 'Thôn Tân Phụng, xã Mỹ Thọ, H. Phù Mỹ (Cả ngày)',
    image: '/assets/exp-muivirong.jpg',
    position: 'center 40%',
  },
  {
    number: '06',
    name: 'Hồ Mỹ Bình',
    badge: 'HOÀI PHÚ · ỐC ĐẢO XANH',
    tagline: 'Ốc đảo xanh tĩnh lặng — cắm trại, câu cá & chèo thuyền',
    highlights: [
      'Mặt hồ tĩnh lặng phản chiếu dãy núi xanh thẳm & bãi cỏ bạt ngàn',
      'Dựng lều cắm trại, thả câu, chèo thuyền & tận hưởng không khí trong lành',
    ],
    location: 'Xóm 12, thôn Mỹ Bình 3, xã Hoài Phú (Cả ngày)',
    image: '/images/members-of-gao/travel/ho-my-binh.jpg',
    position: 'center 50%',
  },
];
