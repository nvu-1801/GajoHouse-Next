import React from 'react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooklet: () => void;
  onShare: () => void;
  onPrintStandard: () => void;
  onPrintSlides: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onOpenBooklet,
  onShare,
  onPrintStandard,
  onPrintSlides,
}) => {
  return (
    <div
      className={`export-modal-overlay ${isOpen ? 'active' : ''}`}
      id="exportModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="export-modal-box">
        <button className="modal-close-btn" id="closeExportModal" onClick={onClose}>
          &times;
        </button>
        <i
          className="fa-solid fa-book-bookmark"
          style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '6px', display: 'inline-block' }}
        />
        <h3>TẢI VỀ &amp; IN ẤN CATALOGUE</h3>
        <p>Chọn phương thức xuất bản phù hợp:</p>

        <div className="export-options-grid">
          <div className="export-opt-btn highlight-opt" id="modalOptSlides" onClick={onPrintSlides}>
            <i className="fa-solid fa-images" />
            <div>
              <strong>In Xem Trước Dạng Slide (2 bìa đơn + 5 trang đôi)</strong>
              <span>Giống giao diện lật sách &bull; Bìa trước/bìa sau để riêng, 10 trang giữa ghép 2 trang / tờ A4</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptBooklet" onClick={onOpenBooklet}>
            <i className="fa-solid fa-book-open" />
            <div>
              <strong>In / Xuất Bản Booklet A4 2 Mặt (1-12, 2-11...)</strong>
              <span>3 tờ A4 in 2 mặt &bull; Gấp đôi ở giữa thành cuốn catalogue A5</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptShare" onClick={onShare}>
            <i className="fa-solid fa-share-nodes" />
            <div>
              <strong>Chia Sẻ 3D Flipbook Gửi Khách Hàng</strong>
              <span>Gửi qua Zalo, Messenger, Facebook, tin nhắn SMS</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptPrintStandard" onClick={onPrintStandard}>
            <i className="fa-solid fa-file-pdf" />
            <div>
              <strong>In / Xuất PDF 12 Trang Đơn (1:1 đúng kích thước UI)</strong>
              <span>Khổ A4 dọc &bull; Mỗi trang 180&times;254.5mm đúng bằng bản web, không scale</span>
            </div>
          </div>

          <a href="https://zalo.me/0902286300" target="_blank" rel="noopener noreferrer" className="export-opt-btn">
            <i className="fa-solid fa-comments" />
            <div>
              <strong>Liên Hệ Zalo Đặt Phòng Nhanh (0902 286 300)</strong>
              <span>Tư vấn đặt phòng 24/7 &amp; hỗ trợ lưu trú chu đáo</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
