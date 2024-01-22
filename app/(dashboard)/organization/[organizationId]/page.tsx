import { auth, OrganizationSwitcher } from "@clerk/nextjs";

export default function OrganizationPage({ params }: { params: any }) {
  const { organizationId } = params;
  const { userId, orgId } = auth();
  return (
    <>
      <div>organizationId: {organizationId}</div>
      <div>userId: {userId}</div>
      <div>orgId: {orgId}</div>
      <OrganizationSwitcher hidePersonal />
    </>
  );
}
