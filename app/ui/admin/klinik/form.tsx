"use client";
import Icon from "@mdi/react";
import { mdiImage, mdiCity, mdiHospital, mdiMapMarker, mdiPhone, mdiClockOutline, } from "@mdi/js";
import { Button } from "../button";
import { formSubmitHandlerFile } from "@/app/utils/actions";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [code, action] = useFormState(formSubmitHandlerFile, undefined);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (code !== undefined && code.success === false) {
      const errors: { [key: string]: string } = {};
      if (Array.isArray(code.message)) {
        code.message.forEach((error: { path: string[]; message: string }) => {
          errors[error.path.join(".")] = error.message;
        });
      } else if (code.message) {
        errors.message = code.message;
      } else {
        errors.message = "Form submission failed";
      }
      setErrors(errors);
    }
  }, [code]);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1  mr-5 p-10 md:mr-8 bg-white rounded-lg">
        <h1 className={`mb-3 text-2xl`}>Tambah Klinik</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Gambar
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.nama ? "border-red-500" : ""
                }`}
                id="image"
                type="file"
                accept="image/*"
                name="image"
                required
              />
              <Icon
                path={mdiImage}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
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
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.nama ? "border-red-500" : ""
                }`}
                type="text"
                name="nama"
                placeholder="Nama klinik"
                required
              />
              <Icon
                path={mdiHospital}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.nama && (
              <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.alamat ? "border-red-500" : ""
                }`}
                type="text"
                name="alamat"
                placeholder="Alamat"
                required
              />
              <Icon
                path={mdiMapMarker}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.alamat && (
              <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="maps"
            >
              Maps
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.maps ? "border-red-500" : ""
                }`}
                type="text"
                name="maps"
                placeholder="Maps"
                required
              />
              <Icon
                path={mdiMapMarker}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.maps && (
              <p className="text-red-500 text-sm mt-1">{errors.maps}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="telepon"
            >
              Telepon
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.telepon ? "border-red-500" : ""
                }`}
                type="number"
                name="telepon"
                placeholder="No Telepon"
                required
              />
              <Icon
                path={mdiPhone}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.telepon && (
              <p className="text-red-500 text-sm mt-1">{errors.telepon}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="seninSabtu"
            >
              Jadwal Senin - Sabtu
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.seninSabtu ? "border-red-500" : ""
                }`}
                type="text"
                name="seninSabtu"
                placeholder="Jadwal Senin - Sabtu"
                required
              />
              <Icon
                path={mdiClockOutline}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.seninSabtu && (
              <p className="text-red-500 text-sm mt-1">{errors.seninSabtu}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="minggu"
            >
              Jadwal Minggu
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.minggu ? "border-red-500" : ""
                }`}
                type="text"
                name="minggu"
                placeholder="Jadwal Minggu"
                required
              />
              <Icon
                path={mdiClockOutline}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.minggu && (
              <p className="text-red-500 text-sm mt-1">{errors.minggu}</p>
            )}
          </div>
        </div>
        <input
          id="params"
          type="text"
          name="params"
          hidden
          defaultValue={"klinik"}
        />
        <div className="flex flex-row gap-3 justify-end">
          <CancelButton />
          <SubmitButton />
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
      href="/dashboard/klinik"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
