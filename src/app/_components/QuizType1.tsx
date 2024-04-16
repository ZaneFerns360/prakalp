import { Divider } from "@tremor/react";
import { ChevronLeft, ChevronRight, Presentation, Timer } from "lucide-react";
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
      </div>

      <div className="my-16 flex items-center justify-center py-16">
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
            <div className="leading-1.5 flex flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 md:w-[800px] ">
              <div className=" text-lg font-semibold md:text-xl">
                Question is here written all over this place
              </div>
              <Divider />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
                  Dashboard
                </div>
                <div className="w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
                  Dashboard
                </div>
                <div className="w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
                  Dashboard
                </div>
                <div className="w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
                  Dashboard
                </div>
              </div>
            </div>
            <span className="text-sm font-normal text-gray-500">Delivered</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
          <ChevronLeft />
          Previous Question
        </div>
        <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
          Next Question
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default QuizType1;
