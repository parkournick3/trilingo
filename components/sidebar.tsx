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
          <Image
            src="https://placehold.co/40x40"
            height={40}
            width={40}
            alt="Mascot"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Trilingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          href="/learn"
          label="Learn"
          iconSrc="https://placehold.co/32x32"
        />

        <SidebarItem
          href="/leaderboard"
          label="Leaderboard"
          iconSrc="https://placehold.co/32x32"
        />

        <SidebarItem
          href="/quests"
          label="Quests"
          iconSrc="https://placehold.co/32x32"
        />

        <SidebarItem
          href="/shop"
          label="Shop"
          iconSrc="https://placehold.co/32x32"
        />
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
          />
        </ClerkLoaded>
      </div>
    </div>
  );
}
