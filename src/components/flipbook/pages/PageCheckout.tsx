import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';

interface Step {
  icon: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    icon: 'fa-solid fa-key',
    title: 'Gửi lại chìa khóa phòng',
    desc: 'Bàn giao chìa khóa/thẻ từ tại quầy Lễ tân hoặc thả vào khay nhận chìa trước 11:00.',
  },
  {
    icon: 'fa-solid fa-suitcase-rolling',
    title: 'Kiểm tra hành lý & tư trang',
    desc: 'Rà soát ví tiền, sạc điện thoại, laptop và giấy tờ tùy thân tại khu vực phòng ngủ.',
  },
  {
    icon: 'fa-solid fa-power-off',
    title: 'Tắt thiết bị điện & khóa nước',
    desc: 'Tắt máy lạnh, quạt, đèn và kiểm tra khóa vòi nước phòng tắm trước khi rời phòng.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Trân trọng tài sản & không gian',
    desc: 'Giữ gìn trang thiết bị; báo Lễ tân ngay nếu có hư hỏng để được hỗ trợ kịp thời.',
  },
  {
    icon: 'fa-solid fa-car-side',
    title: 'Hỗ trợ xe đưa đón & giữ hành lý',
    desc: 'Homestay hỗ trợ đặt xe ra sân bay / bến xe và giữ hành lý miễn phí trong ngày.',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Chia sẻ trải nghiệm của bạn',
    desc: 'Để lại đánh giá và giới thiệu GAJO\u2019S HOUSE đến bạn bè, người thân nhé!',
  },
];

interface QuickInfo {
  icon: string;
  label: string;
  value: string;
}

const QUICK_INFO: QuickInfo[] = [
  { icon: 'fa-regular fa-clock', label: 'Giờ trả phòng', value: 'Trước 11:00' },
  { icon: 'fa-solid fa-headset', label: 'Hotline 24/7', value: '0902 286 300' },
  { icon: 'fa-solid fa-suitcase', label: 'Giữ hành lý', value: 'Miễn phí trong ngày' },
];

interface PageProps {
  pageNum?: string;
}

export const PageCheckout: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-checkout">
      <PageHeaderBlock
        eyebrow="DEPARTURE CHECKLIST"
        title="Trước Khi Rời Đi"
        desc="Một vài điều nhỏ để hành trình tiếp theo thật nhẹ nhàng"
      />

      <div className="page-main-content">
        <ul className="checkout-list">
          {STEPS.map((step, idx) => (
            <li className="checkout-row" key={idx}>
              <span className="checkout-row-icon">
                <i className={step.icon} />
              </span>
              <div className="checkout-row-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <span className="checkout-row-check">
                <i className="fa-solid fa-check" />
              </span>
            </li>
          ))}
        </ul>

        <div className="checkout-quick">
          {QUICK_INFO.map((item, idx) => (
            <div className="checkout-quick-item" key={idx}>
              <span className="checkout-quick-icon">
                <i className={item.icon} />
              </span>
              <span className="checkout-quick-label">{item.label}</span>
              <span className="checkout-quick-value">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="checkout-tip">
          <i className="fa-solid fa-lightbulb" />
          <span>
            <strong>Mẹo nhỏ:</strong> Nếu chuyến đi khởi hành muộn, bạn có thể gửi hành lý miễn phí tại quầy Lễ
            tân và nhận lại trước 18:00 cùng ngày.
          </span>
        </div>

        <div className="checkout-closing">
          <span className="checkout-closing-script">Cảm ơn bạn đã lựa chọn GAJO&apos;S HOUSE</span>
          <span className="checkout-closing-line">Hẹn gặp lại tại Hoài Nhơn · Bình Định</span>
        </div>
      </div>
    </PageShell>
  );
};
