"use server";
import { db } from "~/server/db";

type Topic = {
  id: string;
  title: string;
  link: string;
  chapterId: string;
  search_query: string;
  knowledge_level: number;
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

export async function getCourses(
  userId: string,
): Promise<CourseDetails[] | null> {
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
