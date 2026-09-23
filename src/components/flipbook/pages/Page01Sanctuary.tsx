import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';

interface PageProps {
  pageNum?: string;
}

export const Page01Sanctuary: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-welcome">
      <PageHeaderBlock
        eyebrow="WELCOME TO SANCTUARY"
        title="Lời Ngỏ"
        desc="Chào mừng bạn ghé thăm GAJO's HOUSE"
      />
      <div className="page-main-content">
        <div className="welcome-editorial-quote">
          &quot;Một không gian lưu trú boutique mới xây được chăm chút tỉ mỉ từng chi tiết, tĩnh lặng và sạch
          không tì vết để bạn tái tạo trọn vẹn nguồn năng lượng.&quot;
        </div>

        <p className="welcome-editorial-text">
          Tọa lạc tại Hoài Nhơn, Bình Định thanh bình, homestay mang phong cách tối giản Japandi giao hòa cùng
          vẻ đẹp mộc mạc và sự hiếu khách ấm áp.
        </p>

        <div className="welcome-photo-wrap">
          <img src="/assets/gajo-interior.jpg" className="welcome-photo" alt="Nội thất GAJO's HOUSE" />
          <span className="welcome-photo-caption">Không gian Japandi ấm cúng</span>
        </div>

        <div className="welcome-signature">GAJO&apos;s HOUSE</div>
      </div>
    </PageShell>
  );
};
