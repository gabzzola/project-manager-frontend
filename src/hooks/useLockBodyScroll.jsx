import { useLayoutEffect } from 'react';

export function useLockBodyScroll(isLocked) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}
