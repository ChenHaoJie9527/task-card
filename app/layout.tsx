import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${cn(inter.className, 'w-[100vw] h-[100vh] bg-[#f0f8ff]')}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
