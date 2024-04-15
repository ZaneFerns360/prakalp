"use server";
import React from "react";
import { uid } from "../api/authsx";
import { getTopics } from "../api/getTopics";

async function getData() {
  //test data
  const session = await uid();
  if (session !== null) {
    let chapterId = "clv19v5bq0001123cedh3vpil";
    const topics = await getTopics(chapterId);
    console.log(topics);
    return topics;
  }
}

export default async function Page() {
  const topics = await getData();

  return (
    <main>
      {topics &&
        topics.map((topic) => (
          <div key={topic.id}>
            <h2>{topic.title}</h2>
            <a href={topic.link}>Link</a>
            <p>{topic.search_query}</p>
          </div>
        ))}
    </main>
  );
}
