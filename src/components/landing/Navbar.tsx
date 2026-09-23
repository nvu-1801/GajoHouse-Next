import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  onOpenMenu: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onNavigate }) => {
  const links = [
    { href: 'story', label: 'Không Gian' },
    { href: 'rooms', label: 'Hạng Phòng' },
    { href: 'destination', label: 'Du Lịch' },
    { href: 'amenities', label: 'Tiện Ích' },
    { href: 'contact', label: 'Liên Hệ' },
  ];

  return (
    <nav className="navbar" id="navbar">
      <a
        href="#hero"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('hero');
        }}
      >
        <img src="/assets/logo-gold.png" alt="GAJO'S HOUSE Logo" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
        <div>
          <span className="nav-logo-text">GAJO&apos;S HOUSE</span>
          <span className="nav-logo-sub">Japandi Boutique</span>
        </div>
      </a>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={`#${l.href}`}
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

      <div className="nav-actions">
        <Link href="/flipbook" className="btn-catalogue">
          <i className="fa-solid fa-book-open" /> 3D Catalogue
        </Link>
        <a
          href="#contact"
          className="btn-book"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('contact');
          }}
        >
          Đặt Phòng
        </a>
        <button className="mobile-menu-btn" id="mobileMenuOpen" aria-label="Open Menu" onClick={onOpenMenu}>
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </nav>
  );
};
