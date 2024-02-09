import { Metadata } from "next";
import Link from "next/link";
import CardTotal from "@/app/ui/admin/cardTotal";
import React from "react";
import { Suspense } from "react";
import Table from "@/app/ui/admin/user/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Dashboard ",
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    limit?: number;
    page?: string;
    search?: string;
  };
}) {
  const limit = Number(searchParams?.limit) || 10;
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  const totalPages = 10;

  return (
    <div className="">
      <div className="flex justify-between items-center m-auto">
        <h3 className="text-black text-[1.18rem] md:text-2xl font-semibold">
          Tinjauan Keseluruhan
        </h3>
        <Link
          href="/"
          className="text-gray-500 text-base-md md:text-xl font-medium"
        >
          Dashboard
        </Link>
      </div>
      <div className="">
        {/* <CardTotal /> */}
        <Suspense
          key={limit + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table limit={limit} currentPage={currentPage} search={search} />
        </Suspense>
      </div>
    </div>
  );
}
