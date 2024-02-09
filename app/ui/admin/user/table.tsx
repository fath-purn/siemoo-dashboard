"use client";

import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/admin/buttons";
import { PageLimitSearch } from "@/app/utils/definitions";
import Link from "next/link";
import { useEffect, Key, useState } from "react";

async function getData({ currentPage, limit, search }: PageLimitSearch) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/user`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.data;
}

export default async function TableUser({
  currentPage,
  limit,
  search,
}: {
  limit: number;
  currentPage: number;
  search: string;
}) {
  const [dataUser, setDataUser] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search });
      setDataUser(data);
    }

    fetchData();
  }, [currentPage, limit, search]);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {dataUser.length > 0 ? (
              dataUser?.map(
                (data: {
                  id: Key | null | undefined;
                  email: string;
                  fullname: string;
                  sapi: string;
                  no_wa: string;
                  rt: number;
                  rw: number;
                  kelompok: object;
                  role: string;
                  created: string;
                  updated: string;
                }) => (
                  <div
                    key={data.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="text-sm text-gray-500">{data.fullname}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex justify-end gap-2">
                        {/* <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        /> */}
                        {/* <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
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
                    {/* <UpdateInvoice id={0} params={"kelompok"} /> */}
                    {/* <DeleteInvoice id={0} params={"kelompok"} /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
          <table className="hidden min-w-full max-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Sapi
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  No Wa
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  RT
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  RW
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Kelompok
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataUser.length > 0 ? (
                dataUser?.map(
                  (data: {
                    id: Key | null | undefined;
                    email: string;
                    fullname: string;
                    sapi: string;
                    no_wa: string;
                    rt: number;
                    rw: number;
                    kelompok: {
                      id: number;
                      nama: string;
                    };
                    role: string;
                    created: string;
                    updated: string;
                  }) => (
                    <tr
                      key={data.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.fullname}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.sapi}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.no_wa}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.rt}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.rw}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.kelompok.nama}
                      </td>
                      <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                        {/* <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        /> */}
                        {/* <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        /> */}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap px-3 py-3 underline">email</td>
                  <td className="whitespace-nowrap px-3 py-3">Nama</td>
                  <td className="whitespace-nowrap px-3 py-3">Sapi</td>
                  <td className="whitespace-nowrap px-3 py-3">No Wa</td>
                  <td className="whitespace-nowrap px-3 py-3">RT</td>
                  <td className="whitespace-nowrap px-3 py-3">RW</td>
                  <td className="whitespace-nowrap px-3 py-3">Kelompok</td>

                  <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    {/* <UpdateInvoice id={0} params={"kelompok"} />
                    <DeleteInvoice id={0} params={"kelompok"} /> */}
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
