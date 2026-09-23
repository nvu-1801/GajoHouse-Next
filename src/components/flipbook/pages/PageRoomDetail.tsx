import React from 'react';
import { PageShell } from '@/components/flipbook/PageShell';
import { Room } from '@/types/room';

interface PageRoomDetailProps {
  room: Room;
  pageNum?: string;
}

export const PageRoomDetail: React.FC<PageRoomDetailProps> = ({ room, pageNum = '' }) => {
  const subImages = room.gallerySub.slice(0, 2);

  return (
    <PageShell density="soft" pageNum={pageNum}>
      <div className="page-header">
        <div className="page-eyebrow">TRẠM {String(room.index).padStart(2, '0')} / 09</div>
        <h2 className="page-title">{room.code}</h2>
        <div className="room-detail-meaning">{room.stationStory?.meaning || room.personalityVi || room.personality}</div>
      </div>

      <div className="page-main-content">
        <img src={room.heroImage} className="room-detail-hero" alt={room.code} />

        {subImages.length > 0 ? (
          <div className="room-detail-thumbs">
            {subImages.map((img) => (
              <img key={img.src} src={img.src} alt={img.label} style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined} />
            ))}
          </div>
        ) : null}

        {room.stationStory?.story ? <p className="room-detail-story">{room.stationStory.story}</p> : null}

        <div className="room-spec-row">
          {room.specs.map((spec) => (
            <div className="room-spec-chip" key={spec.label}>
              <strong>{spec.value}</strong>
              <span>{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="room-detail-amenities">
          {room.curatedAmenities.map((item) => (
            <div key={item}>
              <i className="fa-solid fa-circle-check" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="room-detail-price-row">
          <span className="rdp-type">{room.type}</span>
          <span className="rdp-price">
            {room.priceFormatted} <small>{room.priceUnit}</small>
          </span>
        </div>
      </div>
    </PageShell>
  );
};
