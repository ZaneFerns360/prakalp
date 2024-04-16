"use server";

import { db } from "~/server/db";
import { type Course, Chapter, Topic, User } from "@prisma/client";

export async function createCourse(
  userId: string,
  title: string,
  isPublic: boolean,
  chapters: {
    name: string;
    subtopics: {
      name: string;
      search_query: string;
      link: string;
    }[];
  }[],
): Promise<Course | null> {
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });

  if (user) {
    const course: Course | null = await db.course.create({
      data: {
        title: title,
        public: isPublic,
        user: {
          connect: {
            id: userId,
          },
        },
        chapters: {
          create: chapters.map((chapter) => ({
            name: chapter.name,
            topics: {
              create: chapter.subtopics.map((subtopic) => ({
                title: subtopic.name,
                link: subtopic.link,
                search_query: subtopic.search_query,
                knowledge_level: 0,
              })),
            },
          })),
        },
      },
    });
    return course;
  }
  return null;
}
