import { useCallback, useRef } from 'react';

type Unmount = () => void;
type Mount = (node: any) => Unmount;

const useRefWithCallback = (onMount: Mount) => {
  const nodeRef = useRef<any>(null);
  const callback = useRef<Unmount | undefined>(undefined);

  const setRef = useCallback(
    (node: any) => {
      if (typeof callback.current === 'function') callback.current();

      callback.current = undefined;
      nodeRef.current = node;

      if (nodeRef.current) callback.current = onMount(nodeRef.current);
    },
    [onMount]
  );

  return setRef;
};

export default useRefWithCallback;
