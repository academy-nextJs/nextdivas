// src/types/auth.types.ts

export interface LoginPayload {
  email: string;
  password: string;
}

export interface StartRegistrationPayload {
  email: string;
}

export interface VerifyEmailPayload {
  email: string;
  code: string;
}

export interface CompleteRegistrationPayload {
  email: string;
  phone: string;
  password: string;
}
