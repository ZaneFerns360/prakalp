"use server";
import React from "react";
import { uid } from "../api/authsx";
import { getTopics } from "../api/getTopics";
//to get data of all topics from a chapter using chapter ID, note this only gives chapter -> topic
async function getData() {
  //test data
  const session = await uid();
  if (session !== null) {
    const chapterId = "clv1f9ywn0001qn00soq0f5f4";
    const topics = await getTopics(chapterId);
    console.log(topics);
    return topics;
  }
}

export default async function Page() {
  const topics = await getData();

  return (
    <main>
      {topics?.map((topic) => (
        <div key={topic.id}>
          <h2>{topic.title}</h2>
          <a href={topic.link}>Link</a>
          <p>{topic.search_query}</p>
          <p>{topic.knowledge_level}</p>
        </div>
      ))}
    </main>
  );
}
