import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { PageHeaderBlock } from '@/components/flipbook/PageHeaderBlock';
import { rooms } from '@/data/rooms';

interface PageProps {
  pageNum?: string;
}

export const PageRoomIndex: React.FC<PageProps> = ({ pageNum = '' }) => {
  return (
    <PageShell density="soft" pageNum={pageNum}>
      <PageHeaderBlock
        eyebrow="ROOM DIRECTORY"
        title="09 Trạm Dừng Cảm Xúc"
        desc="Mỗi căn phòng, một trạm dừng — mỗi trạm dừng, một câu chuyện"
      />
      <div className="page-main-content">
        <div className="room-index-grid">
          {rooms.map((room) => (
            <div className="room-index-card" key={room.id}>
              <div className="room-index-thumb">
                {room.isVip ? <span className="room-index-vip">VIP</span> : null}
                <img src={room.heroImage} alt={room.code} />
                <span className="room-index-code">{room.code}</span>
              </div>
              <div className="room-index-info">
                <span className="room-index-meaning">{room.personalityVi || room.personality}</span>
                <span className="room-index-price">
                  {room.priceFormatted} <small>đ/đêm</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
};
