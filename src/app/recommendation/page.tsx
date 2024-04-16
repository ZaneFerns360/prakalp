"use server";
import React from "react";
import { uid } from "../api/authsx";
import { getRandomCourses } from "../api/recommendation";
//to get all courses and all chapters and all topics and everything, I was too lazy to map everything, refer test4 - Gallery
async function findData() {
  const session = await uid();
  if (session !== null) {
    const course = await getRandomCourses(session);
    return course;
  }
  return null;
}

export default async function Page() {
  const courses = await findData();

  if (courses === null) {
    return <main>No courses found</main>;
  }

  return (
    <main>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          {course.chapters.map((chapter) => (
            <div key={chapter.id}>
              <h3>{chapter.name}</h3>
              {chapter.topics.map((topic) => (
                <div key={topic.id}>
                  <h4>{topic.title}</h4>
                  <p>{topic.link}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
