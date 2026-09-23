import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';
import { GuideRule, HOUSE_RULES, TECHNICAL_UTILITIES } from '@/data/guidance';

interface PageProps {
  pageNum?: string;
}

export const PageGuide: React.FC<PageProps> = ({ pageNum = '' }) => {
  const items: GuideRule[] = [...HOUSE_RULES, ...TECHNICAL_UTILITIES];

  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-guide">
      <PageHeaderBlock
        eyebrow="IN-ROOM GUIDE"
        title="Sổ Tay Lưu Trú"
        desc="Nội quy & tiện ích để kỳ nghỉ trọn vẹn"
      />

      <div className="page-main-content">
        <div className="guide-grid">
          {items.map((item, idx) => (
            <article className="guide-card" key={idx}>
              <div className="guide-card-body">
                <div className="guide-card-badges">
                  <span className="guide-num">{item.num}</span>
                  <span className="guide-icon">
                    <i className={item.icon} />
                  </span>
                </div>
                <h3 className="guide-card-title">{item.title}</h3>
                <p className="guide-card-desc">{item.desc}</p>
              </div>
              <div className="guide-card-media">
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
};
