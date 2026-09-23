'use client';

import dynamic from 'next/dynamic';

const Flipbook = dynamic(() => import('@/components/flipbook/Flipbook'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        color: '#E8CAAB',
        gap: '16px',
        fontFamily: 'sans-serif',
      }}
    >
      <i className="fa-solid fa-book-open fa-spin" style={{ fontSize: '2.5rem' }} />
      <span style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>Đang tải GAJO&apos;S HOUSE Catalogue...</span>
    </div>
  ),
});

export default function FlipbookPage() {
  return <Flipbook />;
}
