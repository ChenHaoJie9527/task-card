"use client";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

const NavItem = (props: NavItemProps) => {
  const { onExpend, isActive, isExpended, organization } = props;
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
          <span>{organization.name}</span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  );
};

export default NavItem;
