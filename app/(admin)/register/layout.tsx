import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "../../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Explore Banyumas",
    default: "Explore Banyumas",
  },
  description: "Explore Banyumas",
  metadataBase: new URL("https://fe-explore-banyumas.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
