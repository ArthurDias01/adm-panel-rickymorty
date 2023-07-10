//create a use debounce hook

import { useState, useEffect } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsSearching(false);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, isSearching };
}
