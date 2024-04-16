"use server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { User } from "@prisma/client";

export async function changeUserDetails(
  age: number,
  userClass: string,
): Promise<User | null> {
  // Fetch the user from the session
  const session = await getServerAuthSession();

  // Check if session is not null
  if (session) {
    // Fetch the user's details from the database
    const user = await db.user.update({
      where: { id: session.user.id },
      data: { age: age, class: userClass },
    });

    return user;
  } else {
    return null;
  }
}
