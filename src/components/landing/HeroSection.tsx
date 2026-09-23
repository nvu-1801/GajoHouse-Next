import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <img src="/assets/gajo-interior.jpg" className="hero-bg-img" id="heroBg" alt="GAJO'S HOUSE Interior" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-content" id="heroContent">
        <div className="hero-badge">✦ BOUTIQUE JAPANDI HOMESTAY ✦</div>
        <h1 className="hero-title">GAJO&apos;S HOUSE</h1>
        <p className="hero-subtitle">Chạm vào an yên giữa miền duyên hải Hoài Nhơn</p>
        <p className="hero-desc">
          Nơi hội tụ giữa vẻ đẹp mộc mạc của kiến trúc Nhật Bản và sự nồng hậu của đất Gia Lai. Một chốn dừng
          chân tĩnh lặng để tái tạo năng lượng và gắn kết yêu thương.
        </p>
        <div className="hero-buttons">
          <a
            href="#story"
            className="btn-hero-primary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('story');
            }}
          >
            Khám Phá Không Gian <i className="fa-solid fa-arrow-down" />
          </a>
          <Link href="/flipbook" className="btn-hero-secondary">
            <i className="fa-solid fa-book-open" /> Xem 3D Catalogue
          </Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
        <span>Cuộn để trải nghiệm</span>
      </div>
    </section>
  );
};
