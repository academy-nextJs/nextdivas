// app/login/page.tsx
import Image from "next/image";
import myPhoto2 from "../../../assets/image/login2.png";
import AuthForm from "@/components/auth/authForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center gap-16 border border-red-600 pt-36">

      {/* تصویر سمت راست */}
      <Image src={myPhoto2} alt="عکس من" className="" />

      {/* فرم ورود و ثبت‌نام */}
      <AuthForm />
    </div>
  );
}
