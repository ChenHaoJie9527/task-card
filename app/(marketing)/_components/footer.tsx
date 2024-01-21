import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-[#fff] w-full h-14 flex items-center shadow-sm border-t">
      <div className="md:max-w-screen-2xl m-auto w-full flex items-center justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            privacy policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
