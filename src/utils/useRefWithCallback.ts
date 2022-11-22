import { useCallback, useRef } from 'react';

type Unmount = () => void;
type Mount = (node: any) => Unmount;

const useRefWithCallback = (onMount: Mount) => {
  const ref = useRef<any>(undefined);
  const callback = useRef<Unmount | undefined>(undefined);

  const setRef = useCallback(
    (node: any) => {
      // execute the unmount method if any
      if (typeof callback.current === 'function') callback.current();

      // flush previous values
      callback.current = undefined;
      if (ref.current) ref.current = undefined;

      // start with fresh values
      ref.current = node;
      if (ref.current) callback.current = onMount(ref.current);
    },
    // reset each time the component mount
    [onMount]
  );

  return setRef;
};

export default useRefWithCallback;
