'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PageFlip } from 'page-flip';

import { BOOK_DESIGN_HEIGHT, getBookScale, getOptimalBookDimensions } from '@/lib/dims';
import { playPaperSound } from '@/lib/audio';
import { triggerHaptic } from '@/lib/haptic';

import { buildCataloguePages, CATALOGUE_PAGE_COUNT } from './pageRegistry';
import { FlipbookHeader } from './FlipbookHeader';
import { BottomToolbar } from './BottomToolbar';
import { ThumbnailDrawer } from './ThumbnailDrawer';
import { ExportModal } from './ExportModal';
import { BookletModal } from './BookletModal';
import { CataloguePages } from './CataloguePages';
import { PrintLayouts } from './PrintLayouts';

export default function Flipbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [bookScale, setBookScale] = useState(1);
  const [totalPages, setTotalPages] = useState(CATALOGUE_PAGE_COUNT);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isThumbOpen, setIsThumbOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isBookletOpen, setIsBookletOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const soundRef = useRef(soundEnabled);
  soundRef.current = soundEnabled;

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(null), 3000);
  }, []);

  const closeAllModals = useCallback(() => {
    setIsExportOpen(false);
    setIsBookletOpen(false);
  }, []);

  const copyText = useCallback(
    (text: string, successMsg?: string) => {
      triggerHaptic(15);
      navigator.clipboard
        .writeText(text)
        .then(() => showToast(successMsg || 'Đã sao chép!'))
        .catch(() => showToast(text));
    },
    [showToast],
  );

  const goToPage = useCallback((index: number) => {
    triggerHaptic(20);
    if (pageFlipRef.current) pageFlipRef.current.flip(index);
    setIsThumbOpen(false);
  }, []);

  const handleShare = useCallback(() => {
    triggerHaptic(20);
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: "GAJO'S HOUSE - 3D Catalogue",
          text: "Khám phá không gian lưu trú Japandi & Cẩm nang Hoài Nhơn Đông, Gia Lai cùng GAJO's HOUSE!",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      copyText(window.location.href, 'Đã sao chép liên kết Catalogue!');
    }
  }, [copyText]);

  const prepareAndPrint = useCallback(
    async (mode: 'booklet' | 'standard' | 'slides' | 'slides-a3') => {
      closeAllModals();

      let pageStyle = document.getElementById('dynamic-page-print-style') as HTMLStyleElement | null;
      if (!pageStyle) {
        pageStyle = document.createElement('style');
        pageStyle.id = 'dynamic-page-print-style';
        document.head.appendChild(pageStyle);
      }
      if (mode === 'standard') {
        pageStyle.textContent = `@page { size: A4 portrait; margin: 0; }`;
      } else if (mode === 'slides-a3') {
        pageStyle.textContent = `@page { size: A3 landscape; margin: 0; }`;
      } else {
        pageStyle.textContent = `@page { size: A4 landscape; margin: 0; }`;
      }

      document.body.classList.remove('print-mode-booklet', 'print-mode-standard', 'print-mode-slides', 'print-mode-slides-a3');
      document.body.classList.add(`print-mode-${mode}`);

      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready;
        } catch {
          // ignore
        }
      }

      const containerSelector =
        mode === 'booklet'
          ? '.booklet-print-container'
          : mode === 'standard'
            ? '.standard-print-container'
            : '.slides-print-container';

      const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(`${containerSelector} img`));
      imgs.forEach((img) => {
        img.removeAttribute('loading');
        img.decoding = 'sync';
      });

      await Promise.all(
        imgs.map((img) => {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise<void>((resolve) => {
            const done = () => resolve();
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
            setTimeout(resolve, 800);
          });
        }),
      );

      const bgImages = ['/assets/gajo-cover-night.jpg', '/assets/gajo-interior.jpg', '/assets/gajo-facade.jpg'];
      await Promise.all(
        bgImages.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => resolve();
              img.src = src;
            }),
        ),
      );

      await new Promise((r) => setTimeout(r, 200));

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.print();
        });
      });
    },
    [closeAllModals],
  );

  const printBooklet = useCallback(() => prepareAndPrint('booklet'), [prepareAndPrint]);
  const printStandard = useCallback(() => prepareAndPrint('standard'), [prepareAndPrint]);
  const printSlides = useCallback(() => prepareAndPrint('slides'), [prepareAndPrint]);
  const printSlidesA3 = useCallback(() => prepareAndPrint('slides-a3'), [prepareAndPrint]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dims = getOptimalBookDimensions();
    let pf: PageFlip | null = null;
    let isCleanedUp = false;

    const animId = requestAnimationFrame(() => {
      if (isCleanedUp || !containerRef.current) return;
      const currentContainer = containerRef.current;
      const pages = currentContainer.querySelectorAll<HTMLElement>('.page');
      if (!pages || pages.length === 0) {
        console.warn('Flipbook: no .page elements found');
        return;
      }

      try {
        pf = new PageFlip(currentContainer, {
          width: dims.width,
          height: dims.height,
          size: 'fixed',
          minWidth: 280,
          maxWidth: 780,
          minHeight: 400,
          maxHeight: 1150,
          drawShadow: true,
          flippingTime: 650,
          usePortrait: dims.isMobile,
          startPage: 0,
          useMouseEvents: true,
          showCover: true,
          mobileScrollSupport: true,
          clickEventForward: true,
        });

        pf.loadFromHTML(pages);
        setTotalPages(pf.getPageCount() || 12);
        pageFlipRef.current = pf;

        pf.on('flip', (e) => {
          playPaperSound(soundRef.current);
          triggerHaptic(15);
          setCurrentPage(e.data);
        });
      } catch (err) {
        console.error('Failed to initialize PageFlip:', err);
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!pageFlipRef.current) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        pageFlipRef.current.flipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        pageFlipRef.current.flipPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        pageFlipRef.current.flip(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        pageFlipRef.current.flip(pageFlipRef.current.getPageCount() - 1);
      }
    };

    const handleResize = () => {
      if (!pageFlipRef.current) return;
      const next = getOptimalBookDimensions();
      try {
        pageFlipRef.current.update();
        void next;
      } catch {
        // ignore
      }
    };

    const handleAfterPrint = () => {
      document.body.classList.remove('print-mode-booklet', 'print-mode-standard', 'print-mode-slides', 'print-mode-slides-a3');
      const pageStyle = document.getElementById('dynamic-page-print-style');
      if (pageStyle) pageStyle.remove();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('afterprint', handleAfterPrint);

      const instance = pageFlipRef.current || pf;
      if (instance && containerRef.current) {
        try {
          const c = containerRef.current;
          c.querySelectorAll<HTMLElement>('.page').forEach((page) => {
            page.style.display = '';
            page.style.transform = '';
            page.style.zIndex = '';
            page.style.left = '';
            page.style.top = '';
            page.style.width = '';
            page.style.height = '';
            page.classList.remove('--hard', '--soft', '--simple', '--left', '--right', 'stf__item');
            c.appendChild(page);
          });
          c.querySelectorAll('.stf__wrapper').forEach((w) => w.remove());
          c.classList.remove('stf__parent');

          const origRemove = c.remove;
          c.remove = (() => {}) as unknown as typeof c.remove;
          try {
            instance.destroy();
          } catch {
            // cleanup safe
          }
          c.remove = origRemove;
        } catch (err) {
          console.error('Error during flipbook cleanup:', err);
        }
        pageFlipRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const compute = () => setBookScale(getBookScale());
    compute();
    window.addEventListener('resize', compute);
    window.addEventListener('orientationchange', compute);
    return () => {
      window.removeEventListener('resize', compute);
      window.removeEventListener('orientationchange', compute);
    };
  }, []);

  const pages = useMemo(() => buildCataloguePages(), []);

  const pageLabel = `${String(currentPage + 1).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;

  return (
    <>
      {toastMessage && (
        <div className="toast-msg show" id="toast">
          {toastMessage}
        </div>
      )}

      <div className="stage-container">
        <FlipbookHeader
          onOpenBooklet={() => setIsBookletOpen(true)}
          onShare={handleShare}
          onPrintA4={printSlides}
          onPrintA3={printSlidesA3}
        />

        <div
          className="flipbook-viewport"
          style={{
            height: `${Math.round(BOOK_DESIGN_HEIGHT * bookScale)}px`,
            alignItems: 'flex-start',
          }}
        >
          <div
            className="flipbook-container"
            id="flipbook"
            ref={containerRef}
            style={{ transform: `scale(${bookScale})`, transformOrigin: 'top center' }}
          >
            <CataloguePages pages={pages} />
          </div>
        </div>
      </div>

      <BottomToolbar
        pageLabel={pageLabel}
        soundEnabled={soundEnabled}
        onPrev={() => {
          triggerHaptic(15);
          pageFlipRef.current?.flipPrev();
        }}
        onNext={() => {
          triggerHaptic(15);
          pageFlipRef.current?.flipNext();
        }}
        onOpenBooklet={() => setIsBookletOpen(true)}
        onToggleThumbs={() => {
          triggerHaptic(15);
          setIsThumbOpen((v) => !v);
        }}
        onToggleSound={() => {
          triggerHaptic(25);
          setSoundEnabled((v) => {
            const next = !v;
            showToast(`Âm thanh lật sách: ${next ? 'BẬT' : 'TẮT'}`);
            return next;
          });
        }}
        onToggleFullscreen={() => {
          triggerHaptic(20);
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }}
        onOpenExport={() => setIsExportOpen(true)}
      />

      <ThumbnailDrawer
        pages={pages.map((p) => ({ id: p.id, shortLabel: p.shortLabel }))}
        activeIndex={currentPage}
        isOpen={isThumbOpen}
        onSelect={goToPage}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={closeAllModals}
        onOpenBooklet={() => setIsBookletOpen(true)}
        onShare={handleShare}
        onPrintStandard={printStandard}
        onPrintSlides={printSlides}
        onPrintSlidesA3={printSlidesA3}
      />

      <BookletModal
        isOpen={isBookletOpen}
        onClose={closeAllModals}
        onConfirmPrint={printBooklet}
        pages={pages}
      />

      <PrintLayouts pages={pages} />
    </>
  );
}
