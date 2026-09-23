import React from 'react';

export interface ThumbMeta {
  id: string;
  shortLabel: string;
}

interface ThumbnailDrawerProps {
  pages: ThumbMeta[];
  activeIndex: number;
  isOpen: boolean;
  onSelect: (index: number) => void;
}

export const ThumbnailDrawer: React.FC<ThumbnailDrawerProps> = ({ pages, activeIndex, isOpen, onSelect }) => {
  return (
    <div className={`thumbnail-drawer ${isOpen ? 'active' : ''}`} id="thumbDrawer">
      {pages.map((p, idx) => (
        <div
          className={`thumb-item ${idx === activeIndex ? 'active' : ''}`}
          data-page-index={idx}
          key={p.id}
          onClick={() => onSelect(idx)}
        >
          <div
            className="thumb-box"
            style={idx === 0 || idx === pages.length - 1 ? { background: '#1E1B18', color: 'var(--accent-gold)' } : undefined}
          >
            {String(idx + 1).padStart(2, '0')}
          </div>
          <div className="thumb-label">{p.shortLabel}</div>
        </div>
      ))}
    </div>
  );
};
