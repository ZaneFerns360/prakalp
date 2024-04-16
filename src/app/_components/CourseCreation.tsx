"use client";
import React, { useState, type FormEvent, useEffect } from "react";
import { uid } from "../api/authsx";
import { createCourse } from "../api/createCourse";
import Image from "next/image";
import { Card, Divider, TextInput } from "@tremor/react";

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
    <>
      <div className="mt-1 bg-[url(/Hero/bg.jpeg)] py-12">
        <div className="my-16 flex items-center justify-center py-16">
          <div className="grid gap-3 md:grid-cols-2">
            <Image
              src="/Eddie/eddieNGamer.png"
              className="my-10 ml-16"
              width={300}
              height={300}
              alt="Eddie"
            />

            <Card>
              <h1 className="text-2xl font-bold">Course Creation</h1>
              <p>Choose a topic to create a Quiz</p>
              <Divider />
              <div className=" sm:mx-auto sm:max-w-2xl">
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className=" mb-4">
                    <label
                      htmlFor="first-name"
                      className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                    >
                      Topic
                      <span className="text-red-500">*</span>
                    </label>
                    <TextInput
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Enter a topic for a Quiz"
                      className="mt-2"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="my-7 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold"
                  >
                    Generate Course
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCreation;
