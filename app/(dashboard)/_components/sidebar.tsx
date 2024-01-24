"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorageState } from "ahooks";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

interface SidebarProps {
  storageKey?: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expended, setExpended] = useLocalStorageState<Record<string, any>>(
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
      if (expended![key]) {
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
    return <Skeleton className="h-4 w-[250px] bg-green-200" />;
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspace</span>
        <Button asChild type="button" variant="ghost" className="ml-auto">
          <Link href="/select-org">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
