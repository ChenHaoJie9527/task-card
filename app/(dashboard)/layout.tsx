import { ReactNode } from "react";
import { Navbar } from "./_components/page";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}
