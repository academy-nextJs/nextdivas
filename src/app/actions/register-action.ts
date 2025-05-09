"use server";

import {
  serverCompleteRegistration,
  serverStartRegistration,
  serverVerifyEmail,
} from "@/utils/service/api/auth/server-auth";
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from "@/validations/auth.validation";

// registerAction
export async function registerAction(step: number, formData: any) {
  try {
    let response;

    if (step === 1) {
      const values = await step1Schema.validate(formData);
      response = await serverStartRegistration(values);
    } else if (step === 2) {
      const values = await step2Schema.validate(formData);
      response = await serverVerifyEmail(values);
    } else if (step === 3) {
      const values = await step3Schema.validate(formData);

      // ✨ اطمینان از ارسال email در مرحله سوم
      if (!formData.email) {
        throw new Error("Email is required for the final step.");
      }

      const finalValues = {
        ...values,
        email: formData.email,
      };

      response = await serverCompleteRegistration(finalValues);
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    return { success: false, message: err.message };
  }
}
