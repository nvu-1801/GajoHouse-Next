import React from 'react';

interface PageHeaderBlockProps {
  eyebrow?: string;
  title: string;
  desc?: string;
  extraClass?: string;
}

export const PageHeaderBlock: React.FC<PageHeaderBlockProps> = ({
  eyebrow = '',
  title,
  desc = '',
  extraClass = '',
}) => {
  return (
    <div className={`page-header ${extraClass}`.trim()}>
      {eyebrow ? <div className="page-eyebrow">{eyebrow}</div> : null}
      <h2 className="page-title">{title}</h2>
      {desc ? <p className="page-desc">{desc}</p> : null}
    </div>
  );
};
