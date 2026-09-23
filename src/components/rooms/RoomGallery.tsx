import React from 'react';
import { GalleryItem } from '@/types/room';

interface RoomGalleryProps {
  galleryTop: GalleryItem | null;
  gallerySub: GalleryItem[];
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ galleryTop, gallerySub }) => {
  const items = [galleryTop, ...gallerySub].filter(Boolean) as GalleryItem[];
  if (items.length === 0) return null;

  const [hero, ...subs] = items;

  return (
    <div className="bk-gallery">
      <div className="bk-gallery-item is-hero">
        <img src={hero.src} alt={hero.label} style={{ objectPosition: hero.objectPosition || 'center' }} loading="lazy" />
        <span className="bk-gallery-caption">{hero.label}</span>
      </div>
      {subs.slice(0, 2).map((item) => (
        <div className="bk-gallery-item is-sub" key={item.src}>
          <img src={item.src} alt={item.label} style={{ objectPosition: item.objectPosition || 'center' }} loading="lazy" />
          <span className="bk-gallery-caption">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
