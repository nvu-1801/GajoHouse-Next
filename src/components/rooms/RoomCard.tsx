import React from 'react';
import Link from 'next/link';
import { Room } from '@/types/room';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Link href={`/rooms/${room.id}`} className="bk-room-card">
      <div className="bk-room-card-media">
        <span className="bk-room-index">{String(room.index).padStart(2, '0')} / 09</span>
        {room.isVip ? <span className="bk-room-vip">Đặc biệt</span> : null}
        <img src={room.heroImage} alt={room.code} loading="lazy" />
        <span className="bk-room-code">{room.code}</span>
      </div>
      <div className="bk-room-body">
        <span className="bk-room-meaning">{room.stationStory?.meaning || room.personality}</span>
        <span className="bk-room-tagline">&ldquo;{room.stationStory?.shortTagline || room.tagline}&rdquo;</span>
        <div className="bk-room-meta">
          <span className="bk-room-price">
            {room.priceFormatted} <small>đ/đêm</small>
          </span>
          <span className="bk-room-cta">
            Khám phá <i className="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </Link>
  );
};
