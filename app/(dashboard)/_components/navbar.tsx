import { CSSProperties } from "react";
import Logo from "@/components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const ORGANIZATIONURL = "/organization/:id";
const LEAVEORGANIZATIONURL = "/select-org";
const rootBoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Navbar = () => {
  return (
    <nav className="z-50 fixed top-0 w-full px-2 md:pr-5 h-14 shadow-sm border-b flex items-center bg-white">
      <MobileSidebar className="block md:hidden" />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:block">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto px-2 py-1.5 bg-[#4fb4b1]"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden bg-[#4fb4b1]">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={ORGANIZATIONURL}
          afterSelectOrganizationUrl={ORGANIZATIONURL}
          afterLeaveOrganizationUrl={LEAVEORGANIZATIONURL}
          appearance={{
            elements: {
              rootBox: {
                ...rootBoxStyle,
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              rootBox: {
                ...rootBoxStyle,
              },
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
