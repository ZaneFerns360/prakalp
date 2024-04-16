"use server";
import { db } from "~/server/db";
import { User, Quiz } from "@prisma/client";

export async function getQuizzesByUserId(
  userId: string,
): Promise<Quiz[] | null> {
  const quiz = await db.quiz.findMany({
    where: { userId: userId },
    orderBy: { date: "asc" }, // Sort by date in ascending order
  });
  return quiz;
}
