// src/utils/services/api/auth/server-auth.ts

import {
  LoginPayload,
  StartRegistrationPayload,
  VerifyEmailPayload,
  CompleteRegistrationPayload,
} from "@/types/auth.types";
import { customFetch } from "../../interceptor/server-interceptor";

// لاگین
// export const serverLogin = (data: LoginPayload): Promise<any> => {
//   return customFetch("/auth/login", {
//     method: "POST",
//     body: JSON.stringify(data),
//     // body: data,
//   });
// };

// مرحله اول ثبت‌نام: ارسال ایمیل
export const serverStartRegistration = (
  data: StartRegistrationPayload
): Promise<any> => {
  return customFetch("/auth/start-registration", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// مرحله دوم: تأیید ایمیل با کد
export const serverVerifyEmail = (data: VerifyEmailPayload): Promise<any> => {
  return customFetch("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// مرحله سوم: ثبت شماره و رمز عبور
export const serverCompleteRegistration = (
  data: CompleteRegistrationPayload
): Promise<any> => {
  return customFetch("/auth/complete-registration", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
