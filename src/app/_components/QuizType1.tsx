"use client";
import { Divider } from "@tremor/react";
import {
  ChevronLeft,
  ChevronRight,
  FlagTriangleRight,
  Presentation,
  Timer,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizStats from "./QuizStats";

const QuizType1 = ({ params }: { params: { q: any } }) => {
  const [qtopic, setQtopic] = useState();
  const [qNo, setQNo] = useState(0);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [answerStat, setAnswerStat] = useState<any>(null);

  const changeQ = (i: number) => {
    setAnswerStat(null);
    setQNo(i);
  };

  const handleAnswer = (i: number, answer: number) => {
    if (i == answer) {
      setScore(score + 1);
    }
    setAnswerStat(true);
  };

  const handleSubmit = () => {
    setDone(true)
  };

  console.log(params.q);
  const data = params.q.qna;

  return (
    <div className="mx-auto mt-20 w-[80%] ">
        {
            done ?
            <QuizStats params={{ score: score }} /> : ''
        }
      {Array.isArray(data) &&
        data.map((values: any, i: any) => {
          return (
            <>
              {qNo == i ? (
                <>
                  <div className="flex justify-between text-black">
                    <div className="mb-3 text-3xl font-bold md:text-4xl">
                      MCQ Quiz
                    </div>
                    <div className="rounded-md border border-gray-400 px-5 py-3">
                      Question No : {i + 1} / {data.length}
                    </div>
                  </div>
                  <Divider />
                  <div className="my-4 flex justify-between">
                    <div className="flex gap-3">
                      <Presentation />
                      {values.topic}
                    </div>

                    <div className="flex gap-3">
                      <FlagTriangleRight />
                      {score}
                    </div>
                  </div>

                  <div className="my-10 flex items-center justify-center py-10">
                    <div className="flex items-start gap-2.5">
                      <img
                        className="h-12 w-12 rounded-full bg-yellow-500 p-2"
                        src="/Eddie/eddieNoBg.png"
                        alt="Eddie"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 ">
                            Eddie, your Buddy
                          </span>
                          <span className="text-sm font-normal text-gray-500">
                            Now
                          </span>
                        </div>
                        <div className="leading-1.5 flex flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-10 md:w-[800px] ">
                          <div className=" text-lg font-semibold md:text-xl">
                            {values.question}
                          </div>
                          <Divider />
                          <div className="grid gap-4 md:grid-cols-2">
                            {values.options?.map(
                              (element: any, index: number) => (
                                <>
                                  {answerStat ? (
                                    <div
                                      key={index}
                                      className={
                                        index == values.answer
                                          ? "w-full -translate-y-1 translate-x-1 rounded-lg border border-b-4 border-l-4 border-green-600 bg-white px-5 py-2 font-semibold text-black"
                                          : "w-full -translate-y-1 translate-x-1 rounded-lg border border-b-4 border-l-4 border-red-500 bg-white px-5 py-2 font-semibold text-black"
                                      }
                                    >
                                      {element}
                                    </div>
                                  ) : (
                                    <div
                                      key={index}
                                      onClick={() =>
                                        handleAnswer(index, values.answer)
                                      }
                                      className="w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold"
                                    >
                                      {element}
                                    </div>
                                  )}
                                </>
                              ),
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-normal text-gray-500">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto w-[40%] gap-5">
                    {/* <div
                      onClick={() => changeQ(qNo - 1)}
                      className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold "
                    >
                      <ChevronLeft />
                      Previous Question
                    </div> */}
                    {i+1 == data.length ? (
                      <div
                        onClick={handleSubmit}
                        className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold "
                      >
                        Submit Quiz
                        <ChevronRight />
                      </div>
                    ) : (
                      <div
                        onClick={() => changeQ(qNo + 1)}
                        className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold "
                      >
                        Next Question
                        <ChevronRight />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                " "
              )}
            </>
          );
        })}
    </div>
  );
};

export default QuizType1;
