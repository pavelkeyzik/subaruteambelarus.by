import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'throttle-debounce';

export function useMenuVisibility(minimalOffset) {
  const [lastPosition, setLastPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleChangedWindowPosition);

    return () => {
      window.removeEventListener('scroll', handleChangedWindowPosition);
    };
  }, [lastPosition]);

  const handleChangedWindowPosition = throttle(
    300,
    useCallback(() => {
      const currentPosition = window.pageYOffset;

      if (currentPosition < minimalOffset) {
        return;
      }

      if (currentPosition > lastPosition && isVisible) {
        setIsVisible(false);
      }

      if (currentPosition < lastPosition && !isVisible) {
        setIsVisible(true);
      }

      setLastPosition(window.pageYOffset);
    }, [lastPosition])
  );

  return [isVisible];
}
