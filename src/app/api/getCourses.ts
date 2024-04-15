"use server";
import { db } from "~/server/db";
import { type Course, Chapter, Topic, User } from "@prisma/client";

export async function getCourses(userId: string): Promise<Course[] | null> {
  const courses = await db.course.findMany({
    where: { userId: userId },
    include: {
      chapters: {
        include: {
          topics: true,
        },
      },
    },
  });
  return courses;
}
