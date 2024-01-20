import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Logo() {
  return (
    <Link href="/">
      <div className="hover:opacity-70 hidden md:flex items-center gap-x-0 transition-all">
        <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
        <p className={cn(inter.className, 'text-lg pb-1 text-neutral-400')}>Taskfiy</p>
      </div>
    </Link>
  );
}
