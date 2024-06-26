"use client";

import { challengeOptions, challenges } from "@/db/schema";
import Header from "./header";
import { useState } from "react";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
};

export default function Quiz({ initialHearts, initialPercentage }: Props) {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <Header hasActiveSubscription hearts={hearts} percentage={percentage} />
    </>
  );
}
