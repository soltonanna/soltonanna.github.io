import { useEffect } from 'react';

let locks = 0;

// Locks page scroll while `active` is true. Counts nested locks (menu + modal).
const useLockBodyScroll = (active) => {
  useEffect(() => {
    if (!active) return undefined;
    locks += 1;
    document.body.classList.add('is-locked');
    return () => {
      locks -= 1;
      if (locks === 0) document.body.classList.remove('is-locked');
    };
  }, [active]);
};

export default useLockBodyScroll;
