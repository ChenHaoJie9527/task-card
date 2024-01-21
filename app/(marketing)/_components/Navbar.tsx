import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#fff] w-full px-4 h-14 flex items-center shadow-sm border-b">
      <div className="md:max-w-screen-2xl m-auto w-full flex items-center justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" asChild variant="outline">
            <Link href="/sign-up">Login</Link>
          </Button>
          <Button className="bg-[#4fb4b1]" size="sm">
            <Link href="/sign-up">Get Taskfiy for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
