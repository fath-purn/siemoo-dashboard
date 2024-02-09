"use client";

import { SignOut } from "@/app/utils/actions";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";

export default function FormSignOutNav() {
  const [code, action] = useFormState(SignOut, undefined);

  return (
    <form action={action} className="md:w-[95%]">
      <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6" color="white" />
        <div className="hidden md:block text-white">Sign Out</div>
      </button>
    </form>
  );
}
