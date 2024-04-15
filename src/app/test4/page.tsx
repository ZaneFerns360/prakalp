"use server";
import React from "react";
import { uid } from "../api/authsx";
import { getOneCourse } from "../api/getOneCourse";
import { type Course, Chapter, Topic } from "@prisma/client";

async function getData() {
  //test data
  const session = await uid();
  if (session !== null) {
    const courseId = "clv19v5bq0000123cs2hwonh7";
    const course = await getOneCourse(courseId);
    console.log(course);
    return course;
  }
}

export default async function Page() {
  const course = await getData();

  return (
    <main>
      {course ? (
        <>
          <h1>{course.title}</h1>
          {course.chapters?.map((chapter) => (
            <div key={chapter.id}>
              <h2>{chapter.name}</h2>
              {chapter.topics?.map((topic) => (
                <div key={topic.id}>
                  <h3>{topic.title}</h3>
                  <a href={topic.link}>Link</a>
                  <p>{topic.search_query}</p>
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <p>No course data available.</p>
      )}
    </main>
  );
}
