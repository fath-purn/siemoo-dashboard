import Form from "@/app/ui/admin/penyakit/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penyakit",
};

export default function Page() {
  return (
    <div className="">
        <Form />
    </div>
  );
}
