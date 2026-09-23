import React from 'react';
import Link from 'next/link';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const LINK_ITEMS = [
  { href: 'hero', label: 'Trang Chủ' },
  { href: 'story', label: 'Không Gian Nghỉ Dưỡng' },
  { href: 'rooms', label: 'Bộ Sưu Tập Phòng' },
  { href: 'destination', label: 'Cẩm Nang Du Lịch' },
  { href: 'amenities', label: 'Tiện Nghi & WiFi' },
  { href: 'contact', label: 'Thông Tin Đặt Phòng' },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, onNavigate }) => {
  return (
    <>
      <div className={`drawer-overlay ${open ? 'open' : ''}`} id="drawerOverlay" onClick={onClose} />
      <div className={`mobile-drawer ${open ? 'open' : ''}`} id="mobileDrawer">
        <button className="mobile-drawer-close" id="mobileMenuClose" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="nav-logo">
          <img src="/assets/logo-gold.png" alt="GAJO'S HOUSE Logo" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
          <div>
            <span className="nav-logo-text">GAJO&apos;S HOUSE</span>
            <span className="nav-logo-sub">Hoài Nhơn Đông &bull; Gia Lai</span>
          </div>
        </div>
        <ul className="mobile-nav-links">
          {LINK_ITEMS.map((l) => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className="mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(l.href);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/flipbook" className="btn-catalogue" style={{ justifyContent: 'center', padding: 14 }}>
          <i className="fa-solid fa-book-open" /> Mở 3D Flipbook Catalogue
        </Link>
      </div>
    </>
  );
};
