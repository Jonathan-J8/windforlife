import { useEffect, useState } from 'react';
import isDev from './isDev';
import wait from './wait';

export type FetchResult<T> = {
  data: T;
  state: 'idle' | 'pending' | 'fullfilled' | 'error';
};

function useFetch<T>(url: string, data: T, options?: RequestInit | undefined): FetchResult<T> {
  const [result, setResult] = useState<FetchResult<T>>(() => ({ state: 'idle', data }));

  useEffect(() => {
    const controller = new AbortController();
    setResult({ state: 'pending', data });

    (async () => {
      // simulate fetch pending state
      if (isDev) {
        const ms = Math.ceil(Math.random() * 1000);
        await wait(ms);
      }
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        const json = await res.json();
        setResult({ data: json, state: 'fullfilled' });
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setResult({ data, state: 'error' });
        }
      }
    })();

    return () => controller.abort();
  }, [url, options]);

  return result;
}

export default useFetch;
