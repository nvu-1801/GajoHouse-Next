import React from 'react';

interface PageShellProps {
  density?: 'hard' | 'soft';
  extraClass?: string;
  pageNum?: string;
  footerLabel?: string;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  density = 'soft',
  extraClass = '',
  pageNum = '',
  footerLabel = "GAJO's HOUSE • Hoài Nhơn",
  children,
}) => {
  if (density === 'hard') {
    return (
      <div className={`page page-cover ${extraClass}`.trim()} data-density="hard">
        {children}
      </div>
    );
  }

  return (
    <div className={`page ${extraClass}`.trim()} data-density={density}>
      <div className="page-content">
        <div className="page-body-center">{children}</div>
        <div className="page-footer">
          <span>{footerLabel}</span>
          <span className="page-number">{pageNum}</span>
        </div>
      </div>
    </div>
  );
};
