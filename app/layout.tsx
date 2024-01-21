import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config";
import "./globals.css";
import PlatformLayout from "./(platform)/layout";

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
    <html lang="en">
      <PlatformLayout>
        <body className={inter.className}>{children}</body>
      </PlatformLayout>
    </html>
  );
}
