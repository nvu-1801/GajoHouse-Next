import React from 'react';
import type { Metadata } from 'next';
import { ASSET_SECTIONS, ASSET_NOTES } from '@/data/asset-policy';

export const metadata: Metadata = {
  title: "Quy Định & Đền Bù Tài Sản — GAJO'S HOUSE",
  description: 'Bảng quy định và báo giá đền bù tài sản khi lưu trú tại GAJO\'s HOUSE.',
};

export default function PolicyPage() {
  return (
    <main className="bk-main bk-narrow">
      <div className="bk-section-head">
        <span className="bk-eyebrow">House Policy</span>
        <h1 className="bk-title">
          Quy Định &amp; <span className="bk-script">Đền Bù</span>
        </h1>
        <p className="bk-lead">
          Áp dụng khi tài sản bị mất, rơi vỡ, biến dạng hoặc hư hỏng do lỗi chủ quan của khách lưu trú. Giá đã
          bao gồm giá trị tài sản và chi phí vận chuyển, lắp đặt, nhân công thay thế.
        </p>
      </div>

      {ASSET_SECTIONS.map((section) => (
        <div className="bk-section-block" key={section.id} style={{ marginTop: 34 }}>
          <div className="bk-section-label">
            <span className="bk-roman">{section.id}</span>
            <div>
              <h3>{section.title}</h3>
              <p>{section.note}</p>
            </div>
          </div>
          <div className="bk-table-wrap">
            <table className="bk-table">
              <thead>
                <tr>
                  <th style={{ width: 46 }}>STT</th>
                  <th>Tên tài sản / Vật dụng</th>
                  <th style={{ width: 70 }}>ĐVT</th>
                  <th style={{ width: 130 }}>Đơn giá đền bù</th>
                  <th style={{ width: 230 }}>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item) => (
                  <tr key={item.stt}>
                    <td>{item.stt}</td>
                    <td className="bk-td-name">{item.name}</td>
                    <td>{item.unit}</td>
                    <td className="bk-td-price">{item.price} đ</td>
                    <td>{item.note || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="bk-section-block">
        <div className="bk-section-label">
          <span className="bk-roman">✦</span>
          <div>
            <h3>Nguyên tắc bổ sung</h3>
            <p>Áp dụng linh hoạt và minh bạch</p>
          </div>
        </div>
        <div className="bk-info-list">
          {ASSET_NOTES.map((note) => (
            <div className="bk-info-item" key={note.title}>
              <span className="bk-info-icon">
                <i className="fa-solid fa-circle-info" />
              </span>
              <div className="bk-info-body">
                <h3>{note.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: note.desc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
