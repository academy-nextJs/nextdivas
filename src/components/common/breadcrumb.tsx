// components/Breadcrumb.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function CustomBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((seg) => seg.length > 0);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <div key={href} className="flex items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {isLast ? (
                    <span className="capitalize text-muted-foreground">
                      {label}
                    </span>
                  ) : (
                    <Link href={href} className="capitalize hover:underline">
                      {label}
                    </Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
