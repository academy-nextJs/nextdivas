// src/utils/service/api/auth/auth.ts

import axiosInstance from "../../interceptor/axiosInstance";
import {
  LoginPayload,
  StartRegistrationPayload,
  VerifyEmailPayload,
  CompleteRegistrationPayload,
} from "@/types/auth.types";

// لاگین
export const login = (data: LoginPayload) => {
  return axiosInstance.post("/auth/login", data);
};

// مرحله اول ثبت‌نام: ارسال ایمیل
export const startRegistration = (data: StartRegistrationPayload) => {
  return axiosInstance.post("/auth/start-registration", data);
};

// مرحله دوم: تأیید ایمیل با کد
export const verifyEmail = (data: VerifyEmailPayload) => {
  return axiosInstance.post("/auth/verify-email", data);
};

// مرحله سوم: ثبت شماره تماس و رمز عبور
export const completeRegistration = (data: CompleteRegistrationPayload) => {
  return axiosInstance.post("/auth/complete-registration", data);
};
