"use client";

import {
  OrganizationProfile,
  useOrganization,
  useOrganizationList,
} from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsPage() {
  const { isLoaded: isLoadedOrganization } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrganizationList } =
    useOrganizationList({
      userMemberships: {
        infinite: true,
      },
    });
  if (
    !isLoadedOrganization ||
    !isLoadedOrganizationList ||
    userMemberships.isLoading
  ) {
    return (
      <div className="w-full h-[100vh] flex flex-col bg-[#fbfbfb]">
        <Skeleton className="w-full h-96" />
      </div>
    );
  }
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              height: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
              height: "100%",
            },
          },
        }}
      />
    </div>
  );
}
