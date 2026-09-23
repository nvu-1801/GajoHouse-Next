import React from 'react';
import { CataloguePage } from '@/components/flipbook/pageRegistry';

interface PrintLayoutsProps {
  pages: CataloguePage[];
}

interface BookItem {
  id: string;
  node: React.ReactElement;
}

export const PrintLayouts: React.FC<PrintLayoutsProps> = ({ pages }) => {
  const items: BookItem[] = pages.map((p) => ({ id: p.id, node: p.node }));

  // Pad to a multiple of 4 for booklet imposition
  let blankCount = 0;
  while (items.length % 4 !== 0) {
    const id = `blank-${blankCount++}`;
    items.push({
      id,
      node: (
        <div
          key={id}
          className="page"
          data-density="soft"
          style={{ background: '#FFFFFF' }}
        >
          <div className="page-content" />
        </div>
      ),
    });
  }

  const total = items.length;
  const sheetCount = total / 4;
  const bookletSheets: React.ReactNode[] = [];

  for (let i = 0; i < sheetCount; i++) {
    const frontLeft = items[total - 1 - i * 2];
    const frontRight = items[i * 2];
    const backLeft = items[i * 2 + 1];
    const backRight = items[total - 2 - i * 2];

    bookletSheets.push(
      <div className="booklet-sheet" key={`front-${i}`}>
        <div className="booklet-half">{React.cloneElement(frontLeft.node, { key: `${frontLeft.id}-fl` })}</div>
        <div className="booklet-fold-line" />
        <div className="booklet-half">{React.cloneElement(frontRight.node, { key: `${frontRight.id}-fr` })}</div>
      </div>,
    );

    bookletSheets.push(
      <div className="booklet-sheet" key={`back-${i}`}>
        <div className="booklet-half">{React.cloneElement(backLeft.node, { key: `${backLeft.id}-bl` })}</div>
        <div className="booklet-fold-line" />
        <div className="booklet-half">{React.cloneElement(backRight.node, { key: `${backRight.id}-br` })}</div>
      </div>,
    );
  }

  const standardItems = pages.map((p) => ({ id: p.id, node: p.node }));

  // Slides preview: cover đơn + các trang giữa ghép đôi + bìa sau đơn
  const slidesSheets: React.ReactNode[] = [];
  if (pages.length > 0) {
    slidesSheets.push(
      <div className="slides-sheet slides-sheet--single" key="slide-first">
        <div className="slides-half">{React.cloneElement(pages[0].node, { key: 'slide-first-node' })}</div>
      </div>,
    );

    for (let i = 1; i < pages.length - 1; i += 2) {
      const left = pages[i];
      const right = pages[i + 1];
      slidesSheets.push(
        <div className="slides-sheet" key={`slide-${i}`}>
          <div className="slides-half">{React.cloneElement(left.node, { key: `${left.id}-slide-l` })}</div>
          <div className="slides-half">
            {right ? React.cloneElement(right.node, { key: `${right.id}-slide-r` }) : null}
          </div>
        </div>,
      );
    }

    if (pages.length > 1) {
      const last = pages[pages.length - 1];
      slidesSheets.push(
        <div className="slides-sheet slides-sheet--single" key="slide-last">
          <div className="slides-half">{React.cloneElement(last.node, { key: 'slide-last-node' })}</div>
        </div>,
      );
    }
  }

  return (
    <>
      <div className="booklet-print-container">{bookletSheets}</div>

      <div className="slides-print-container">{slidesSheets}</div>

      <div className="standard-print-container">
        {standardItems.map((item) => (
          <div className="standard-print-sheet" key={`std-${item.id}`}>
            {React.cloneElement(item.node, { key: `std-node-${item.id}` })}
          </div>
        ))}
      </div>
    </>
  );
};
