// src/utils/helper/storage.ts

/**
 * ذخیره مقدار به صورت JSON در localStorage
 */
export const setItem = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * بازیابی مقدار از localStorage و پارس کردن به نوع دلخواه
 */
export const getItem = <T = unknown>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

/**
 * ذخیره مقدار به صورت رشته ساده در localStorage
 */
export const setItemGeneric = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

/**
 * دریافت مقدار به صورت رشته ساده از localStorage
 */
export const getItemGeneric = (key: string): string | null => {
  return localStorage.getItem(key);
};

/**
 * حذف یک آیتم از localStorage در صورت وجود
 */
export const removeItem = (key: string): void => {
  if (!localStorage.getItem(key)) return;
  localStorage.removeItem(key);
};

/**
 * پاک‌سازی کامل localStorage
 */
export const clearStorage = (): void => {
  localStorage.clear();
};
