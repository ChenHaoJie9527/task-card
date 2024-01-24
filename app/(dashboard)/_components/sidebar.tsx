"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import NavItem, { OrganizationResource } from "./navItem";

interface SidebarProps {
  storageKey: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expended, setExpended] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const {
    isLoaded: isLoadedOrganization,
    organization: activeOrganization,
    membership,
  } = useOrganization();

  const { userMemberships, isLoaded: isLoadedOrganizationList } =
    useOrganizationList({
      userMemberships: {
        infinite: true,
      },
    });
  const defaultAccordionKeys: string[] = Object.keys(expended || []).reduce(
    (acc: string[], key: string) => {
      if (expended && expended[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpend = (id: string) => {
    setExpended({
      ...expended,
      [id]: !expended![id],
    });
  };

  if (
    !isLoadedOrganization ||
    !isLoadedOrganizationList ||
    userMemberships.isLoading
  ) {
    return <Skeleton className="h-10 w-[250px]" />;
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspace</span>
        <Button asChild type="button" variant="ghost" className="ml-auto">
          <Link href="/select-org" className="hover:bg-[#caefee]">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <Separator />
      <Accordion
        type="multiple"
        className="space-y-2"
        defaultValue={defaultAccordionKeys}
      >
        {userMemberships.data.map((item) => {
          return (
            <NavItem
              key={item.id}
              onExpend={onExpend}
              isActive={activeOrganization?.id === item.organization.id}
              organization={item.organization as OrganizationResource}
              isExpended={expended[item.organization.id]}
            />
          );
        })}
      </Accordion>
    </>
  );
};

export default Sidebar;
