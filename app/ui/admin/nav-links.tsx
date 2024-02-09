"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Icon from "@mdi/react";
import {
  mdiImageFilterHdrOutline,
  mdiCityVariant,
  mdiAccountGroupOutline,
  mdiMapMarkerRadiusOutline,
  mdiHomeOutline,
  mdiAccount,
  mdiAccountGroup,
  mdiBookEducationOutline,
  mdiTestTube,
  mdiStoreOutline,
} from "@mdi/js";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [  
  { name: "Home", href: "/dashboard", icon: mdiHomeOutline },
  { name: "User", href: "/dashboard/user", icon: mdiAccount },
  {
    name: "Kelompok",
    href: "/dashboard/kelompok",
    icon: mdiAccountGroup ,
  },
  {
    name: "Artikel",
    href: "/dashboard/artikel",
    icon: mdiBookEducationOutline,
  },
  { name: "Uji Lab", href: "/dashboard/pengujian", icon: mdiTestTube  },
  {
    name: "Lapak",
    href: "/dashboard/lapak",
    icon: mdiStoreOutline ,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] md:w-[95%] md:mt-3 grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-green-700 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-green-700 text-white": pathname === link.href,
                "bg-green-800 text-white": pathname !== link.href,
              }
            )}
          >
            <Icon path={String(link.icon)} size={1.2} className="w-6 " color={'white'} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
