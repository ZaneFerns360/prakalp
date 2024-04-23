"use client";
import {
  ChevronLeft,
  ChevronRight,
  MonitorPlay,
  RotateCw,
  ScrollText,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { getOneCourse } from "../api/getOneCourse";
import { useRouter } from "next/navigation";
import axios from "axios";
import { changeLink } from "../api/changeLink";
import { CourseDetails } from "../api/getOneCourse";
import { Topic } from "../api/getOneCourse";

const CourseGen = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [courseStat, setCourseStat] = useState(1);
  const [courseData, setCourseData] = useState<CourseDetails | null>();
  const [currData, setCurrData] = useState<Topic | null>();
  const [qtopic, setQtopic] = useState();
  const [changeStatus, setChangeStatus] = useState(0);

  const ecd = (topic: any) => {
    const utf8String = encodeURIComponent(topic);
    const base64String = btoa(utf8String);
    return base64String;
  };

  const move = (e: any) => {
    e.preventDefault();
    router.push(`/quiz/${ecd(qtopic)}`);
  };

  useEffect(() => {
    const getData = async () => {
      const res: CourseDetails | null = await getOneCourse(params.id);
      setCourseData(res);
      setCurrData(res?.chapters[0]?.topics[0]);
    };

    getData();
  }, [changeStatus]);

  const newLink = async () => {
    // const res = await axios.post(
    //   "https://thinklabs.azurewebsites.net/api/getnewvideo",
    //   {
    //     q: currData.search_query,
    //     id: currData.link,
    //   },
    // );

    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAjgYmQJXz2VQUUp4sL8slYm321d3GUTGI&q=${currData.search_query}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`,
    );
    const newLs = res.data;

    newLs.items.forEach((element) => {
      if (element.id.videoId != currData.link) {
        changeLink(currData.id, element.id.videoId).then((e) => {
          setChangeStatus(changeStatus + 1);
        });
        return;
      }
    });
  };

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
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </aside>

      <div className="mt-20 p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4">
          <div className="mb-4 flex">
            <div className="h-[25rem] items-center justify-center rounded">
              <div className="p-3">
                {currData && (
                  <h1 className="my-3 text-4xl font-bold ">{currData.title}</h1>
                )}
              </div>
              <div className="my-5 flex gap-5">
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
                      width="700"
                      height="400"
                      title="YouTube video player"
                      src={`https://www.youtube.com/embed/${currData.link}`}
                      className="mb-3 rounded-lg p-1 group-hover:opacity-40"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </p>
                <div className="my-5">
                  {currData && (
                    <>
                      <h1 className="my-3 text-2xl font-bold ">
                        {currData.title}
                      </h1>
                      <p className="mb-5">
                        Take a test on {currData.title} and check your recall
                        Strength, Memory and Retention of information{" "}
                      </p>
                      <div
                        onClick={move}
                        className="flex w-full gap-3 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold "
                      >
                        <ScrollText />
                        Test Yourself
                      </div>

                      <p className="mb-3 mt-10">
                        Didn&apos;t like the video, Want us to regenerate the
                        video
                      </p>
                      <div
                        onClick={newLink}
                        className="flex w-full gap-3 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold "
                      >
                        <RotateCw />
                        Regenerate Video
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div className="mt-16 flex w-full gap-5 pt-16">
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
