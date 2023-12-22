import { Medal } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase text-center">
          <Medal className="h-6 w-6 mr-2" />
          <span>No 1 Task Managment</span>
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl">work forward</div>
      </div>
    </div>
  );
}
