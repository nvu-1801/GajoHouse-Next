import React from 'react';
import { CataloguePage } from '@/components/flipbook/pageRegistry';

interface BookletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPrint: () => void;
  pages: CataloguePage[];
}

interface MiniPage {
  num: string;
  label: string;
  isCover: boolean;
}

interface Sheet {
  frontLeft: MiniPage;
  frontRight: MiniPage;
  backLeft: MiniPage;
  backRight: MiniPage;
}

// Tính imposition booklet GIỐNG HỆT PrintLayouts để phần xem trước luôn khớp bản in.
function buildSheets(pages: CataloguePage[]): Sheet[] {
  const items: MiniPage[] = pages.map((p, i) => ({
    num: String(i + 1).padStart(2, '0'),
    label: p.shortLabel,
    isCover: i === 0 || i === pages.length - 1,
  }));

  while (items.length % 4 !== 0) {
    items.push({ num: '', label: '', isCover: false });
  }

  const total = items.length;
  const sheets: Sheet[] = [];
  for (let i = 0; i < total / 4; i++) {
    sheets.push({
      frontLeft: items[total - 1 - i * 2],
      frontRight: items[i * 2],
      backLeft: items[i * 2 + 1],
      backRight: items[total - 2 - i * 2],
    });
  }
  return sheets;
}

const MiniPageBox: React.FC<{ page: MiniPage }> = ({ page }) => {
  if (!page.num) {
    return <div className="booklet-mini-page is-blank">—</div>;
  }
  return (
    <div className={`booklet-mini-page${page.isCover ? ' cover-mini' : ''}`}>
      {page.num}
      <span>{page.label}</span>
    </div>
  );
};

export const BookletModal: React.FC<BookletModalProps> = ({ isOpen, onClose, onConfirmPrint, pages }) => {
  const sheets = buildSheets(pages);

  return (
    <div
      className={`export-modal-overlay ${isOpen ? 'active' : ''}`}
      id="bookletModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="export-modal-box booklet-preview-modal-box">
        <button className="modal-close-btn" id="closeBookletModal" onClick={onClose}>
          &times;
        </button>
        <i
          className="fa-solid fa-print"
          style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '4px', display: 'inline-block' }}
        />
        <h3>BẢN IN BOOKLET GẤP ĐÔI ({sheets.length} TỜ A4 - 2 MẶT)</h3>
        <p style={{ marginBottom: '8px' }}>
          Mỗi tờ A4 in 2 mặt (4 trang). Khi in chọn{' '}
          <strong>&quot;In 2 mặt / Lật cạnh ngắn (Flip on short edge)&quot;</strong> rồi xếp chồng và gấp đôi ở
          giữa để tạo thành cuốn catalogue A5:
        </p>

        <div className="booklet-sheets-grid">
          {sheets.map((sheet, idx) => {
            const innerLabels = [sheet.frontLeft, sheet.frontRight, sheet.backLeft, sheet.backRight]
              .filter((p) => p.num && !p.isCover && p.label)
              .map((p) => p.label);
            const desc = innerLabels.length ? ` (${innerLabels.join(' · ')})` : '';

            return (
              <div className="booklet-sheet-card" key={idx}>
                <div className="booklet-sheet-header">
                  <span>
                    <i className="fa-regular fa-file" /> TỜ {idx + 1}
                    {desc}
                  </span>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.68rem' }}>
                    Mặt 1: [{sheet.frontLeft.num || '—'} | {sheet.frontRight.num || '—'}] &bull; Mặt 2: [
                    {sheet.backLeft.num || '—'} | {sheet.backRight.num || '—'}]
                  </span>
                </div>
                <div className="booklet-sides-row">
                  <div className="booklet-side-box">
                    <div className="booklet-side-title">
                      MẶT TRƯỚC{idx === 0 ? ' (Mặt ngoài)' : idx === sheets.length - 1 ? ' (Ruột giữa)' : ''}
                    </div>
                    <div className="booklet-page-pair">
                      <MiniPageBox page={sheet.frontLeft} />
                      <MiniPageBox page={sheet.frontRight} />
                    </div>
                  </div>
                  <div className="booklet-side-box">
                    <div className="booklet-side-title">
                      MẶT SAU{idx === 0 ? ' (Mặt trong)' : idx === sheets.length - 1 ? ' (Ruột giữa)' : ''}
                    </div>
                    <div className="booklet-page-pair">
                      <MiniPageBox page={sheet.backLeft} />
                      <MiniPageBox page={sheet.backRight} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '14px', flexWrap: 'wrap' }}>
          <button
            className="top-btn-pill"
            id="confirmPrintBookletBtn"
            style={{ background: 'var(--accent-gold)', color: '#1E1B18', fontWeight: 700, padding: '8px 20px' }}
            onClick={onConfirmPrint}
          >
            <i className="fa-solid fa-print" /> Tiến Hành In / Lưu PDF Booklet
          </button>
        </div>
      </div>
    </div>
  );
};
