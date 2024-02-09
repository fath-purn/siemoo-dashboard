import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "../../globals.css";
import SideNav from "@/app/ui/admin/sidenav";

export const metadata: Metadata = {
  title: {
    template: "%s | Si-Emooo",
    default: "Si-Emooo",
  },
  description: "Si-Emooo",
  metadataBase: new URL("https://fe-explore-banyumas.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
