"use client";

import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/admin/buttons";
import { PageLimitSearch } from "@/app/utils/definitions";
import Link from "next/link";
import { useEffect, Key, useState } from "react";

async function getData({ currentPage, limit, search }: PageLimitSearch) {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/pengujian`,
    {
      method: "GET", // Sesuaikan dengan metode yang Anda butuhkan (GET, POST, dll.)
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.data;
}

export default function TableUser({
  currentPage,
  limit,
  search,
}: {
  limit: number;
  currentPage: number;
  search: string;
}) {
  const [dataPengujian, setDataPengujian] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData({ currentPage, limit, search });
        setDataPengujian(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, limit, search]);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {dataPengujian.length > 0 ? (
              dataPengujian?.map(
                (data: {
                  id: Key | null | undefined;
                  fat: number;
                  snf: number;
                  protein: number;
                  ph: number;
                  hasil: string;
                  message: string;
                  user: {
                    id: number;
                    fullname: string;
                    no_wa: string;
                  };
                  created: string;
                  updated: string;
                }) => (
                  <div
                    key={data.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {data.user.fullname}
                        </p>
                        <p className="text-sm text-gray-500">{data.hasil}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex justify-end gap-2">
                        {/* <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"pengujian"}
                        />
                        <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"pengujian"}
                        /> */}
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">Nama</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={0} params={"pengujian"} />
                    <DeleteInvoice id={0} params={"pengujian"} /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
          <table className="hidden min-w-full max-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Hasil
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Saran
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataPengujian.length > 0 ? (
                dataPengujian?.map(
                  (data: {
                    id: Key | null | undefined;
                    fat: number;
                    snf: number;
                    protein: number;
                    ph: number;
                    hasil: string;
                    message: string;
                    user: {
                      id: number;
                      fullname: string;
                      no_wa: string;
                    };
                    created: string;
                    updated: string;
                  }) => (
                    <tr
                      key={data.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap px-3 py-3">
                        {data.user.fullname}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.hasil}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.message}
                      </td>
                      <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                        {/* <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"pengujian"}
                        />
                        <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"pengujian"}
                        /> */}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap px-3 py-3 underline">Nama</td>
                  <td className="whitespace-nowrap px-3 py-3">Hasil</td>
                  <td className="whitespace-nowrap px-3 py-3">Saran</td>

                  <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    {/* <UpdateInvoice id={0} params={"pengujian"} /> */}
                    {/* <DeleteInvoice id={0} params={"pengujian"} /> */}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
