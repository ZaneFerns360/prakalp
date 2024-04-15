"use server";
import React from "react";
import { createCourse } from "../api/createCourse";
import { uid } from "../api/authsx";
import { getCourses } from "../api/getCourses";

async function create() {
  //test data
  const session = await uid();
  if (session !== null) {
    const course = await getCourses(session);
    console.log(course);
  }
}

export default async function Page() {
  const data = await create();

  return <main></main>;
}
