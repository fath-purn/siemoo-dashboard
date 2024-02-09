import NavLinks from "@/app/ui/admin/nav-links";
import FormSignOutNav from "@/app/ui/admin/signoutnav"

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-green-800">
      <div className="flex grow flex-row justify-between md:mt-3 md:border-t-[1px] md:border-black items-end md:items-center space-x-2 bg-green-800 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-green-800 md:block"></div>
        <FormSignOutNav />
      </div>
    </div>
  );
}
