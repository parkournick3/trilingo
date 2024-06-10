import { cn } from "@/lib/utils";
import MobileSidebar from "./mobile-sidebar";

type Props = {
  className?: string;
};

export default function MobileHeader({ className }: Props) {
  return (
    <nav
      className={cn(
        "lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed top-0 w-full z-50",
        className
      )}
    >
      <MobileSidebar />
    </nav>
  );
}
