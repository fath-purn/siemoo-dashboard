"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/admin/button";
import { useFormState, useFormStatus } from "react-dom";
import { formUpdateHandlerLapak } from "@/app/utils/actions";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {id: 'Kg', nama: "Kg"},
  {id: 'Liter', nama: "Liter"},
  {id: 'Buah', nama: "Buah"},
  {id: 'Ekor', nama: "Ekor"},
]

export default function FormUpdate({ id }: { id: string }) {
  const [code, action] = useFormState(formUpdateHandlerLapak, undefined);
  const [image1, setImage1] = useState<File>();
  const [linkImage1, setLinkImage1] = useState<string>();
  const [error, setError] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [harga, setHarga] = useState<string>("");
  const [stok, setStok] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [idMenu, setIdMenu] = useState<string>("");

  const getArtikel = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/warung/${id}`
    );

    if (!res.ok) {
      setError("Failed to fetch data");
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    setNama(data.data.nama);
    setHarga(data.data.harga);
    setStok(data.data.stok);
    setDeskripsi(data.data.deskripsi);
    setIdMenu(data.data.menu);
    setLinkImage1(data.data.Media[0].link);
  };

  useEffect(() => {
    getArtikel();
  }, []);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Update Lapak
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="image"
                type="file"
                name="image"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLinkImage1("");
                    setImage1(file);
                  }
                }}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="relative flex flex-row gap-3 mt-3">
              {image1 && (
                <span>
                  <Image
                    src={URL.createObjectURL(image1)}
                    width={100}
                    height={100}
                    alt={image1.name}
                  />
                  <p className="mt-2 text-gray-700 text-xs font-normal">
                    {image1.name}
                  </p>
                </span>
              )}
              {linkImage1 && (
                <span>
                  <Image
                    src={linkImage1}
                    width={100}
                    height={100}
                    alt={linkImage1}
                  />
                  <Link
                    href={linkImage1}
                    className="mt-2 text-gray-700 text-xs font-normal"
                  >
                    <p className="text-center">Gambar</p>
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="nama"
            >
              Nama 
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="nama"
                type="text"
                name="nama"
                placeholder="Masukkan nama"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="harga"
            >
              harga
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="harga"
                type="text"
                name="harga"
                placeholder="Masukkan harga"
                required
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="deskripsi"
                type="text"
                name="deskripsi"
                placeholder="Masukkan deskripsi"
                required
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="stok"
            >
              Stok
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="stok"
                type="text"
                name="stok"
                placeholder="Masukkan stok"
                required
                value={stok}
                onChange={(e) => setStok(e.target.value)}
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="kuantiti"
            >
              Kuantiti
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="kuantiti"
                name="kuantiti"
                placeholder="Pilih kuantiti"
                required
                defaultValue={0}
              >
                <option value={0} disabled>
                  Pilih Kuantiti
                </option>
                {menu.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            <div className="hidden">
            <input
              className="hidden"
              id="id"
              type="number"
              name="id"
              defaultValue={id}
            />
          </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <CancelButton />
          <LoginButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {error && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {error}
              </p>
            </>
          )}
          {code !== undefined && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                {code.message}
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 bg-green-500 hover:bg-green-600 w-[15%] justify-center focus-visible:outline-green-500 active:bg-green-600"
      aria-disabled={pending}
    >
      Simpan
    </Button>
  );
}

function CancelButton() {
  return (
    <Link
      href="/dashboard/artikel"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
