"use client";
import React from "react";
import { Card, Divider, TextInput } from "@tremor/react";
import { BookOpen, CopyCheck } from "lucide-react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Form = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
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
                  <Dialog.Panel className="w-full max-w-[900px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="mb-5 text-lg font-medium leading-6 text-gray-900"
                    >
                      Enter Your Details
                    </Dialog.Title>
                    <div className="grid gap-3 md:grid-cols-2">
                      <Card>
                        <p>This Information Helps Us Better Your Experience</p>
                        <Divider />
                        <div className=" sm:mx-auto sm:max-w-2xl">
                          <form action="#" method="post" className="mt-8">
                            <div className=" mb-3">
                              <label
                                htmlFor="first-name"
                                className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                              >
                                Full Name
                                <span className="text-red-500">*</span>
                              </label>
                              <TextInput
                                type="text"
                                id="first-name"
                                name="first-name"
                                autoComplete="first-name"
                                placeholder="Enter your full name"
                                className="mt-2"
                                required
                              />
                            </div>
                            <div className="mb-3 ">
                              <label
                                htmlFor="first-name"
                                className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                              >
                                Age
                                <span className="text-red-500">*</span>
                              </label>
                              <TextInput
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="Enter your age"
                                autoComplete="first-name"
                                className="mt-2"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="first-name"
                                className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                              >
                                Phone Number
                                <span className="text-red-500">*</span>
                              </label>
                              <TextInput
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="Enter your phone number"
                                autoComplete="first-name"
                                className="mt-2"
                                required
                              />
                            </div>
                            <div className="">
                              <label
                                htmlFor="first-name"
                                className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                              >
                                Email
                                <span className="text-red-500">*</span>
                              </label>
                              <TextInput
                                type="email"
                                id="Email"
                                name="email"
                                placeholder="Enter a valid email ID"
                                autoComplete="first-name"
                                className="mt-2"
                                required
                              />
                            </div>
                            <button className="my-7 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold">
                              Submit
                            </button>
                            {/* <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                    <button className="px-5 py-2 rounded-md text-black border my-7 border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1">MCQ</button>
                </div> */}
                          </form>
                        </div>
                      </Card>
                      <Image
                        src="/Eddie/eddieLove.png"
                        className="my-10 ml-16"
                        width={300}
                        height={300}
                        alt="Eddie"
                      />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      {/* <div className="mt-1 bg-[url(/Hero/bg.jpeg)] py-12">
      <div className="my-16 flex items-center justify-center py-16">
        <div className="grid gap-3 md:grid-cols-2">
        <Card>
            <h1 className="text-2xl font-bold">Enter Your Details</h1>
            <p>This Information Helps Us Better Your Experience</p>
            <Divider/>
            <div className=" sm:mx-auto sm:max-w-2xl">
              <form action="#" method="post" className="mt-8">
                <div className=" mb-3">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Full Name
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="first-name"
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>
                <div className="mb-3 ">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Age
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter your age"
                    autoComplete="first-name"
                    className="mt-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter your phone number"
                    autoComplete="first-name"
                    className="mt-2"
                    required
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="dark:text-dark-tremor-content-strong text-tremor-default font-medium text-tremor-content-strong"
                  >
                    Email
                    <span className="text-red-500">*</span>
                  </label>
                  <TextInput
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="Enter a valid email ID"
                    autoComplete="first-name"
                    className="mt-2"
                    required
                  />
                </div>
                <button className="my-7 rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold">
                  Submit 
                </button>
              </form>
            </div>
          </Card>
          <Image
            src="/Eddie/eddieLove.png"
            className="my-10 ml-16"
            width={300}
            height={300}
            alt="Eddie"
          />
          
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Form;
