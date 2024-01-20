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
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-[#fff] text-[#a5e645ec] rounded-full uppercase text-center">
          <Medal className="h-6 w-6 mr-2" />
          <span>No 1 Task Managment</span>
        </div>
        <h1 className="text-3xl text-[#a5e645ec] md:text-6xl text-center mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r text-white w-fit from-fuchsia-600 to-pink-600 px-4 p-2 rounded-md">
          work forward
        </div>
      </div>
      <div
        className={`${cn(
          textFont.className,
          "text-sm md:text-x text-neutral-300 max-w-xs md:max-w-2xl text-center m-auto break-words"
        )}`}
      >
        协作、管理项目并达到新的工作效率高峰。从高楼大厦到家庭办公室，您的团队的工作方式各不相同
        Taskify 可以帮您实现这一切
      </div>
      <Button className="bg-[#a5e645ec] mt-4" size="lg">
        <Link href="/sign-up">Get Taskfiy for free</Link>
      </Button>
    </div>
  );
}
