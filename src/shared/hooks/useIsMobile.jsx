import { useEffect, useState } from 'react';

export function useIsMobile() {

  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia('(max-width: 1023px)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');

    const handler = () => setIsMobile(media.matches);

    media.addEventListener('change', handler);

    return () => {
      media.removeEventListener('change', handler);
    };
  }, []);

  return isMobile;
}
