import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
