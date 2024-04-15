import { Divider } from "@tremor/react";
import { Presentation, Timer } from "lucide-react";
import React from "react";

const QuizType1 = () => {
  return (
    <div className="mx-auto mt-20 w-[80%] ">
      <div className="flex justify-between">
        <div className="mb-3 text-3xl font-bold md:text-4xl">MCQ Quiz</div>
        <div className="rounded-md border border-gray-400 px-5 py-3">
          Question No : 3 / 10
        </div>
      </div>
      <Divider />
      <div className="my-4 flex justify-between">
        <div className="flex gap-3">
          <Presentation />
          Blockchain
        </div>

        <div className="flex gap-3">
          <Timer />
          01:15
        </div>

        <div className="flex gap-3">
          <Timer />
          01:15
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-start gap-2.5">
          <img
            className="h-8 w-8 rounded-full"
            src="/Eddie/eddieNoBg.png"
            alt="Eddie"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 ">
                Eddie, your Buddy
              </span>
              <span className="text-sm font-normal text-gray-500">Now</span>
            </div>
            <div className="leading-1.5 flex md:w-[800px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 ">
              <div className="mb-3 text-lg font-semibold md:text-xl">
                Question is here written all over this place
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="my-7 w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold md:w-[30%]">
                  Dashboard
                </div>
                <div className="my-7 w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold md:w-[30%]">
                  Dashboard
                </div>
                <div className="my-7 w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold md:w-[30%]">
                  Dashboard
                </div>
                <div className="my-7 w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold md:w-[30%]">
                  Dashboard
                </div>
              </div>
            </div>
            <span className="text-sm font-normal text-gray-500">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizType1;
