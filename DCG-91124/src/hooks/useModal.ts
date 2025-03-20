import { useEffect, useCallback } from 'react';

export function useModal(isOpen: boolean, onClose: () => void) {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      
      // Store original padding to prevent layout shift
      const originalPadding = window.getComputedStyle(document.body).paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
        document.body.style.paddingRight = originalPadding;
      };
    }
  }, [isOpen, handleEsc]);

  return {
    handleEsc
  };
}