"use server";
import { db } from "~/server/db";
import { type Course, Chapter, Topic, User } from "@prisma/client";

export async function getTopics(chapterId: string): Promise<Topic[] | null> {
  const topics = await db.topic.findMany({
    where: { chapterId: chapterId },
  });
  return topics;
}
