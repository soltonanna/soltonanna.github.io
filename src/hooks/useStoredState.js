import { useEffect, useState } from 'react';

// useState that remembers its value in localStorage (fails silently when storage is unavailable).
const useStoredState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* ignore */
    }
  }, [key, value]);

  return [value, setValue];
};

export default useStoredState;
