import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';

interface PageProps {
  pageNum?: string;
}

export const Page05Dining: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-dining">
      <PageHeaderBlock
        eyebrow="MUST-TRY DINING"
        title="Hệ Sinh Thái Ẩm Thực GAJO"
        desc="Gợi ý ẩm thực đặc quyền dành riêng cho khách lưu trú"
      />
      <div className="page-main-content">
        <div className="dining-editorial-stack">
          <article className="dining-editorial-card">
            <div className="dining-media">
              <span className="dining-badge-gold">TIỂU ĐÀ LẠT GIỮA HOÀI NHƠN</span>
              <img src="/assets/nhagao-1.jpg" alt="Tiệm Nướng Nhà Gạo view hoàng hôn" style={{ objectPosition: 'center 42%' }} />
            </div>
            <div className="dining-card-body">
              <div className="dining-card-eyebrow">Garden BBQ &amp; Acoustic</div>
              <div className="dining-card-title">Tiệm Nướng Nhà Gạo</div>
              <div className="dining-card-desc">
                Không gian sân vườn Vintage ấm cúng, tiệc nướng BBQ đậm vị và những đêm nhạc acoustic nhẹ nhàng
                bên bờ biển.
              </div>
              <ul className="dining-card-highlights">
                <li>
                  <i className="fa-solid fa-circle-check" /> Bò tảng sốt phô mai kéo sợi
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Hải sản Tam Quan nướng than hồng
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Sườn heo ướp sốt thảo mộc độc quyền
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Đêm nhạc acoustic cuối tuần
                </li>
              </ul>
              <div className="dining-card-meta">
                <i className="fa-regular fa-clock" /> 17:00 – 23:00 · Cách ~2.6km
              </div>
              <div className="dining-footer">
                <a href="https://maps.app.goo.gl/jAWENgZvarDbmG7f6" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-location-dot" /> Đ. Trường Sa, Thạnh Xuân Đông
                </a>
                <a href="tel:0902286300">
                  <i className="fa-solid fa-phone" /> 0902 286 300
                </a>
              </div>
            </div>
          </article>

          <article className="dining-editorial-card">
            <div className="dining-media">
              <span className="dining-badge-cyan">VIEW HOÀNG HÔN CỰC CHILL</span>
              <img src="/assets/dining-nhagao.jpg" alt="GAJO'S THAI không gian bên bờ sông" style={{ objectPosition: 'center 45%' }} />
            </div>
            <div className="dining-card-body">
              <div className="dining-card-eyebrow">Authentic Thai Cuisine</div>
              <div className="dining-card-title">GAJO&apos;S THAI</div>
              <div className="dining-card-desc">
                Không gian mở thoáng đãng ôm trọn vẻ đẹp sông nước lúc chạng vạng, tinh hoa ẩm thực Thái Lan
                chuẩn vị.
              </div>
              <ul className="dining-card-highlights">
                <li>
                  <i className="fa-solid fa-circle-check" /> Tom Yum &amp; Pad Thai chuẩn vị
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Gỏi Som Tum tươi mát, đậm đà
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Lẩu hải sản chua cay đậm đà
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" /> Bàn view sông ngắm hoàng hôn
                </li>
              </ul>
              <div className="dining-card-meta">
                <i className="fa-regular fa-clock" /> 10:00 – 22:00 · Cách ~2.8km
              </div>
              <div className="dining-footer">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-location-dot" /> 125 Nguyễn Chí Thanh, Tân Thành
                </a>
                <a href="tel:0902286300">
                  <i className="fa-solid fa-phone" /> 0902 286 300
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="dining-editorial-perk">
          <strong style={{ color: 'var(--accent-gold)' }}>
            <i className="fa-solid fa-star" /> Đặc quyền GAJO&apos;s HOUSE:
          </strong>{' '}
          Báo với nhân viên bạn là khách lưu trú homestay để được ưu tiên sắp xếp vị trí bàn đẹp nhất!
        </div>
      </div>
    </PageShell>
  );
};
