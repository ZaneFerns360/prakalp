"use server";
import { db } from "~/server/db";
import { Topic } from "@prisma/client";

export async function changeLink(
  TopicId: string,
  link: string,
): Promise<Topic | null> {
  const topic = await db.topic.findUnique({
    where: { id: TopicId },
  });

  if (topic) {
    const updatedTopic = await db.topic.update({
      where: { id: TopicId },
      data: { link: link },
    });
    return updatedTopic;
  }

  return null;
}
