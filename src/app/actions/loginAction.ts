"use server";

import { serverLogin } from "@/utils/service/api/auth/server-auth";
import { loginSchema } from "@/validations/auth.validation";

export async function loginAction(formData: any) {
  try {
    const values = await loginSchema.validate(formData);

    const response = await serverLogin(values);
    const data = await response.json();

    return data;
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}
