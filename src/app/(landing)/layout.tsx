import type { Metadata, Viewport } from 'next';
import './landing.css';

export const metadata: Metadata = {
  title: "GAJO'S HOUSE - Japandi Boutique Homestay | Hoài Nhơn Đông, Gia Lai",
  description:
    "Trải nghiệm không gian nghỉ dưỡng Japandi tinh tế và cẩm nang du lịch Hoài Nhơn Đông, Gia Lai cùng GAJO's HOUSE. Khám phá trải nghiệm cuộn điện ảnh độc đáo.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#121110',
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Dancing+Script:wght@500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
