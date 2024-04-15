"use server";
import { getServerAuthSession } from "~/server/auth";
import type { User } from "@prisma/client";

export async function uid(): Promise<string | null> {
  // Fetch the user from the session
  const session = await getServerAuthSession();

  // Check if session is not null
  if (session) {
    // Return the user's id
    return session.user.id;
  } else {
    // Handle the case where session is null
    return null;
  }
}
