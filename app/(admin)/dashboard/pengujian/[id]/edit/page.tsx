import Form from "@/app/ui/admin/kelompok/formupdate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit kelompok",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Form id={params.id} />
    </main>
  );
}

