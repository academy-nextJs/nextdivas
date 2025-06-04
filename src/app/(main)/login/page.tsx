// app/login/page.tsx

import AuthForm from "@/components/auth/authForm";
import LoginPicture from "@/components/auth/LoginPicture";

export default function LoginPage() {
  
  return (
    <div className="flex justify-center gap-4 pt-36 pb-14 px-4">
      {/* تصویر سمت راست */}
     <LoginPicture/>

      {/* فرم ورود و ثبت‌نام */}
      <div className="w-1/2 border-2">
        <AuthForm />
      </div>
    </div>
  );
}
