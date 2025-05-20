import React from "react";
import { commentType } from "@/types/landing.types";
import { Skeleton } from "@/components/ui/skeletone";

type Props = {
  comment: commentType[];
  loading: boolean;
  error: string | null;
};

export const Comment = ({ comment, loading, error }: Props) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="w-1/3 h-4" />
            <Skeleton className="w-full h-12" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-sm">{error}</p>;
  }

  if (!comment?.length) {
    return <p className="text-gray-500 text-sm">کامنتی ثبت نشده است.</p>;
  }

  return (
    <div className="space-y-6">
      {comment.map((item) => (
        <div
          key={item.id}
          className="p-4 border border-gray-200 rounded-xl shadow-sm"
        >
          <div className="font-semibold text-base">{item.userFullName}</div>
          <div className="text-gray-600 text-sm mt-1">{item.message}</div>
          <div className="text-xs text-gray-400 mt-2">
            {new Date(item.createdAt).toLocaleDateString("fa-IR")}
          </div>
        </div>
      ))}
    </div>
  );
};
