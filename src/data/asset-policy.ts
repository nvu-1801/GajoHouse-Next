export interface AssetItem {
  stt: string;
  name: string;
  unit: string;
  price: string;
  note: string;
}

export interface AssetSection {
  id: string;
  title: string;
  note: string;
  items: AssetItem[];
}

export const ASSET_SECTIONS: AssetSection[] = [
  {
    id: 'I',
    title: 'Thiết bị điện và điện tử',
    note: 'Áp dụng khi làm rơi vỡ, chập cháy do sử dụng sai cách hoặc làm mất',
    items: [
      { stt: '1', name: 'Smart Tivi (32 - 40 inch)', unit: 'Cái', price: '4.500.000', note: 'Vỡ màn hình, hỏng bo mạch do đổ nước' },
      { stt: '2', name: 'Điều hòa không khí (Máy lạnh)', unit: 'Bộ', price: '7.000.000', note: '' },
      { stt: '3', name: 'Tủ lạnh mini (Minibar)', unit: 'Cái', price: '3.000.000', note: 'Móp méo, vỡ khay kính bên trong' },
      { stt: '4', name: 'Điều khiển (Remote) Tivi / Máy lạnh', unit: 'Cái', price: '250.000', note: 'Mất hoặc vỡ hỏng' },
      { stt: '5', name: 'Máy sấy tóc', unit: 'Cái', price: '400.000', note: '' },
      { stt: '6', name: 'Ấm đun nước siêu tốc', unit: 'Cái', price: '350.000', note: '' },
      { stt: '7', name: 'Đèn ngủ / Đèn gắn tường (kèm bóng Edison ST64)', unit: 'Bộ', price: '600.000', note: 'Vỡ bóng đền bù riêng: 150.000 đ/bóng' },
      { stt: '8', name: 'Thẻ từ khóa cửa', unit: 'Thẻ', price: '100.000', note: 'Phí cấp lại và cài đặt thẻ mới' },
    ],
  },
  {
    id: 'II',
    title: 'Đồ nội thất',
    note: 'Tính phí khi làm gãy, vỡ, nứt xước sâu hoặc cháy sém',
    items: [
      { stt: '9', name: 'Đệm (Nệm) giường ngủ', unit: 'Tấm', price: '3.500.000', note: 'Lún hỏng, rách, ố bẩn không thể giặt' },
      { stt: '10', name: 'Giường ngủ (Khung gỗ và giát giường)', unit: 'Bộ', price: '4.500.000', note: 'Gãy sập do sử dụng sai mục đích' },
      { stt: '11', name: 'Sofa bed', unit: 'Cái', price: '3.000.000', note: 'Rách mút, gãy khớp gập, ố bẩn nặng' },
      { stt: '12', name: 'Tủ quần áo', unit: 'Cái', price: '2.500.000', note: 'Vỡ cánh cửa, gãy bản lề' },
      { stt: '13', name: 'Bàn làm việc / Bàn trang điểm', unit: 'Cái', price: '1.500.000', note: '' },
      { stt: '14', name: 'Ghế ngồi / Ghế trang điểm', unit: 'Cái', price: '600.000', note: '' },
      { stt: '15', name: 'Tab (tủ nhỏ) đầu giường', unit: 'Cái', price: '500.000', note: '' },
      { stt: '16', name: 'Kệ Tivi / Kệ đặt hành lý', unit: 'Cái', price: '1.200.000', note: '' },
      { stt: '17', name: 'Gương soi phòng tắm / Gương trang điểm', unit: 'Cái', price: '800.000', note: 'Nứt, vỡ' },
    ],
  },
  {
    id: 'III',
    title: 'Đồ vải',
    note: 'Áp dụng khi rách, cháy sém, dính màu không tẩy được',
    items: [
      { stt: '18', name: 'Vỏ chăn', unit: 'Cái', price: '600.000', note: '' },
      { stt: '19', name: 'Ruột chăn', unit: 'Cái', price: '800.000', note: '' },
      { stt: '20', name: 'Ga trải giường (Drap)', unit: 'Tấm', price: '450.000', note: '' },
      { stt: '21', name: 'Vỏ gối', unit: 'Cái', price: '120.000', note: '' },
      { stt: '22', name: 'Ruột gối', unit: 'Cái', price: '200.000', note: '' },
      { stt: '23', name: 'Khăn tắm lớn', unit: 'Cái', price: '150.000', note: 'Dùng làm giẻ lau, dính thuốc nhuộm' },
      { stt: '24', name: 'Khăn mặt / Khăn lau tay', unit: 'Cái', price: '70.000', note: '' },
      { stt: '25', name: 'Thảm chùi chân', unit: 'Tấm', price: '100.000', note: '' },
      { stt: '26', name: 'Tấm trang trí giường (Bed runner)', unit: 'Tấm', price: '200.000', note: '' },
    ],
  },
  {
    id: 'IV',
    title: 'Vật dụng phòng khách & Phòng tắm',
    note: 'Áp dụng khi nứt vỡ hoặc làm mất',
    items: [
      { stt: '27', name: 'Bồn cầu / Lavabo bằng sứ', unit: 'Bộ', price: '2.500.000', note: 'Nứt, vỡ bệ sứ' },
      { stt: '28', name: 'Vòi sen / Vòi nước Lavabo', unit: 'Bộ', price: '1.500.000', note: 'Gãy gập, hỏng van' },
      { stt: '29', name: 'Cốc thủy tinh / Tách sứ uống trà', unit: 'Cái', price: '50.000', note: '' },
      { stt: '30', name: 'Đĩa lót tách trà', unit: 'Cái', price: '30.000', note: '' },
      { stt: '31', name: 'Dép đi trong phòng', unit: 'Đôi', price: '50.000', note: '' },
      { stt: '32', name: 'Khay đựng đồ Amenities / Khay trà', unit: 'Cái', price: '150.000', note: '' },
      { stt: '33', name: 'Bình chiết dầu gội / Sữa tắm', unit: 'Bình', price: '100.000', note: '' },
      { stt: '34', name: 'Thùng rác', unit: 'Cái', price: '150.000', note: '' },
      { stt: '35', name: 'Bìa da kẹp thông tin nội quy phòng', unit: 'Quyển', price: '200.000', note: '' },
    ],
  },
];

export const ASSET_NOTES = [
  {
    title: 'Hư hỏng một phần',
    desc: 'Với tài sản giá trị lớn (Giường, Tủ, Tivi, Sofa...), nếu hư hỏng nhẹ có thể khắc phục, Quản lý cơ sở sẽ đánh giá thực tế và thu phí theo chi phí sửa chữa — không thu toàn bộ giá trị mua mới.',
  },
  {
    title: 'Chi phí vệ sinh đặc biệt',
    desc: 'Trường hợp làm bẩn phòng gây mùi nặng (nôn mửa, sầu riêng, hải sản...) không thể đón khách ca sau: phụ thu phí xử lý mùi và giặt thảm/nệm chuyên dụng 500.000 VNĐ/lần.',
  },
  {
    title: 'Thất lạc đồ đạc',
    desc: 'Vật dụng nhỏ mang ra khỏi khuôn viên và làm mất sẽ tính phí theo đúng giá niêm yết trong bảng trên.',
  },
];
