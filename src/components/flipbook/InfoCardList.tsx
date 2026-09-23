import React from 'react';

export interface InfoCardItem {
  num?: number | string;
  icon?: string;
  title: string;
  desc: string;
}

interface InfoCardListProps {
  items: InfoCardItem[];
  variant?: 'list' | 'card';
}

export const InfoCardList: React.FC<InfoCardListProps> = ({ items, variant = 'list' }) => {
  const isCard = variant === 'card';

  return (
    <ul className={`editorial-list${isCard ? ' editorial-list--grid' : ''}`}>
      {items.map((item, idx) => (
        <li className={`editorial-list-item${isCard ? ' editorial-card-item' : ''}`} key={idx}>
          {isCard ? (
            <div className="editorial-card-head">
              {item.num !== undefined ? (
                <div className="editorial-num-badge">{String(item.num).padStart(2, '0')}</div>
              ) : null}
              {item.icon ? (
                <div className="editorial-check-badge">
                  <i className={item.icon} />
                </div>
              ) : null}
            </div>
          ) : (
            <>
              {item.num !== undefined ? (
                <div className="editorial-num-badge">{String(item.num).padStart(2, '0')}</div>
              ) : null}
              {item.icon ? (
                <div className="editorial-check-badge">
                  <i className={item.icon} />
                </div>
              ) : null}
            </>
          )}
          <div className="editorial-item-content">
            <div className="editorial-item-title">{item.title}</div>
            <div
              className="editorial-item-desc"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
