import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section className="story-section" id="story">
      <div className="story-sticky-container" id="storySticky">
        <img src="/assets/gajo-interior.jpg" className="story-bg-layer story-bg-1" id="storyBg1" alt="Sanctuary 1" />
        <img src="/assets/gajo-family-room.jpg" className="story-bg-layer story-bg-2" id="storyBg2" alt="Sanctuary 2" />
        <img src="/assets/gajo-double-bed.jpg" className="story-bg-layer story-bg-3" id="storyBg3" alt="Sanctuary 3" />
        <div className="story-overlay-shade" />

        <div className="story-cards-container">
          <div className="story-card card-1" id="storyCard1">
            <span className="card-tag">01 / Triết Lý Thiết Kế</span>
            <h2 className="card-title">Tối Giản Trong Từng Nhịp Thở</h2>
            <p className="card-text">
              GAJO&apos;s HOUSE chọn lọc ngôn ngữ thiết kế Japandi: Tận dụng tối đa ánh sáng tự nhiên, sắc gỗ sồi
              trầm ấm và những đường nét mộc mạc để trả lại cho bạn một không gian hoàn toàn tĩnh lặng.
            </p>
            <div className="card-features">
              <span className="feature-pill">
                <i className="fa-solid fa-sun" /> Ánh Sáng Tự Nhiên
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-tree" /> Nội Thất Gỗ Mộc
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-wind" /> Thông Gió Thoáng Đãng
              </span>
            </div>
          </div>

          <div className="story-card card-2" id="storyCard2">
            <span className="card-tag">02 / Không Gian Gia Đình</span>
            <h2 className="card-title">Ấm Áp &amp; Gắn Kết Yêu Thương</h2>
            <p className="card-text">
              Phòng sinh hoạt chung và khu Family Suite rộng rãi được thiết kế để cả gia đình cùng quây quần bên
              tách trà ấm, chia sẻ những câu chuyện dung dị sau một ngày dài khám phá biển đảo.
            </p>
            <div className="card-features">
              <span className="feature-pill">
                <i className="fa-solid fa-users" /> Sức Chứa 4-6 Người
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-mug-hot" /> Trà Thảo Mộc Bản Địa
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-heart" /> Không Khí Gia Đình
              </span>
            </div>
          </div>

          <div className="story-card card-3" id="storyCard3">
            <span className="card-tag">03 / Giấc Ngủ Trọn Vẹn</span>
            <h2 className="card-title">Nâng Niu Từng Giấc Mộng Đẹp</h2>
            <p className="card-text">
              Đệm cao cấp tiêu chuẩn khách sạn, ga trải cotton lụa thoáng mát cùng hệ thống cách âm chỉn chu sẽ
              mang lại cho bạn những giấc ngủ sâu và sảng khoái nhất.
            </p>
            <div className="card-features">
              <span className="feature-pill">
                <i className="fa-solid fa-bed" /> Nệm King / Queen Êm Ái
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-volume-xmark" /> Yên Tĩnh Tuyệt Đối
              </span>
              <span className="feature-pill">
                <i className="fa-solid fa-snowflake" /> Điều Hòa Inverter
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
