"use client";

import { useMobileSidebarStore } from "@/hooks/use-mobile-sidebar";
import { cn } from "@/lib/utils";

const MobileSidebar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { onOpen, isOpen, onClose } = useMobileSidebarStore();
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    >
      MobileSidebar
    </div>
  );
};

export default MobileSidebar;
