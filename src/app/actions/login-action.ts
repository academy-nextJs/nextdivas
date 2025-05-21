"use server";

import { serverLogin } from "@/utils/service/api/auth/server-auth";
import { loginSchema } from "@/validations/auth.validation";
import { LoginPayload } from "@/types/auth.types";

export async function loginAction(formData: LoginPayload) {
  try {
    const values = await loginSchema.validate(formData);

    const response = await serverLogin(values);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed.");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (err: any) {
    const isYupError = err.name === "ValidationError";
    return {
      success: false,
      message: isYupError ? err.errors?.[0] || "Invalid input" : err.message,
    };
  }
}
