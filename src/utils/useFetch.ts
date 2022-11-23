import { useEffect, useState } from 'react';
import isDev from './isDev';
import wait from './wait';
import typeOf from './typeOf';

export type FetchResult = {
  data: unknown;
  type: string;
  state: 'idle' | 'pending' | 'fullfilled' | 'error';
};

const defaultResult: FetchResult = { data: undefined, type: 'undefined', state: 'idle' };

const useFetch = (url: string, options?: RequestInit | undefined): FetchResult => {
  const [result, setResult] = useState<FetchResult>({ ...defaultResult });

  useEffect(() => {
    const controller = new AbortController();
    setResult({ ...defaultResult, state: 'pending' });

    (async () => {
      if (isDev) {
        // simulate fetch pending state
        const ms = Math.ceil(Math.random() * 500);
        await wait(ms);
      }
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        const json = await res.json();
        setResult({ data: json, type: typeOf(json), state: 'fullfilled' });
      } catch (error: unknown) {
        if (error?.name !== 'AbortError') setResult({ data: `${url}: ${error}`, type: 'string', state: 'error' });
      }
    })();

    return () => controller.abort();
  }, [url, options]);

  return result;
};

export default useFetch;
