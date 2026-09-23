import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';
import { TRAVEL_PLACES } from '@/data/travel';

interface PageProps {
  pageNum?: string;
}

export const PageTravel: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-travel">
      <PageHeaderBlock
        eyebrow="LOCAL TRAVEL"
        title="Khám Phá Hoài Nhơn"
        desc="Điểm đến & cung đường quanh GAJO's HOUSE"
      />
      <div className="page-main-content">
        <div className="mini-grid-3">
          {TRAVEL_PLACES.map((place) => (
            <article className="mini-card" key={place.number}>
              <div className="mini-card-img">
                <span className="mini-card-badge">{place.badge}</span>
                <img src={place.image} alt={place.name} style={place.position ? { objectPosition: place.position } : undefined} />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-title">{place.name}</div>
                <div className="mini-card-sub">{place.tagline}</div>
                <div className="mini-card-extra">
                  <i className="fa-solid fa-location-dot" /> {place.location}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="page-note">
          <i className="fa-solid fa-compass" style={{ color: 'var(--accent-gold-dark)', marginRight: 6 }} />
          <strong>Thuê xe máy đời mới</strong> & tư vấn lộ trình khám phá các cung đèo, hồ và rừng dừa.
        </div>
      </div>
    </PageShell>
  );
};
