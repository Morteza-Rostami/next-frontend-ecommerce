import { useEffect, useRef } from "react";

export function useEffectOnce(func: Function) {
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      func();
      ref.current = false;
    }
  }, [])
}