import React from 'react';
import { Room } from '@/types/room';

interface RoomDetailHeroProps {
  room: Room;
}

export const RoomDetailHero: React.FC<RoomDetailHeroProps> = ({ room }) => {
  const meaning = room.stationStory?.meaning || room.personalityVi || room.personality;

  return (
    <section className="bk-detail-hero">
      <img src={room.heroImage} alt={room.code} style={room.heroImagePosition ? { objectPosition: room.heroImagePosition } : undefined} />
      <div className="bk-detail-hero-inner">
        <div className="bk-detail-counter">
          Trạm {String(room.index).padStart(2, '0')} / 09 &bull; {room.personality}
        </div>
        <div className="bk-detail-meaning">{meaning}</div>
        <h1 className="bk-detail-code">{room.code}</h1>
        {room.stationStory?.story ? <p className="bk-detail-story">{room.stationStory.story}</p> : null}
        <div className="bk-detail-hero-footer">
          <span className="bk-detail-type">{room.type}</span>
          <span className="bk-detail-price">
            {room.priceFormatted} <small>{room.priceUnit}</small>
          </span>
        </div>
      </div>
    </section>
  );
};
