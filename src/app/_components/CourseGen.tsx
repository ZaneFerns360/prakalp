"use client";
import { ChevronLeft, ChevronRight, MonitorPlay } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getOneCourse } from "../api/getOneCourse";

const CourseGen = ({ params }: { params: { id: string } }) => {
  const [courseStat, setCourseStat] = useState(1);
  const [courseData, setCourseData] = useState();
  const [currData, setCurrData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await getOneCourse(params.id);
      setCourseData(res);
      setCurrData(res?.chapters[0]?.topics[0]);
      console.log(res?.chapters[0]?.topics[0]);
      console.log(res);
    };

    getData();
  }, []);

  const changeStat = (index: number, data) => {
    setCourseStat(index);
    setCurrData(data);
    console.log(courseStat);
  };
  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="z-16 fixed left-0 top-16 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4">
          <ul className="space-y-2 font-medium">
            {courseData
              ? courseData.chapters.map((chap, i) => {
                  return (
                    <li>
                      <button
                        onClick={() => changeStat(i + 1, chap.topics[0])}
                        type="button"
                        className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                      >
                        <MonitorPlay />
                        <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                          {chap.name}
                        </span>
                        <svg
                          className="h-3 w-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      {chap.topics.map((vid) => {
                        return courseStat == i + 1 ? (
                          <ul id="dropdown-example" className=" space-y-2 py-2">
                            <li
                              onClick={() => {
                                setCurrData(vid);
                              }}
                            >
                              <a
                                href="#"
                                className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                              >
                                {vid.title}
                              </a>
                            </li>
                          </ul>
                        ) : (
                          ""
                        );
                      })}
                      {/* {courseStat == 1 ? (
                        <ul id="dropdown-example" className=" space-y-2 py-2">
                          <li>
                            <a
                              href="#"
                              className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                            >
                              Topic Name
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                            >
                              Topic Name 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                            >
                              Topic Name 3
                            </a>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )} */}
                    </li>
                  );
                })
              : ""}
            {/* <li>
              <button
                onClick={() => changeStat(1)}
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay />
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {courseStat == 1 ? (
                <ul id="dropdown-example" className=" space-y-2 py-2">
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 3
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => changeStat(2)}
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay />
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 2
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {courseStat == 2 ? (
                <ul id="dropdown-example" className=" space-y-2 py-2">
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 3
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => changeStat(3)}
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay />
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 3
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {courseStat == 3 ? (
                <ul id="dropdown-example" className=" space-y-2 py-2">
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 3
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => changeStat(4)}
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay />
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 4
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {courseStat == 4 ? (
                <ul id="dropdown-example" className=" space-y-2 py-2">
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                    >
                      Topic Name 3
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="mt-20 p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4">
          <div className="mb-4 flex">
            <div className="h-[25rem] items-center justify-center rounded">
              <div className="p-3">
                {courseData && (
                  <h1 className="my-3 text-4xl font-bold ">{currData.title}</h1>
                )}
              </div>
              <div className="my-5">
                <p className="text-2xl text-gray-400">
                  {!currData ? (
                    <svg
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  ) : (
                    <iframe
                      width="560"
                      height="315"
                      title="YouTube video player"
                      src={`https://www.youtube.com/embed/${currData.link}`}
                      className="mb-3 rounded-lg p-1 group-hover:opacity-40"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div></div>

          <div className="flex w-full gap-5 pt-12">
            <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
              <ChevronLeft />
              Previous Topic
            </div>
            <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
              Next Topic
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGen;
