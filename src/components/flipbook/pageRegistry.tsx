import React from 'react';

import { CoverFront } from '@/components/flipbook/pages/CoverFront';
import { Page01Sanctuary } from '@/components/flipbook/pages/Page01Sanctuary';
import { PageStayAmenities } from '@/components/flipbook/pages/PageStayAmenities';
import { Page05Dining } from '@/components/flipbook/pages/Page05Dining';
import { Page06Coffee } from '@/components/flipbook/pages/Page06Coffee';
import { CoverBack } from '@/components/flipbook/pages/CoverBack';

import { PageCuisine } from '@/components/flipbook/pages/PageCuisine';
import { PageTravel } from '@/components/flipbook/pages/PageTravel';
import { PageGuide } from '@/components/flipbook/pages/PageGuide';
import { PageCheckout } from '@/components/flipbook/pages/PageCheckout';
import { PagePolicy } from '@/components/flipbook/pages/PagePolicy';

import { ASSET_SECTIONS } from '@/data/asset-policy';

export interface CataloguePage {
  id: string;
  title: string;
  shortLabel: string;
  node: React.ReactElement;
}

interface PageDef {
  id: string;
  title: string;
  shortLabel: string;
  render: (pageNum: string) => React.ReactElement;
}

function buildDefs(): PageDef[] {
  const defs: PageDef[] = [
    { id: 'cover-front', title: 'Bìa Trước', shortLabel: 'Bìa Trước', render: () => <CoverFront /> },
    { id: 'welcome', title: 'Lời Ngỏ', shortLabel: 'Lời Ngỏ', render: (p) => <Page01Sanctuary pageNum={p} /> },
    { id: 'stay-amenities', title: 'Nhận Phòng & Tiện Nghi', shortLabel: 'Lưu Trú', render: (p) => <PageStayAmenities pageNum={p} /> },
    { id: 'dining', title: 'Hệ Sinh Thái Ẩm Thực', shortLabel: 'Ẩm Thực', render: (p) => <Page05Dining pageNum={p} /> },
    { id: 'coffee', title: 'Góc Cà Phê & Chill', shortLabel: 'Cà Phê', render: (p) => <Page06Coffee pageNum={p} /> },
    { id: 'cuisine', title: 'Hương Vị Đặc Sản', shortLabel: 'Đặc Sản', render: (p) => <PageCuisine pageNum={p} /> },
    { id: 'travel', title: 'Khám Phá Hoài Nhơn', shortLabel: 'Khám Phá', render: (p) => <PageTravel pageNum={p} /> },
    {
      id: 'policy-1',
      title: 'Quy Định Đền Bù (I - II)',
      shortLabel: 'Đền Bù 1',
      render: (p) => (
        <PagePolicy
          sections={ASSET_SECTIONS.slice(0, 2)}
          pageNum={p}
          eyebrow="HOUSE POLICY"
          title="Quy Định & Đền Bù"
          desc="Áp dụng khi tài sản mất, rơi vỡ hoặc hư hỏng do lỗi chủ quan"
          note="Nguyên tắc chung: hư hỏng nhẹ có thể khắc phục — GAJO's HOUSE chỉ thu chi phí sửa chữa thực tế, không thu toàn bộ giá trị mua mới."
        />
      ),
    },
    {
      id: 'policy-2',
      title: 'Quy Định Đền Bù (III - IV)',
      shortLabel: 'Đền Bù 2',
      render: (p) => (
        <PagePolicy
          sections={ASSET_SECTIONS.slice(2)}
          pageNum={p}
          eyebrow="HOUSE POLICY"
          title="Vật Dụng & Đồ Vải"
          desc="Giá đã gồm giá trị tài sản, vận chuyển, lắp đặt & nhân công"
          note="Hư hỏng nhẹ có thể khắc phục: thu phí theo chi phí sửa chữa thực tế. Vệ sinh đặc biệt (nôn, sầu riêng, hải sản nặng mùi): phụ thu 500.000đ/lần."
        />
      ),
    },
    { id: 'guide', title: 'Sổ Tay Lưu Trú', shortLabel: 'Cẩm Nang', render: (p) => <PageGuide pageNum={p} /> },
    { id: 'checkout', title: 'Trước Khi Rời Đi', shortLabel: 'Checklist', render: (p) => <PageCheckout pageNum={p} /> },
    { id: 'cover-back', title: 'Bìa Sau', shortLabel: 'Bìa Sau', render: () => <CoverBack /> },
  ];

  return defs;
}

export const CATALOGUE_PAGE_COUNT = buildDefs().length;

export function buildCataloguePages(): CataloguePage[] {
  return buildDefs().map((def, index) => ({
    id: def.id,
    title: def.title,
    shortLabel: def.shortLabel,
    node: def.render(String(index + 1).padStart(2, '0')),
  }));
}
