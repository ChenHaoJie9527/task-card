import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const textFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={`${cn(
          inter.className,
          "flex items-center justify-center flex-col mb-4"
        )}`}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-[#fff] text-[#4fb4b1] rounded-full uppercase text-center">
          <Medal className="h-6 w-6 mr-2" />
          <span>No 1 Task Managment</span>
        </div>
        <h1 className="text-3xl text-[#4fb4b1] md:text-6xl text-center mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r text-white w-fit from-[#a5e5ec] to-[#4fb4b1] px-4 p-2 rounded-md">
          work forward
        </div>
      </div>
      <div
        className={`${cn(
          textFont.className,
          "text-sm md:text-xl text-neutral-300 max-w-xs md:max-w-2xl text-center m-auto break-words"
        )}`}
      >
        Collaborate, manage projects and reach new peaks of productivity. From high-rise buildings to home offices, your team works differently!
        Taskify can help you do it all
      </div>
      <Button className="bg-[#4fb4b1] mt-4" size="lg">
        <Link href="/sign-up">Get Taskfiy for free</Link>
      </Button>
    </div>
  );
}
