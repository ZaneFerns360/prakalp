import React from 'react'
import { Card, Divider, TextInput } from "@tremor/react";
import { BookOpen, CopyCheck } from "lucide-react";
import Image from "next/image";

const Form = () => {
  return (
    <div className="mt-1 bg-[url(/Hero/bg.jpeg)] py-12">
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
      </div>
    </div>
  )
}

export default Form