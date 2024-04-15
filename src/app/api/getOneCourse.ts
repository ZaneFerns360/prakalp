"use server";
import { db } from "~/server/db";
// import { type Course, type Chapter, type Topic, User } from "@prisma/client";

type Topic = {
  id: string;
  title: string;
  link: string;
  chapterId: string;
  search_query: string;
};

type Chapter = {
  id: string;
  name: string;
  courseId: string;
  topics: Topic[];
};

type CourseDetails = {
  id: string;
  title: string;
  public: boolean;
  userId: string;
  chapters: Chapter[];
};

export async function getOneCourse(
  courseId: string,
): Promise<CourseDetails | null> {
  const course = await db.course.findUnique({
    where: { id: courseId },
    include: {
      chapters: {
        include: {
          topics: true,
        },
      },
    },
  });
  return course;
}
