import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';
import { CUISINES, LOCAL_BREAKFAST } from '@/data/cuisine';

interface PageProps {
  pageNum?: string;
}

export const PageCuisine: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-cuisine">
      <PageHeaderBlock
        eyebrow="LOCAL CUISINE"
        title="Hương Vị Đặc Sản Xứ Nẫu"
        desc="Món ngon đậm đà quê hương Bình Định quanh homestay"
      />
      <div className="page-main-content">
        <div className="mini-grid-2">
          {CUISINES.map((item) => (
            <article className="mini-card" key={item.number}>
              <div className="mini-card-img">
                <span className="mini-card-badge">{item.badge}</span>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-title">{item.name}</div>
                <div className="mini-card-sub">
                  {item.tagline[0]}
                  <br />
                  {item.tagline[1]}
                </div>
                <div className="mini-card-extra">
                  <i className="fa-solid fa-location-dot" /> {item.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bữa sáng truyền thống / Điểm tâm bản địa */}
        <div className="cuisine-breakfast-card">
          <div className="cbc-head">
            <div className="cbc-title-wrap">
              <div className="cbc-eyebrow">
                <span className="cbc-badge">{LOCAL_BREAKFAST.badge}</span>
                <span className="cbc-tag-season">{LOCAL_BREAKFAST.seasonNote}</span>
              </div>
              <h4 className="cbc-title">{LOCAL_BREAKFAST.title}</h4>
            </div>
            <div className="cbc-price-tag">
              <span className="cbc-price-val">{LOCAL_BREAKFAST.price}đ</span>
              <span className="cbc-price-unit">{LOCAL_BREAKFAST.priceUnit}</span>
            </div>
          </div>

          <div className="cbc-dishes">
            {LOCAL_BREAKFAST.dishes.map((dish) => (
              <span className="cbc-dish-pill" key={dish}>
                {dish}
              </span>
            ))}
            <span className="cbc-dish-pill cbc-dish-more">...</span>
          </div>

          <div className="cbc-foot">
            <i className="fa-solid fa-bell-concierge" />
            <span>
              Món ăn truyền thống &amp; địa phương &bull; <strong>{LOCAL_BREAKFAST.contactNote}</strong>
            </span>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
