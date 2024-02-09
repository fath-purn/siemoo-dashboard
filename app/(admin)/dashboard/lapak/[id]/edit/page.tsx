import Form from "@/app/ui/admin/lapak/formupdate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit wisata",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Form id={params.id} />
    </main>
  );
}

