import Link from "next/link";

interface CardButtonProps {
  href: string;
  hw: string;
}

export function CardButton({ href, hw }: CardButtonProps): JSX.Element {
  const linkHref = `/${hw}/${href}`;

  return (
    <Link
      href={linkHref}
      className="px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 rounded-[5px] text-white text-[8px] font-medium"
    >
      {hw === "hotel" ? "Lihat Hotel" : "Lihat Wisata"}
    </Link>
  );
}
