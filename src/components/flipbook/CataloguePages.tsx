import React from 'react';
import { CataloguePage } from '@/components/flipbook/pageRegistry';

interface CataloguePagesProps {
  pages: CataloguePage[];
}

export const CataloguePages: React.FC<CataloguePagesProps> = ({ pages }) => {
  return <>{pages.map((page) => React.cloneElement(page.node, { key: page.id }))}</>;
};
