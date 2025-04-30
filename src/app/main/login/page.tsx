"use client";
import myPhoto from "../../assets/image/login.png";
import myPhoto2 from "../../assets/image/login2.png";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm leading-12 font-medium text-gray-700">
                    به خانواده دلتا خوش اومدی
                  </p>
                  <p className="text-sm leading-8 font-light text-gray-600">
                    با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از
                    پروژه هاتون خبر بگیرید !
                  </p>
                  <div className="flex bg-[#303030] my-6 py-2.5 rounded-2xl ">
                    <button
                      type="button"
                      className="inline-flex flex-1 items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-xl shadow-sm text-white bg-[#8CFF45] hover:bg-[#303030] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      ورود به حساب کاربری
                    </button>
                    <button
                      type="button"
                      className="inline-flex flex-1 items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-xl shadow-sm text-white bg-[#8CFF45] hover:bg-[#303030] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      ساخت حساب کاربری
                    </button>
                  </div>

                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      یا میتونید
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 ">
                <form action="#" method="POST" className="space-y-6 ">
                  <div className="flex gap-3">
                    {/* ایمیل */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        required
                        className="peer block w-full appearance-none rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="email"
                        className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-500"
                      >
                        ایمیل
                      </label>
                    </div>

                    {/* پسوورد */}
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder=" "
                        required
                        className="peer block w-full appearance-none rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm placeholder-transparent shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="password"
                        className="absolute right-3 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-500"
                      >
                        پسوورد
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center"></div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        رمز عبور خود را فراموش کردم
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      ورود به حساب کاربری
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-10">
          <img src={myPhoto2.src} alt="عکس من" />
        </div>
      </div>
      {/* بخش جدید */}
      <div className="relative bg-white dark:bg-dark py-16 sm:py-24 ">
        <div className=" lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 ">
          <div className="relative max-w-md px-6 sm:max-w-3xl lg:px-0 lg:mr-10">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20 space-y-6 ">
              <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
                ما اینحایه فرم داریم
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm  font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md h-12 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md h-12 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add your comment
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* دکمه‌ی ارسال */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  ارسال فرم
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:py-16 lg:py-0">
            <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-10">
              <img src={myPhoto.src} alt="عکس من" className=" " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
