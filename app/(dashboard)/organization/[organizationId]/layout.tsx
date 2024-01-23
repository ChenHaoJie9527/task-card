import { ReactNode } from "react";
import { OrganizationIdControl } from "./_components/page";

export default function OrganizationIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <OrganizationIdControl />
      {children}
    </>
  );
}
