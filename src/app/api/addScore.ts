"use server";

import { db } from "~/server/db";
import { User, Quiz } from "@prisma/client"; // Note: Removed the "type" keyword

export async function updateQuizScore(
  quizId: string,
  newScore: number,
): Promise<Quiz | null> {
  try {
    // Find the quiz by its ID
    const quiz: Quiz | null = await db.quiz.findUnique({
      where: { id: quizId },
    });

    if (quiz) {
      // Update the quiz's score
      const updatedQuiz = await db.quiz.update({
        where: { id: quizId },
        data: { score: newScore },
      });

      return updatedQuiz;
    } else {
      // Quiz not found
      return null;
    }
  } catch (error) {
    // Handle any errors (e.g., database connection issues)
    console.error("Error updating quiz score:", error);
    return null;
  }
}
