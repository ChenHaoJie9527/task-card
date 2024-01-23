import { ReactNode } from "react";

export default function OrganizationPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-7xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        {/* TODO: Sidebar */}
        <div className="w-64 shrink-0 hidden md:block"></div>
        {children}
      </div>
    </main>
  );
}