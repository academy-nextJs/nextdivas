// src/utils/helper/cookie.ts

/**
 * تنظیم یک کوکی با مقدار JSON
 * @param key کلید کوکی
 * @param value مقدار به صورت JSON
 * @param days مدت زمان نگهداری کوکی به روز (اختیاری، پیش‌فرض 7 روز)
 */
export const setCookie = (key: string, value: unknown, days = 7): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${key}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires}; path=/`;
};

/**
 * گرفتن مقدار کوکی و تبدیل به نوع دلخواه
 * @param key کلید کوکی
 */
export const getCookie = <T = unknown>(key: string): T | null => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(`${key}=`));
  if (!cookie) return null;
  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch {
    return null;
  }
};

/**
 * تنظیم یک کوکی ساده با مقدار رشته‌ای
 * @param key کلید کوکی
 * @param value مقدار رشته‌ای
 * @param days مدت زمان نگهداری کوکی به روز (اختیاری، پیش‌فرض 7 روز)
 */
export const setCookieGeneric = (
  key: string,
  value: string,
  days = 7
): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${key}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

/**
 * دریافت مقدار یک کوکی به صورت رشته ساده
 * @param key کلید کوکی
 */
export const getCookieGeneric = (key: string): string | null => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(`${key}=`));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
};

/**
 * حذف یک کوکی با تنظیم تاریخ انقضا در گذشته
 * @param key کلید کوکی
 */
export const removeCookie = (key: string): void => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

/**
 * پاک کردن همه کوکی‌ها در دامنه فعلی
 * هشدار: این تابع همه کوکی‌های موجود را پاک می‌کند
 */
export const clearCookies = (): void => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const key = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
};
