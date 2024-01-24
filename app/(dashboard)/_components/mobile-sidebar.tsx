"use client";

import { useMobileSidebarStore } from "@/hooks/use-mobile-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className={cn("", className)} {...props}>
      <Button onClick={() => onOpen()} variant="ghost" size="sm">
        <Menu className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default MobileSidebar;
