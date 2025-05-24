"use server";

import { serverLogin } from "@/utils/service/api/auth/server-auth";
import { loginSchema } from "@/validations/auth.validation";
import { LoginPayload } from "@/types/auth.types";

export async function loginAction(email: string, password: string) {
  // const email = formData.get("email")
  // const password = formData.get("password")

  // const email = "preator102@gmail.com"
  // const password = "123456789"

  const response = await fetch(
    "https://delta-project.liara.run/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
