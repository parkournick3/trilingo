import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async function LearnPage() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          hearts={5}
          hasActiveSubscription={false}
          points={200}
          activeCourse={{
            title: "Japanese",
            imageSrc: "/jp.svg",
          }}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Japanese" />
        <div className="space-y-4">
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
          <div className="w-full h-[200px] bg-blue-400" />
        </div>
      </FeedWrapper>
    </div>
  );
}
