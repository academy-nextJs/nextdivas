"use server";

import * as Yup from "yup";

// ✏️ تعریف اسکیمای yup برای login
const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

// ✏️ تعریف اسکیمای yup برای register
const registerSchema = Yup.object({
  email: Yup.string().email().required(),
  code: Yup.string().length(6).required(),
  phone: Yup.string()
    .matches(/^09\d{9}$/)
    .required(),
  password: Yup.string().min(6).required(),
});

// ✅ لاگین
export async function loginAction(formData: {
  email: string;
  password: string;
}) {
  try {
    const values = await loginSchema.validate(formData);

    const res = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}

// ✅ ثبت‌نام
export async function registerAction(formData: {
  email: string;
  code: string;
  phone: string;
  password: string;
}) {
  try {
    const values = await registerSchema.validate(formData);

    const res = await fetch("https://api.example.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}
