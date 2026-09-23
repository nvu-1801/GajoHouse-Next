import React from 'react';

interface BottomToolbarProps {
  pageLabel: string;
  soundEnabled: boolean;
  onPrev: () => void;
  onNext: () => void;
  onOpenBooklet: () => void;
  onToggleThumbs: () => void;
  onToggleSound: () => void;
  onToggleFullscreen: () => void;
  onOpenExport: () => void;
}

export const BottomToolbar: React.FC<BottomToolbarProps> = ({
  pageLabel,
  soundEnabled,
  onPrev,
  onNext,
  onOpenBooklet,
  onToggleThumbs,
  onToggleSound,
  onToggleFullscreen,
  onOpenExport,
}) => {
  return (
    <div className="bottom-nav-bar">
      <button className="nav-btn" id="prevBtn" title="Trang trước (Phím Mũi tên Trái)" onClick={onPrev}>
        <i className="fa-solid fa-chevron-left" />
      </button>
      <div className="nav-page-indicator" id="pageIndicator">
        {pageLabel}
      </div>
      <button className="nav-btn" id="nextBtn" title="Trang sau (Phím Mũi tên Phải)" onClick={onNext}>
        <i className="fa-solid fa-chevron-right" />
      </button>
      <div className="divider-vert" />
      <button className="nav-btn btn-booklet" id="bookletQuickBtn" title="In / Tải Booklet A4 2 Mặt" onClick={onOpenBooklet}>
        <i className="fa-solid fa-book-open" /> Booklet
      </button>
      <button className="nav-btn" id="thumbToggleBtn" title="Xem tất cả trang" onClick={onToggleThumbs}>
        <i className="fa-solid fa-table-cells-large" />
      </button>
      <button className="nav-btn" id="soundToggleBtn" title="Bật/Tắt âm thanh lật sách" onClick={onToggleSound}>
        <i className={soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'} />
      </button>
      <button className="nav-btn" id="fullscreenBtn" title="Toàn màn hình" onClick={onToggleFullscreen}>
        <i className="fa-solid fa-expand" />
      </button>
      <div className="divider-vert" />
      <button className="nav-btn btn-highlight" id="exportBtn" title="Tải về & Menu Chia sẻ" onClick={onOpenExport}>
        <i className="fa-solid fa-cloud-arrow-down" />
      </button>
    </div>
  );
};
