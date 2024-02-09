"use client";

import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/admin/buttons";
import { PageLimitSearch } from "@/app/utils/definitions";
import Link from "next/link";
import { useEffect, Key, useState } from "react";

async function getData({ currentPage, limit, search }: PageLimitSearch) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok`,
    { cache: "no-store" }
  );

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
  const [dataKelompok, setDataKelompok] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData({ currentPage, limit, search });
      setDataKelompok(data);
    }

    fetchData();
  }, [currentPage, limit, search]);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {dataKelompok.length > 0 ? (
              dataKelompok?.map(
                (data: {
                  id: Key | null | undefined;
                  nama: string;
                }) => (
                  <div
                    key={data.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="text-sm text-gray-500">{data.nama}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex justify-end gap-2">
                        <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        />
                        <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        />
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
                    <UpdateInvoice id={0} params={"kelompok"} />
                    <DeleteInvoice id={0} params={"kelompok"} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <table className="hidden min-w-full max-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  id
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center">
                  Nama
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataKelompok.length > 0 ? (
                dataKelompok?.map(
                  (data: {
                    id: number;
                    nama: string;
                  }) => (
                    <tr
                      key={data.id}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center">
                        {data.nama}
                      </td>
                      <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                        <UpdateInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        />
                        <DeleteInvoice
                          id={data.id ? Number(data.id) : -1}
                          params={"kelompok"}
                        />
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap px-3 py-3 underline">
                    id
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">Nama</td>

                  <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    <UpdateInvoice id={0} params={"kelompok"} />
                    <DeleteInvoice id={0} params={"kelompok"} />
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
