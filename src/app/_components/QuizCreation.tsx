"use client";
import { Card, Divider, TextInput } from "@tremor/react";
import { BookOpen, CopyCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import QuizType1 from "./QuizType1";

type QnA = {
  topic: string;
  question: string;
  options: string[];
  answer: number;
};

type QData = {
  qna: QnA[];
};

const QuizCreation = () => {
  const router = useRouter();
  const [topic, setTopic] = useState<string | undefined>(undefined);
  const [qna, setQna] = useState<QData | undefined>();

  const getCourse = async () => {
    const res = await axios.post<QData>(
      "https://thinklabs.azurewebsites.net/api/makeqna",
      {
        topics: topic,
      },
    );
    if (res) {
      setQna(res.data);
    }
  };

  return !qna ? (
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
            <Divider />
            <div className="sm:mx-auto sm:max-w-2xl">
              <form action="#" method="post" className="mt-8">
                <div className="mb-4">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Topic
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    onChange={(e) => setTopic(e.target.value)}
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="first-name"
                    placeholder="Enter a topic for a Quiz"
                    className="mt-2"
                    required
                  />
                </div>
                <div
                  onClick={getCourse}
                  className="my-7 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold"
                >
                  Generate Questions
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ) : (
    <QuizType1 params={{ q: qna }} />
  );
};

export default QuizCreation;
