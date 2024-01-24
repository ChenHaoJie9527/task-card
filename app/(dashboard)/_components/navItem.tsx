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
import Link from "next/link";

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

function createRoutes(org: OrganizationResource) {
  return [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}/Activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organizations/${org.id}/billing`,
    },
  ];
}

const NavItem = (props: NavItemProps) => {
  const { onExpend, isActive, isExpended, organization } = props;
  const router = useRouter();
  const pathName = usePathname();
  const routes: RoutesProps = createRoutes(organization);

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        className={`${cn(
          "flex items-center gap-x-2 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
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
      <AccordionContent>
        {routes.map((item) => {
          return (
            <div className="flex items-center h-10 w-full" key={item.label}>
              <span>{item.icon}</span>
              <Link href={item.href}>{item.label}</Link>
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
