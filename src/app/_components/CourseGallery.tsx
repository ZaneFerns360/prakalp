"use server";
import {
  ArrowRight,
  Link,
  ScanText,
  Search,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import React from "react";
import Form from "./Form";

import { uid } from "../api/authsx";
import { getCourses } from "../api/getAllCourses";
import { Badge } from "@tremor/react";

async function findData() {
  const session = await uid();
  if (session !== null) {
    const course = await getCourses(session);
    return course;
  }
  return null;
}

export default async function Page() {
  const courses = await findData();
  console.log(courses);

  if (courses === null) {
    return <main>No courses found</main>;
  }
  return (
    <div>
      <Form />
      <section className="bg-white bg-[url('/Hero/bg.jpeg')] dark:bg-gray-900">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Personalized Courses made just for you
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-200">
            All the best courses in one place!!!
          </p>
        </div>
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div> */}
      </section>

      <div className="mx-auto my-5 w-[80%]">
        <div className="my-2 flex-row justify-between md:flex">
          <form className="md:w-[80%]">
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="  Search for latest products..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex gap-3 p-5 md:p-1 ">
            <a href="#" className="rounded-full bg-yellow-500 p-3">
              <ShoppingCart />
            </a>
            <a href="#gallery" className="rounded-full bg-yellow-500 p-3">
              <Sparkles />
            </a>
            <a href="/user/scan" className="rounded-full bg-yellow-500 p-3">
              <ScanText />
            </a>
          </div>
        </div>

        <h2 className="pb-1 text-lg font-semibold text-gray-500">Products</h2>

        {courses.map((course) => (
          <div
            key={course.id}
            className="group m-2 w-full max-w-sm rounded-lg bg-white pb-6 shadow"
          >
            <a href={`/course/${course.id}`}>
              <h3 className="m-3 flex flex-col text-xl font-semibold tracking-tight text-gray-900">
                {course.title}
              </h3>
              <div>
                <iframe
                  title="YouTube video player"
                  src={`https://www.youtube.com/embed/${course?.chapters[0]?.topics[0]?.link}`}
                  className="mb-3 h-full w-full rounded-lg p-1 group-hover:opacity-40"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {course.chapters.map((chapter) => (
                <div className="my-1" key={chapter.id}>
                  <div className="bottom-1 w-full">
                    <div className="w-full px-5">
                      <div className="">
                        <Badge key={chapter.id} size="md" className="mx-1">
                          {chapter.name}
                        </Badge>
                      </div>
                      {/* {course.chapters.map((chapter) => {
                      return (
                        <Badge key={chapter.id} size="md" className="mx-1">
                          {chapter.name}
                        </Badge>
                      );
                    })} */}
                    </div>
                  </div>
                </div>
              ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
