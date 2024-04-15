"use server";
import React from "react";
import { createCourse } from "../api/createCourse";
import { uid } from "../api/authsx";

async function create() {
  //test data
  const chapters = [
    {
      name: "Chapter 1",
      topics: [
        {
          title: "Topic 1",
          link: "www.example.com/topic1",
          search_query: "query1",
        },
        {
          title: "Topic 2",
          link: "www.example.com/topic2",
          search_query: "query2",
        },
      ],
    },
    {
      name: "Chapter 2",
      topics: [
        {
          title: "Topic 3",
          link: "www.example.com/topic3",
          search_query: "query3",
        },
        {
          title: "Topic 4",
          link: "www.example.com/topic4",
          search_query: "query4",
        },
      ],
    },
  ];
  const session = await uid();
  if (session !== null) {
    const course = await createCourse(session, "Test Course", true, chapters);
    console.log(course);
  }
}

export default async function Page() {
  const data = await create();

  return <main></main>;
}
