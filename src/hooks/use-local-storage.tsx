import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 初始化 localStorage 狀態
  const [storageValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  // 自動同步
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storageValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storageValue]);

  return [storageValue, setStoredValue] as const;
}
