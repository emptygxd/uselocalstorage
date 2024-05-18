import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || '');

  const setData = (value: string) => {
    if (!value) {
      localStorage.setItem(key, initialValue);
      setValue(initialValue);
    } else {
      localStorage.setItem(key, value);
      setValue(value);
    }
  };

  const removeData = () => {
    localStorage.removeItem(key);
    setValue('');
  };

  const resetData = () => {
    localStorage.setItem(key, initialValue);
    setValue(initialValue);
  };

  return { value, setData, removeData, resetData };
};
