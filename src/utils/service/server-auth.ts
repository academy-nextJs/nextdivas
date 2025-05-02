import {
  LoginPayload,
  StartRegistrationPayload,
  VerifyEmailPayload,
  CompleteRegistrationPayload,
} from "@/types/auth.types";
import { customFetch } from "./interceptor/server-interceptor";

// لاگین
export const serverLogin = (data: LoginPayload) => {
  return customFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// مرحله اول ثبت‌نام: ارسال ایمیل
export const serverStartRegistration = (data: StartRegistrationPayload) => {
  return customFetch("/auth/start-registration", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// مرحله دوم: تأیید ایمیل با کد
export const serverVerifyEmail = (data: VerifyEmailPayload) => {
  return customFetch("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// مرحله سوم: ثبت شماره و رمز عبور
export const serverCompleteRegistration = (
  data: CompleteRegistrationPayload
) => {
  return customFetch("/auth/complete-registration", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
