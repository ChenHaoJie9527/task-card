"use client";

import { useMobileSidebarStore } from "@/hooks/use-mobile-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileSidebar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { onOpen, isOpen, onClose } = useMobileSidebarStore();
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  if (!mounted) {
    return null;
  }
  return (
    <div className={cn("rounded-md bg-muted", className)} {...props}>
      MobileSidebar
    </div>
  );
};

export default MobileSidebar;
