import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';
import { AssetSection } from '@/data/asset-policy';

const SECTION_ICONS: Record<string, string> = {
  I: 'fa-solid fa-plug',
  II: 'fa-solid fa-couch',
  III: 'fa-solid fa-shirt',
  IV: 'fa-solid fa-bath',
};

interface PagePolicyProps {
  sections: AssetSection[];
  pageNum?: string;
  eyebrow?: string;
  title?: string;
  desc?: string;
  note?: string;
}

export const PagePolicy: React.FC<PagePolicyProps> = ({
  sections,
  pageNum = '',
  eyebrow = 'HOUSE POLICY',
  title = 'Quy Định & Đền Bù',
  desc,
  note,
}) => {
  return (
    <PageShell density="soft" pageNum={pageNum} extraClass="page-policy">
      <PageHeaderBlock eyebrow={eyebrow} title={title} desc={desc} />
      <div className="page-main-content policy-content">
        {sections.map((section) => (
          <section className="policy-card" key={section.id}>
            <header className="policy-card-head">
              <span className="policy-card-badge">{section.id}</span>
              <div className="policy-card-headtext">
                <h3 className="policy-card-title">
                  <i className={SECTION_ICONS[section.id] || 'fa-solid fa-circle-info'} />
                  {section.title}
                </h3>
                {section.note ? <p className="policy-card-sub">{section.note}</p> : null}
              </div>
            </header>

            <div className="policy-table-wrap">
              <table className="policy-table">
                <colgroup>
                  <col style={{ width: 30 }} />
                  <col />
                  <col style={{ width: 46 }} />
                  <col style={{ width: 92 }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên tài sản / Vật dụng</th>
                    <th>ĐVT</th>
                    <th>Đền bù</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item) => (
                    <tr key={item.stt}>
                      <td className="p-stt">{item.stt}</td>
                      <td className="p-name">
                        <span className="p-name-main">{item.name}</span>
                        {item.note ? <span className="p-name-note">{item.note}</span> : null}
                      </td>
                      <td className="p-unit">{item.unit}</td>
                      <td className="p-price">{item.price} đ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {note ? (
          <div className="page-note policy-note">
            <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent-gold-dark)', marginRight: 6 }} />
            {note}
          </div>
        ) : null}
      </div>
    </PageShell>
  );
};
