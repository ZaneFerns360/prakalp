"use client";
import Image from "next/image";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const EddieWinning = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
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
                    Eddie is Loving It
                  </Dialog.Title>
                  <div className="flex flex-row gap-3">
                    <Image
                      src="/Eddie/eddieLove.png"
                      className="p-3"
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
                      <div className="leading-1.5 flex w-full max-w-[400px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4">
                        <div className="flex w-full items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 ">
                            Eddie, Your Buddy
                          </span>
                          <span className="text-sm font-normal text-gray-500">
                            Now
                          </span>
                        </div>
                        <p className="py-2.5 text-sm font-normal text-gray-900 ">
                          Your&apos;e on FIREEEE!!! Keep up the Good Work.. This
                          is amazing
                          <span className="font-bold">Ribbit!</span>
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
  );
};

export default EddieWinning;
