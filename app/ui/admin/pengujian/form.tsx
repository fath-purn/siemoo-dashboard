"use client";

import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import { lusitana } from "@/app/ui/fonts";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormState, useFormStatus } from "react-dom";
import { formSubmitHandlerPengujian } from "@/app/utils/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@/app/utils/definitions";

const hasil = [
  { id: "SangatBaik", nama: "Sangat Baik" },
  { id: "Baik", nama: "Baik" },
  { id: "Normal", nama: "Normal" },
  { id: "Buruk", nama: "Buruk" },
  { id: "SangatBuruk", nama: "Sangat Buruk" },
];

export default function LoginForm() {
  const [code, action] = useFormState(formSubmitHandlerPengujian, undefined);
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL_SIEMOO + "/user")
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, []);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Tambah Hasil Pengujian
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="id_user"
            >
              Peternak
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="id_user"
                name="id_user"
                placeholder="Pilih peternak"
                required
                defaultValue={0}
              >
                <option value={0} disabled>
                  Pilih Peternak
                </option>
                {user.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.fullname}
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
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="fat"
            >
              FAT
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="fat"
                type="text"
                name="fat"
                placeholder="Masukkan fat "
                required
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
              htmlFor="snf"
            >
              SNF
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="snf"
                type="text"
                name="snf"
                placeholder="Masukkan snf"
                required
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
              htmlFor="protein"
            >
              Protein
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="protein"
                type="text"
                name="protein"
                placeholder="Masukkan protein"
                required
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
              htmlFor="pH"
            >
              pH
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="pH"
                type="text"
                name="pH"
                placeholder="Masukkan pH"
                required
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
              htmlFor="hasil"
            >
              Kualitas
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="hasil"
                name="hasil"
                placeholder="Pilih hasil"
                required
                defaultValue={0}
              >
                <option value={0} disabled>
                  Pilih kualitas
                </option>
                {hasil.map((item, index) => (
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
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="message"
            >
              Saran
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="message"
                type="text"
                name="message"
                placeholder="Masukkan saran"
                required
              />
              <Icon
                path={mdiHeart}
                size={1}
                color="red"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <CancelButton />
          <SubmitButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
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

function SubmitButton() {
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
      href="/dashboard/pengujian"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
