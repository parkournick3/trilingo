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

    await db.insert(schema.courses).values([
      {
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
      {
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        title: "English",
        imageSrc: "/usa.svg",
      },
      {
        title: "Brazilian Portuguese",
        imageSrc: "/br.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
