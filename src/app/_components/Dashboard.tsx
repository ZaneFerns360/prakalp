"use client";
import React from "react";
import Image from "next/image";
import {
  BarChart,
  BarList,
  Card,
  CategoryBar,
  ProgressCircle,
  SparkAreaChart,
  Tracker,
} from "@tremor/react";
import { GalleryVerticalEnd, History, Search } from "lucide-react";

const Dashboard = () => {
  const chartdata = [
    {
      month: "Jan 21",
      Performance: 1490,
    },
    {
      month: "May 21",
      Performance: 2390,
    },
    {
      month: "Jun 21",
      Performance: 1890,
    },
    {
      month: "Jul 21",
      Performance: 3000,
    },
  ];

  const newchartdata = [
    {
      date: "Jan 22",
      "Videos Per Day": 7,
    },
    {
      date: "Feb 22",
      "Videos Per Day": 3,
    },
    {
      date: "Mar 22",
      "Videos Per Day": 9,
    },
    {
      date: "Apr 22",
      "Videos Per Day": 8,
    },
    {
      date: "May 22",
      "Videos Per Day": 2,
    },
    {
      date: "Jun 22",
      "Videos Per Day": 4,
    },
  ];

  const datahero = [
    { name: "Cognitive", value: 46 },
    { name: "Verbal", value: 31 },
    { name: "Vocabulary", value: 4 },
    { name: "Knowledge", value: 10 },
  ];

  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div>
      <div>
        <main className="mx-auto max-w-7xl p-8 pt-20">
          <div className="flex items-center">
            <h2 className="mr-2 text-3xl font-bold tracking-tight">
              Dashboard
            </h2>
          </div>

          <div className="my-5">
            <Card className="mb-7 flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/Eddie/eddieLogo.png"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Image"
                />
              </div>
              <div className="mx-5 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 ">
                  Student Name
                </p>
                <p className="truncate text-sm text-gray-500">Student Id</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                <div>
                  {/* Use the split values inside JSX */}
                  <div>Standard</div>
                  <div className="text-xs font-light">Age</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Course Gen  */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="flex justify-between gap-3 md:gap-10">
                <div className="my-auto">
                  <h1 className="text-lg font-bold md:text-xl">
                    Course Generator
                  </h1>
                  <p className="md:text-md text-sm">
                    Learn the best from whoever you want, whenever you want, at
                    your own pace
                  </p>
                </div>
                <Image
                  src="/Eddie/eddieSmile.png"
                  width={80}
                  height={80}
                  alt="Eddie"
                />
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="flex w-full flex-col items-center justify-center">
                <a href="/course-gallery">
                  <div className="flex w-full justify-between">
                    <h1 className="text-lg font-bold md:text-xl">Gallery</h1>
                    <GalleryVerticalEnd size={20} />
                  </div>
                  <p className="md:text-md text-sm">
                    Check out all the courses you generated
                  </p>
                </a>
              </Card>
              <Card className="flex w-full flex-col items-center justify-center">
                <a href="/course-explore">
                <div className="flex w-full justify-between">
                  <h1 className="text-lg font-bold md:text-xl">Explore</h1>
                  <Search size={20} />
                </div>
                <p className="md:text-md text-sm">
                  Check out all the courses you generated
                </p>
                </a>
              </Card>
            </div>
          </div>

          {/* Recent Performance  */}
          <div className="my-5">
            Your Course Performance
            <div className="my-2 grid grid-cols-3 gap-3">
              <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                  <div className="flex items-center justify-start space-x-5">
                    <ProgressCircle value={80} size="md">
                      <span className="text-xs font-medium text-slate-700">
                        80%
                      </span>
                    </ProgressCircle>
                    <div>
                      <p className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong">
                        Countries
                      </p>
                      <p className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                        What is special about countries?
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                  <div className="flex items-center justify-start space-x-5">
                    <ProgressCircle value={30} size="md">
                      <span className="text-xs font-medium text-slate-700">
                        30%
                      </span>
                    </ProgressCircle>
                    <div>
                      <p className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong">
                        BlockChain
                      </p>
                      <p className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                        Decentralized Control
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                  <div className="flex items-center justify-start space-x-5">
                    <ProgressCircle value={65} size="md">
                      <span className="text-xs font-medium text-slate-700">
                        65%
                      </span>
                    </ProgressCircle>
                    <div>
                      <p className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong">
                        Harappan Civilization
                      </p>
                      <p className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                        When was the Harappan Civilization ?
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Quiz Gen  */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card className="flex w-full flex-col items-center justify-center">
              <a href="/quiz-history">
                <div className="flex w-full justify-between">
                  <h1 className="text-lg font-bold md:text-xl">Quiz History</h1>
                  <History size={20} />
                </div>
                <p className="md:text-md text-sm">
                  Check out all the quizzes you attempted
                </p>
              </a>
            </Card>
            <Card className="md:col-span-3">
              <a href="/create-quiz">
                <div className="flex justify-between gap-3">
                  <Image
                    src="/Eddie/eddieNGamer.png"
                    width={80}
                    height={80}
                    className="my-auto"
                    alt="Eddie"
                  />

                  <div className="leading-1.5 hidden w-full max-w-[360px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 md:block">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900 ">
                        Eddie, Your Buddy
                      </span>
                      <span className="text-sm font-normal text-gray-500">
                        Now
                      </span>
                    </div>
                    <p className="py-2.5 text-sm font-normal text-gray-900 ">
                      Practice makes you Perfect, Come On!! Let&apos;s learn
                      together <span className="font-bold">"Ribbit"!</span>
                    </p>
                  </div>

                  <div className="my-auto md:mr-10">
                    <h1 className="text-lg font-bold md:text-xl">
                      Quiz Generator
                    </h1>
                    <p className="md:text-md text-sm">
                      Test your knowledge, practice well and revise by using the
                      Quiz generator to make a quiz with single word prompts
                    </p>
                  </div>
                </div>
              </a>
            </Card>
          </div>

          {/* Streaks  */}
          <div className="mt-4 gap-4 md:flex">
            {/* <div className="flex gap-3"> */}
            <Card className=" flex w-full max-w-[7rem] p-2 px-0 md:my-0">
              {/* <Image className="rounded-full" src='/Hero/streaks.gif' height={60} width={60} alt="Streaks" /> */}
              <video
                className="h-16 w-16 rounded-full"
                src="/Hero/streaks.mp4"
                autoPlay
                muted
                loop
              />
              <h3 className="my-auto text-3xl font-semibold">3</h3>
            </Card>
            <Card className="mx-auto max-w-sm">
              <div className="flex items-center justify-between space-x-0 md:space-x-5">
                <div>
                  <p className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong">
                    No. of Quizzes Completed
                  </p>
                  <p className="dark:text-dark-tremor-content hidden text-tremor-default text-tremor-content md:block">
                    Total no. of Quizzes Attempted
                  </p>
                </div>
                <span className="text-xl font-medium text-slate-700">75</span>
              </div>
            </Card>
            {/* </div> */}
            <Card className="mx-auto my-4 flex w-full items-center justify-between px-4 py-3.5 md:my-0">
              <div className="flex items-center space-x-2.5">
                <div className="flex flex-col">
                  <p className="dark:text-dark-tremor-content-strong font-medium text-tremor-content-strong">
                    Student Name
                  </p>
                  <span className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                    Today&apos;s Progress
                  </span>
                </div>
              </div>

              <SparkAreaChart
                data={chartdata}
                categories={["Performance"]}
                index={"month"}
                colors={["emerald"]}
                className="h-8 w-20 sm:h-10 sm:w-36"
              />
              <div className="flex items-center space-x-5">
                <div className="hidden flex-col md:flex">
                  <span className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                    Videos
                  </span>
                  <span className="dark:text-dark-tremor-content-strong mx-auto font-medium text-tremor-content-strong">
                    3
                  </span>
                </div>
                <div className="hidden flex-col md:flex">
                  <span className="dark:text-dark-tremor-content text-tremor-default text-tremor-content">
                    Quizzes
                  </span>
                  <span className="dark:text-dark-tremor-content-strong mx-auto font-medium text-tremor-content-strong">
                    5
                  </span>
                </div>
                <span className="rounded bg-emerald-500 px-2 py-1 text-tremor-default font-medium text-white">
                  +1.72%
                </span>
              </div>
            </Card>
          </div>

          {/* Your Core Performance  */}
          <div className="my-5">
            Your Core Performance
            <div className="my-2 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="flex justify-center gap-3">
                  <Card className="">
                    <p className="mb-5 text-start font-mono text-sm text-slate-500">
                      Performance Ratio
                    </p>
                    <CategoryBar
                      values={[40, 30, 20, 10]}
                      colors={["rose", "orange", "yellow", "emerald"]}
                      markerValue={62}
                    />
                  </Card>
                </div>
                <Card>
                  <p className="mb-4 text-start font-mono text-sm text-slate-500">
                    Strength
                  </p>
                  <BarList
                    data={datahero}
                    sortOrder="ascending"
                    className="mx-auto"
                  />
                </Card>
              </div>

              <Card>
                <BarChart
                  className="h-80"
                  data={newchartdata}
                  index="date"
                  categories={["Videos Per Day"]}
                  colors={["emerald"]}
                  valueFormatter={dataFormatter}
                  yAxisWidth={60}
                  onValueChange={(v) => console.log(v)}
                />
              </Card>
            </div>
          </div>

          {/* <div className="mx-auto my-10 grid w-[80%] grid-cols-2 gap-3">
            <div className="my-auto text-black">
              <div className=" mb-3 text-4xl font-bold">
                Unlock the Joy of your child&apos;s learning through Interactive
                Learning
              </div>
              <p className="">
                Discover the power of interactive education that engages
                children and makes learning fun. Our platform combines
                gamification with educational content to create an immersive
                experience that sparks curiosity and fosters a love for learning
              </p>
              <div className="my-7">
                <a
                  href="/evaluators-dashboard"
                  className="my-7 w-[30%] rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold"
                >
                  Parental Dashboard
                </a>
              </div>
            </div>

            <Image
              src="/Hero/newWorld.png"
              className=""
              width={500}
              height={500}
              alt="World"
            />
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
