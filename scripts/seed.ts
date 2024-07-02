import { configDotenv } from "dotenv";

configDotenv();
configDotenv({ path: `.env.local`, override: true });

import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      // {
      //   id: 1,
      //   title: "Japanese",
      //   imageSrc: "/jp.svg",
      // },
      // {
      //   id: 2,
      //   title: "Spanish",
      //   imageSrc: "/es.svg",
      // },
      // {
      //   id: 3,
      //   title: "English",
      //   imageSrc: "/us.svg",
      // },
      {
        id: 4,
        title: "Brazilian Portuguese",
        imageSrc: "/br.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 4, // Brazilian Portuguese
        title: "Unit 1",
        description: "Learn the basics of Brazilian Portuguese",
        order: 1,
      },
      {
        id: 2,
        courseId: 4, // Brazilian Portuguese
        title: "Unit 2",
        description: "Intermediate Brazilian Portuguese",
        order: 2,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics of Brazilian Portuguese)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics of Brazilian Portuguese)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 2, // Unit 2 (Intermediate Brazilian Portuguese)
        order: 1,
        title: "Adjectives",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "homem"',
      },
      {
        id: 2,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "correr"',
      },
      {
        id: 3,
        lessonId: 3, // Adjectives
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "bonito"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // Which one of these is the "man"
        imageSrc: "/man.svg",
        correct: true,
        text: "Homem",
        audioSrc: "/homem.mp3",
      },
      {
        id: 2,
        challengeId: 1, // Which one of these is the "man"
        imageSrc: "/woman.svg",
        correct: false,
        text: "Mulher",
        audioSrc: "/mulher.mp3",
      },
      {
        id: 3,
        challengeId: 2, // Which one of these is the "to run"
        imageSrc: "/run.svg",
        correct: true,
        text: "Correr",
        audioSrc: "/correr.mp3",
      },
      {
        id: 4,
        challengeId: 2, // Which one of these is the "to run"
        imageSrc: "/walk.svg",
        correct: false,
        text: "Andar",
        audioSrc: "/andar.mp3",
      },
      {
        id: 5,
        challengeId: 3, // Which one of these is the "beautiful"
        imageSrc: "/beautiful.svg",
        correct: true,
        text: "Bonito",
        audioSrc: "/bonito.mp3",
      },
      {
        id: 6,
        challengeId: 3, // Which one of these is the "beautiful"
        imageSrc: "/ugly.svg",
        correct: false,
        text: "Feio",
        audioSrc: "/feio.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
