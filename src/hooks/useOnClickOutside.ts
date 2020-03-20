// hooks.js
import { useEffect, MutableRefObject } from "react";

const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
