import { useEffect } from 'react';

function useWindowEvent<K extends keyof WindowEventMap>(event: K, callback: (e: WindowEventMap[K]) => void) {
  useEffect(() => {
    window.addEventListener(event, callback);

    return () => window.removeEventListener(event, callback);
  }, []);
}

export default useWindowEvent;
