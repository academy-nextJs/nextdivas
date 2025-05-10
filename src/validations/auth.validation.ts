import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const step1Schema = Yup.object({
  email: Yup.string().email().required(),
});

export const step2Schema = Yup.object({
  email: Yup.string().email().required(),
  code: Yup.string().length(6).required(),
});

export const step3Schema = Yup.object({
  phone: Yup.string()
    .matches(/^09\d{9}$/)
    .required(),
  password: Yup.string().min(6).required(),
});
