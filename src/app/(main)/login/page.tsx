// app/login/page.tsx
import Image from "next/image";
import myPhoto2 from "../../../assets/image/login2.png";
import AuthForm from "@/components/auth/authForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-full bg-[#232323]">
      {/* تصویر سمت راست */}
      <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-20">
        <Image
          src={myPhoto2}
          alt="عکس من"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* فرم ورود و ثبت‌نام */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
