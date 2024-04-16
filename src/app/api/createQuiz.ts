"use server";

import { db } from "~/server/db";
import { type User, type Quiz } from "@prisma/client";

export async function createQuiz(
  userId: string,
  name: string,
): Promise<Quiz | null> {
  const user: User | null = await db.user.findUnique({
    where: { id: userId },
  });

  if (user) {
    const quiz: Quiz | null = await db.quiz.create({
      data: {
        name: name,
        score: 0,
        userId: userId,
      },
    });

    return quiz;
  } else {
    return null;
  }
}
