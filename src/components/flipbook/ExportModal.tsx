import React from 'react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooklet: () => void;
  onShare: () => void;
  onPrintStandard: () => void;
  onPrintSlides: () => void;
  onPrintSlidesA3?: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onOpenBooklet,
  onShare,
  onPrintStandard,
  onPrintSlides,
  onPrintSlidesA3,
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
          <div className="export-opt-btn highlight-opt" id="modalOptSlidesA3" onClick={onPrintSlidesA3 || onPrintSlides}>
            <i className="fa-solid fa-file-contract" />
            <div>
              <strong>In Xem Trước Dạng Slide - Khổ A3 Ngang (Đúng 6 Tờ A3)</strong>
              <span>Dàn trang đôi 420&times;297mm &bull; Mỗi trang con đúng bằng 1 tờ A4 dọc (210&times;297mm) &bull; Gấp đôi thành catalogue A4</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptSlides" onClick={onPrintSlides}>
            <i className="fa-solid fa-images" />
            <div>
              <strong>In Xem Trước Dạng Slide - Khổ A4 Ngang (Đúng 6 Tờ A4)</strong>
              <span>Dàn trang đôi 297&times;210mm &bull; Mỗi trang con khổ A5 (148.5&times;210mm) &bull; Phù hợp máy in văn phòng</span>
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
