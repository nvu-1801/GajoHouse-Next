import React from 'react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrintBookletA4: () => void;
  onPrintBookletA3: () => void;
  onPrintPreviewUI: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onPrintBookletA4,
  onPrintBookletA3,
  onPrintPreviewUI,
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
          <div className="export-opt-btn highlight-opt" id="modalOptBookletA4" onClick={onPrintBookletA4}>
            <i className="fa-solid fa-book-open" />
            <div>
              <strong>In Booklet Bản A4 (Sách Gấp Đôi)</strong>
              <span>Tự động ghép trang 1-12, 2-11... &bull; 3 tờ A4 in 2 mặt (lật cạnh ngắn) &bull; Gấp đôi thành catalogue A5 (148.5&times;210mm)</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptBookletA3" onClick={onPrintBookletA3}>
            <i className="fa-solid fa-book" />
            <div>
              <strong>In Booklet Bản A3 (Sách Gấp Đôi Khổ Lớn)</strong>
              <span>Tự động ghép trang khổ A3 &bull; 3 tờ A3 in 2 mặt (lật cạnh ngắn) &bull; Gấp đôi thành catalogue A4 (210&times;297mm) cao cấp</span>
            </div>
          </div>

          <div className="export-opt-btn" id="modalOptPreviewUI" onClick={onPrintPreviewUI}>
            <i className="fa-solid fa-images" />
            <div>
              <strong>In Preview Như UI Để Xem</strong>
              <span>Dàn từng cặp trang đôi trải phẳng y như giao diện lật sách &bull; Phù hợp xem trước hoặc gửi file PDF cho khách hàng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
