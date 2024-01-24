"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Layout, Activity, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type OrganizationResource = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
  publicUserData?: any;
};

interface NavItemProps {
  onExpend: (id: string) => void;
  isActive: boolean;
  isExpended: boolean;
  organization: OrganizationResource;
}

type RoutesProps = {
  label: string;
  icon: ReactNode;
  href: string;
}[];

/**
 * Creates an array of navigation links for the given organization.
 *
 * @param {OrganizationResource} org - the organization for which to create the links
 * @returns {RoutesProps} an array of navigation links
 */
function createRoutes(org: OrganizationResource) {
  return [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${org.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${org.id}/Activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${org.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${org.id}/billing`,
    },
  ];
}

const NavItem = (props: NavItemProps) => {
  const { onExpend, isActive, isExpended, organization } = props;
  const router = useRouter();
  const pathName = usePathname();
  const routes: RoutesProps = createRoutes(organization);

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpend(organization.id)}
        className={`${cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpended && "bg-sky-500/10 text-sky-700"
        )}`}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt={organization.name}
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((item) => {
          return (
            <Button
              variant="ghost"
              className={`${cn(
                "flex font-normal justify-start w-full pl-10 mb-1",
                pathName === item.href && "bg-sky-500/10 text-sky-700"
              )}`}
              key={item.href}
              onClick={() => handleClick(item.href)}
              size="sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export default NavItem;
