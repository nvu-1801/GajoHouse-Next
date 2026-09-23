import React from 'react';
import type { Metadata } from 'next';
import { CUISINES, LOCAL_BREAKFAST } from '@/data/cuisine';
import { TRAVEL_PLACES } from '@/data/travel';

export const metadata: Metadata = {
  title: "Khám Phá Hoài Nhơn — GAJO'S HOUSE",
  description: 'Cẩm nang ẩm thực đặc sản và điểm du lịch quanh GAJO\'s HOUSE tại Hoài Nhơn, Bình Định.',
};

export default function ExplorePage() {
  return (
    <main className="bk-main">
      <div className="bk-section-head">
        <span className="bk-eyebrow">Cẩm Nang Bản Địa</span>
        <h1 className="bk-title">
          Khám Phá <span className="bk-script">Hoài Nhơn</span>
        </h1>
        <p className="bk-lead">
          Từ sợi bún dây Bồng Sơn đến cung đèo ven biển hùng vĩ &mdash; tất cả đều nằm trong tầm với từ homestay.
        </p>
      </div>

      <div className="bk-section-block" style={{ marginTop: 0 }}>
        <div className="bk-section-label">
          <span className="bk-roman">01</span>
          <div>
            <h3>Hương vị đặc sản xứ Nẫu</h3>
            <p>Những món ngon đậm đà quê hương Bình Định</p>
          </div>
        </div>
        <div className="bk-grid-2">
          {CUISINES.map((item) => (
            <article className="bk-card" key={item.number}>
              <div className="bk-card-media">
                <span className="bk-badge">{item.badge}</span>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="bk-card-body">
                <h2 className="bk-card-name">{item.name}</h2>
                <div className="bk-card-tagline">{item.tagline}</div>
                <ul className="bk-bullets">
                  {item.highlights.map((h) => (
                    <li key={h}>
                      <i className="fa-solid fa-circle-check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="bk-card-footer">
                  <span>
                    <i className="fa-solid fa-location-dot" /> {item.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Banner Bữa Sáng Truyền Thống Xứ Nẫu */}
        <div className="bk-breakfast-banner">
          <div className="bk-bb-header">
            <div className="bk-bb-title-group">
              <div className="bk-bb-eyebrow">
                <span className="bk-badge">{LOCAL_BREAKFAST.badge}</span>
                <span className="bk-bb-season">{LOCAL_BREAKFAST.seasonNote}</span>
              </div>
              <h3 className="bk-bb-title">{LOCAL_BREAKFAST.title}</h3>
              <p className="bk-bb-subtitle">{LOCAL_BREAKFAST.subtitle}</p>
            </div>
            <div className="bk-bb-price">
              <span className="bk-bb-price-val">{LOCAL_BREAKFAST.price}đ</span>
              <span className="bk-bb-price-unit">{LOCAL_BREAKFAST.priceUnit}</span>
            </div>
          </div>

          <div className="bk-bb-dishes">
            {LOCAL_BREAKFAST.dishes.map((dish) => (
              <span className="bk-bb-dish-chip" key={dish}>
                <i className="fa-solid fa-check" /> {dish}
              </span>
            ))}
            <span className="bk-bb-dish-chip bk-bb-dish-more">&amp; nhiều món khác...</span>
          </div>

          <div className="bk-bb-footer">
            <i className="fa-solid fa-bell-concierge" />
            <span>Phục vụ bữa sáng &bull; <strong>{LOCAL_BREAKFAST.contactNote}</strong></span>
          </div>
        </div>
      </div>

      <div className="bk-section-block">
        <div className="bk-section-label">
          <span className="bk-roman">02</span>
          <div>
            <h3>Hành trình chạm vào thiên nhiên</h3>
            <p>Điểm đến &amp; cung đường quanh Hoài Nhơn</p>
          </div>
        </div>
        <div className="bk-grid-2">
          {TRAVEL_PLACES.map((place) => (
            <article className="bk-card" key={place.number}>
              <div className="bk-card-media">
                <span className="bk-badge">{place.badge}</span>
                <img src={place.image} alt={place.name} style={place.position ? { objectPosition: place.position } : undefined} />
              </div>
              <div className="bk-card-body">
                <h2 className="bk-card-name">{place.name}</h2>
                <div className="bk-card-tagline">{place.tagline}</div>
                <ul className="bk-bullets">
                  {place.highlights.map((h) => (
                    <li key={h}>
                      <i className="fa-solid fa-circle-check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="bk-card-footer">
                  <span>
                    <i className="fa-solid fa-map-pin" /> {place.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bk-banner">
        <i className="fa-solid fa-compass" />
        <p>
          <strong>Lễ tân hỗ trợ:</strong> tư vấn lộ trình, thuê xe máy đời mới và đặt tour khám phá các điểm đến
          quanh GAJO&apos;S HOUSE.
        </p>
      </div>
    </main>
  );
}
