import { useEffect, useState } from 'react';
import typeOf from './typeOf';
import wait from './wait';

export type FetchResult = {
  data: any;
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
      await wait(500);
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        const json = await res.json();
        setResult({ data: json, type: typeOf(json), state: 'fullfilled' });
      } catch (error) {
        setResult({ data: `${error}`, type: 'string', state: 'error' });
      }
    })();

    return () => controller.abort();
  }, [url, options]);

  return result;
};

export default useFetch;
