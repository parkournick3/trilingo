import { lessons, units } from "@/db/schema";
import UnitBanner from "./unit-banner";
import LessonButton from "./lesson-button";

type Props = {
  id: number;
  order: number;
  description: string;
  title: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect })
    | undefined;
  activeLessonPercentage: number;
};

export default function Unit({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
}: Props) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      {lessons.map((lesson, index) => {
        const isCurrent = lesson.id === activeLesson?.id;
        const isLocked = !lesson.completed && !isCurrent;

        return (
          <LessonButton
            key={lesson.id}
            id={lesson.id}
            index={index}
            totalCount={lessons.length - 1}
            current={isCurrent}
            locked={isLocked}
            percentage={activeLessonPercentage}
          />
        );
      })}
    </>
  );
}
