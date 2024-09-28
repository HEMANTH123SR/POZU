import { SmallHeader } from "@/components/component/small-header";
import { LargeHeader } from "@/components/component/large-header";

export const Header = () => {
  return (
    <div className="w-full ">
      <div className="md:hidden">
        <SmallHeader />
      </div>
      <div className="hidden md:block">
        <LargeHeader />
      </div>
    </div>
  );
};
