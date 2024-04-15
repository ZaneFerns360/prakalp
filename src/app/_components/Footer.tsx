import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-transparent rounded-lg mt-4 relative z-[20]">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src='/Eddie/eddieNoBg.png' className="rounded-full my-auto" height={40} width={40} alt="logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Think Labs
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/chatbot" className="hover:underline me-4 md:me-6">
                Chatbot
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-3" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024
          <a href="/" className="hover:underline">
            Think Labs
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
