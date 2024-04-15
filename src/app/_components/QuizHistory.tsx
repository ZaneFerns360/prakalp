import { Card } from "@tremor/react";
import { Filter, Link2, Sliders } from "lucide-react";
import Image from "next/image";
import React from "react";

const QuizHistory = () => {
  const arr = [
    {
      id: 123,
      status: "Completed",
      title: "Quiz title",
      desc: "HI",
      score: "3/10",
    },
    {
      id: 123,
      status: "Done",
      title: "Quiz title",
      desc: "HI",
      score: "3/10",
    },
  ];
  return (
    <div className="mx-auto py-3 md:w-[80%] pt-20">
      {/* <div className="absolute flex right-[12rem] top-8">
        <div className="leading-1.5 hidden w-full max-w-[360px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 md:block">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 ">
              Eddie, Your Buddy
            </span>
            <span className="text-sm font-normal text-gray-500">Now</span>
          </div>
          <p className="py-2.5 text-sm font-normal text-gray-900 ">
            I see you have made great progress!! Keep Going Ahead {" "}
            <span className="font-bold">"Ribbit"!</span>
          </p>
        </div>
        <Image
          src="/Eddie/eddieSmile.png"
          className=""
          height={100}
          width={100}
          alt="Eddie"
        />
      </div> */}
      <div className="flex justify-between">
        <div className="flex flex-col mb-3 justify-end">
        <h3 className="dark:text-dark-tremor-content-strong text-xl font-bold text-tremor-content-strong">
          Quiz History
        </h3>
        <p>Contains the history of all the quizzes taken </p>
        </div>
        <div className="flex mb-3">
          <div className="leading-1.5 hidden w-full max-w-[360px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 md:block">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 ">
                Eddie, Your Buddy
              </span>
              <span className="text-sm font-normal text-gray-500">Now</span>
            </div>
            <p className="py-2.5 text-sm font-normal text-gray-900 ">
              I see you have made great progress!! Keep Going Ahead{" "}
              <span className="font-bold">"Ribbit"!</span>
            </p>
          </div>
          <Image
            src="/Eddie/eddieSmile.png"
            className=""
            height={100}
            width={100}
            alt="Eddie"
          />
        </div>
      </div>
      <div className="">
        <Card>
          <ul className="divide-y divide-gray-200">
            {arr &&
              arr?.map((item, i) => (
                <li key={i} className="pb-3 sm:pb-4">
                  <a href={`/projects/${item.id}`}>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0 py-1">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="/docs/images/people/profile-picture-1.jpg"
                          alt="Location"
                        />
                      </div>
                      <div className="mt-3 min-w-0 flex-1">
                        {item.status == "Done" ? (
                          <p className="truncate text-sm font-medium text-green-500">
                            {item.title}
                          </p>
                        ) : (
                          <p className="truncate text-sm font-medium text-red-500">
                            {item.title}
                          </p>
                        )}
                        <p className="truncate text-sm text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {item.score}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default QuizHistory;
