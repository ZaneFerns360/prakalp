"use server";

import { db } from "~/server/db";
import { type Course, Chapter, Topic, User } from "@prisma/client";

export async function createCourse(
  userId: string,
  title: string,
  isPublic: boolean,
  chapters: { name: string; topics: { title: string; link: string }[] }[],
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
              create: chapter.topics,
            },
          })),
        },
      },
    });
    return course;
  }
  return null;
}
