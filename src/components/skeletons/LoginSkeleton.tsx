"use client";

import { Skeleton } from "../../components/ui/skeletone";

export default function FullPageSkeleton() {
  return (
    <div className="flex min-h-full bg-[#232323]">
      {/* Image Section (only on large screens) */}
      <div className="relative hidden w-0 flex-1 lg:block items-start mr-40 mt-20">
        <Skeleton className="w-[500px] h-[500px] rounded-xl" />
      </div>

      {/* Form Section */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-8 space-y-4">
            <Skeleton className="w-3/4 h-4 rounded-md ml-auto" />
            <Skeleton className="w-full h-4 rounded-md ml-auto" />

            {/* Mode toggle buttons */}
            <div className="flex bg-[#303030] my-6 py-1.5 rounded-2xl gap-2">
              <Skeleton className="w-1/2 h-8 rounded-xl" />
              <Skeleton className="w-1/2 h-8 rounded-xl" />
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full rounded-2xl" />
              <Skeleton className="h-10 w-full rounded-2xl" />
            </div>

            {/* Divider */}
            <Skeleton className="w-full h-[1px] bg-gray-500 mt-6" />
            <Skeleton className="w-24 h-4 mx-auto rounded-md mt-2" />

            {/* Form fields */}
            <div className="space-y-4 mt-6">
              <Skeleton className="h-10 rounded-md" />
              <Skeleton className="h-10 rounded-md" />
            </div>

            {/* Action buttons */}
            <div className="flex justify-between mt-6">
              <Skeleton className="w-20 h-8 rounded-md" />
              <Skeleton className="w-24 h-8 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
