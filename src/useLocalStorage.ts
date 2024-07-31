import { useState } from "react"

export function useLocaleStorage<T>(key: string, startValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    };

    try {
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
  });

  function save(newValue: T | ((v: T) => T)) {
    const valueToStorage = newValue instanceof Function
      ? newValue(value)
      : newValue;

    localStorage.setItem(key, JSON.stringify(valueToStorage));
    setValue(valueToStorage);
  };

  return [value, save];
}