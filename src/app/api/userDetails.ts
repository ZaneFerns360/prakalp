"use server";
import { getServerAuthSession } from "~/server/auth";
import { uid } from "./authsx";
import { db } from "~/server/db";

type UserDetails = {
  id: string;
  name: string | null;
};

export async function getUserDetails(): Promise<UserDetails | null> {
  // Fetch the user from the session
  const session = await getServerAuthSession();

  // Check if session is not null
  if (session) {
    // Fetch the user's details from the database
    const usexr = await db.user.findUnique({
      where: { id: session.user.id },
      select: { id: true, name: true },
    });

    return usexr;
  } else {
    // Handle the case where session is null
    return null;
  }
}
