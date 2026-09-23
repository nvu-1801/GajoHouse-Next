import type { Metadata, Viewport } from 'next';
import './booklet.css';
import { BookletTopBar } from '@/components/booklet/BookletTopBar';
import { BookletFooter } from '@/components/booklet/BookletFooter';

export const metadata: Metadata = {
  title: "GAJO'S HOUSE — Cẩm Nang Lưu Trú",
  description:
    "09 trạm dừng cảm xúc, cẩm nang ẩm thực, khám phá Hoài Nhơn và tiện ích lưu trú tại GAJO's HOUSE.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D6E0D3',
};

export default function BookletLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <BookletTopBar />
        {children}
        <BookletFooter />
      </body>
    </html>
  );
}
