import { useCallback, useRef } from 'react';

type Unmount = () => void;
type Mount = (value: unknown) => Unmount;

const useRefWithCallback = (onMount: Mount) => {
  const ref = useRef<unknown>(undefined);
  const callback = useRef<Unmount>();

  const setRef = useCallback(
    (value: unknown) => {
      // execute the unmount method if any
      if (typeof callback.current === 'function') callback.current();

      // flush previous values
      callback.current = undefined;
      if (ref.current) ref.current = undefined;

      // start with fresh values
      ref.current = value;
      if (ref.current) callback.current = onMount(ref.current);
    },
    // reset each time the component mount
    [onMount]
  );

  return setRef;
};

export default useRefWithCallback;
