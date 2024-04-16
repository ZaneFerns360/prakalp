"use client";
import React, { useState, type FormEvent, useEffect } from "react";
import { uid } from "../api/authsx";
import { createCourse } from "../api/createCourse";

type Subtopic = {
  name: string;
  search_query: string;
  link: string;
};

type Chapter = {
  name: string;
  subtopics: Subtopic[];
};

type CourseData = {
  chapters: Chapter[];
};

const CourseCreation = () => {
  const [sessionValue, setSessionValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await uid();
      setSessionValue(session);
    };

    void fetchSession();
  }, []);
  const [topic, setTopic] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch(
      "https://thinklabs.azurewebsites.net/api/makecourse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      },
    );

    const data = (await res.json()) as CourseData;
    console.log(data);
    if (sessionValue && data) {
      const result = await createCourse(
        sessionValue,
        topic,
        true,
        data.chapters,
      );
      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-30">
      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CourseCreation;
