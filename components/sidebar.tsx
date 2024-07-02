import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 lg:border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Trilingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem href="/learn" label="Learn" iconSrc="/house.svg" />

        <SidebarItem
          href="/leaderboard"
          label="Leaderboard"
          iconSrc="/star.svg"
        />

        <SidebarItem href="/quests" label="Quests" iconSrc="/mission.svg" />

        <SidebarItem href="/shop" label="Shop" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton
            // https://stackoverflow.com/a/78488757/18018704
            appearance={{
              elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
            }}
            afterSignOutUrl="/"
          />
        </ClerkLoaded>
      </div>
    </div>
  );
}
