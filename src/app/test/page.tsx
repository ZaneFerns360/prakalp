"use server";
import React from "react";
import { createCourse } from "../api/createCourse";
import { uid } from "../api/authsx";
import axios from "axios";

async function create() {
  //test data
  // const chapters = [
  //   {
  //     name: "Chapter 1",
  //     topics: [
  //       {
  //         title: "Topic 1",
  //         link: "www.example.com/topic1",
  //         search_query: "query1",
  //         knowledge_level: 1,
  //       },
  //       {
  //         title: "Topic 2",
  //         link: "www.example.com/topic2",
  //         search_query: "query2",
  //         knowledge_level: 2,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Chapter 2",
  //     topics: [
  //       {
  //         title: "Topic 3",
  //         link: "www.example.com/topic3",
  //         search_query: "query3",
  //         knowledge_level: 3,
  //       },
  //       {
  //         title: "Topic 4",
  //         link: "www.example.com/topic4",
  //         search_query: "query4",
  //         knowledge_level: 4,
  //       },
  //     ],
  //   },
  // ];

  // Course Generator
  const getCourse = async () => {
    const res = await axios.post(
      "https://thinklabs.azurewebsites.net/api/makecourse",
      {
        topic: "Course Topic",
      },
    );
  };

  // Quiz Generator
  const getQna = async () => {
    const res = await axios.post(
      "https://thinklabs.azurewebsites.net/api/makeqna",
      {
        topics: "just topics as string",
      },
    );
  };

  // Replace Video
  const getnewvideo = async () => {
    const res = await axios.post(
      "https://thinklabs.azurewebsites.net/api/getnewvideo",
      {
        q: "search query of the video",
        id: "id of the video",
      },
    );
  };

  const chapters = await getCourse();
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
