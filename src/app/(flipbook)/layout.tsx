import type { Metadata, Viewport } from 'next';
import './base.css';
import './layout.css';
import './components.css';
import './pages.css';
import './pages-ext.css';
import './print.css';

export const metadata: Metadata = {
  title: "GAJO'S HOUSE - 3D Flipbook Catalogue",
  description:
    "Khám phá không gian lưu trú boutique phong cách Japandi và cẩm nang du lịch Hoài Nhơn Đông, Gia Lai cùng GAJO's HOUSE.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#242220',
};

export default function FlipbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Dancing+Script:wght@500;600;700&family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
