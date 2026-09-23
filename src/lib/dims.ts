export interface FlipDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

// Kích thước "canvas thiết kế" cố định cho mọi trang (UI & bản in dùng chung).
// Nhờ vậy bản in luôn khớp 100% với UI về kích thước, khoảng cách và vị trí.
export const BOOK_DESIGN_WIDTH = 680;
export const BOOK_DESIGN_HEIGHT = 962;

export function getOptimalBookDimensions(): FlipDimensions {
  if (typeof window === 'undefined') {
    return { width: BOOK_DESIGN_WIDTH, height: BOOK_DESIGN_HEIGHT, isMobile: false };
  }

  const isMobile = (window.innerWidth || 360) <= 768;

  return {
    width: BOOK_DESIGN_WIDTH,
    height: BOOK_DESIGN_HEIGHT,
    isMobile,
  };
}

// Hệ số thu nhỏ để vừa màn hình (UI giữ nguyên canvas thiết kế 680x962).
export function getBookScale(): number {
  if (typeof window === 'undefined') return 1;
  const isMobile = (window.innerWidth || 360) <= 768;
  const bookW = isMobile ? BOOK_DESIGN_WIDTH : BOOK_DESIGN_WIDTH * 2;
  const bookH = BOOK_DESIGN_HEIGHT;
  const availW = Math.min(window.innerWidth || 360, 1600) - 24;
  const availH = (window.innerHeight || 640) - 172;
  const scale = Math.min(1, availW / bookW, availH / bookH);
  return scale > 0 ? scale : 1;
}
