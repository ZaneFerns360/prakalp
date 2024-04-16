"use client";
import Image from "next/image";
import { Card } from "@tremor/react";
import { Award, Target, Trophy } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React from "react";

const QuizStats: React.FC<{ params: { score: number } }> = ({ params }) => {

  const score = params.score;
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Congratulations
                    </Dialog.Title>
                    <Card className="mt-4">
                      <div className="flex justify-between">
                        <div className=" text-xl font-bold">Final Score</div>
                        <div className="flex gap-3">
                          {score }/ 6
                          <Award />
                        </div>
                      </div>
                    </Card>
                    <div className="grid gap-3 md:grid-cols-2">
                    <Card className="mt-4">
                        <div className=" text-xl font-bold">Grade</div>
                        <div className="flex justify-between">
                          {
                            score <= 3 ?
                          <h3 className="my-auto">Fail</h3> : <h3 className="my-auto">Pass</h3>
                          }
                          <Trophy />
                        </div>
                      </Card>
                      <Card className="mt-4">
                        <div className=" text-xl font-bold">Accuracy</div>
                        <div className="flex justify-between">
                          <h3>{((score/6) * 100).toFixed(2) }%</h3>
                          <Target />
                        </div>
                      </Card>
                    </div>
                    <div className=" my-3 flex flex-row gap-3">
                      <Image
                        src="/Eddie/eddieLogo.png"
                        className="my-auto"
                        height={120}
                        width={120}
                        alt="Eddie "
                      />
                      <div className="flex items-start gap-2.5 py-2">
                        {/* <Image
                        src="/eddieLogo.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Image"
                        /> */}
                        <div className="leading-1.5 flex w-full max-w-[360px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 ">
                              Eddie, Your Buddy
                            </span>
                            <span className="text-sm font-normal text-gray-500">
                              Now
                            </span>
                          </div>
                          <p className="py-2.5 text-sm font-normal text-gray-900 ">
                            Your Doing Great!! Keep Working like this and
                            your&apos;e nearly there.{" "}
                            <span className="font-bold">"Ribbit"!</span>
                          </p>
                          <span className="text-sm font-normal text-gray-500">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default QuizStats;
