import { Card, Divider, TextInput } from "@tremor/react";
import { BookOpen, CopyCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const QuizCreation = () => {
  return (
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
            <h1 className="text-2xl font-bold">Quiz Creation</h1>
            <p>Choose a topic to create the Quiz</p>
            <Divider/>
            <div className=" sm:mx-auto sm:max-w-2xl">
              <form action="#" method="post" className="mt-8">
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
                    id="first-name"
                    name="first-name"
                    autoComplete="first-name"
                    placeholder="Enter a topic for a Quiz"
                    className="mt-2"
                    required
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Choose the number of Questions
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter a number"
                    autoComplete="first-name"
                    className="mt-2"
                    required
                  />
                </div>
                <button className="my-7 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold">
                  Generate Questions 
                </button>
                {/* <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                    <button className="px-5 py-2 rounded-md text-black border my-7 border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1">MCQ</button>
                </div> */}
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizCreation;
