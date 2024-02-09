import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {formDeleteHandler} from "@/app/utils/actions";

export function CreateInvoice({tambah, link}: {tambah: string, link: string}) {
  return (
    <Link
      href={link}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{tambah}</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id, params }: { id: number, params: string }) {
  return (
    <Link
      href={`/dashboard/${params}/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
        <span className="sr-only">Edit</span>
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id, params}: { id: number, params: string }) {
  const handleDelete = async () => {
    await formDeleteHandler({id:id, params:params});
  };
  
  return (
    <form action={handleDelete}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}