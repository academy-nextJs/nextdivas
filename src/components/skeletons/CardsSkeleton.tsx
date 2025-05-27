"use client";
import { Card } from "@heroui/react";
import {Skeleton} from "@heroui/skeleton";

interface CardsSkeletonProps {
  stly?: string;
}

export default function CardsSkeleton({ stly }: CardsSkeletonProps) {
  return (
    <Card className={`h-[350px] w-[300px] rounded-[40px] max-sm:w-[230px] p-4 mb-8 ${stly}`}>
      <Skeleton className="rounded-2xl animate-pulse bg-neutral-900">
        <div className="h-40 rounded-2xl bg-neutral-900" />
      </Skeleton>
      <div className="space-y-2 mt-6">
        <Skeleton className="m-2 rounded-2xl animate-pulse bg-neutral-400 ">
          <div className="h-5 rounded-2xl bg-neutral-400" />
        </Skeleton>
        <Skeleton className="m-2 rounded-2xl animate-pulse bg-neutral-400">
          <div className="h-5 rounded-2xl bg-neutral-400" />
        </Skeleton>
        <Skeleton className="m-2 rounded-2xl animate-pulse bg-neutral-400">
          <div className="h-5 rounded-2xl bg-neutral-400" />
        </Skeleton>
        <Skeleton className="my-4 rounded-xl animate-pulse bg-neutral-400">
          <div className="h-7 rounded-xl bg-neutral-400" />
        </Skeleton>
      </div>
    </Card>
  );
}

