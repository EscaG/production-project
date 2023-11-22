import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
  const {
    callback,
    wrapperRef,
    triggerRef,
  } = options;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef;
    const triggerElement = triggerRef;
    if (callback) {
      const options = {
        root: wrapperElement.current,
        rootMargin: '1px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement.current);
    }
    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
