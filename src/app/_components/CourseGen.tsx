import { ChevronLeft, ChevronRight, MonitorPlay } from "lucide-react";
import React from "react";

const CourseGen = () => {
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="z-16 fixed left-0 top-16 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay/>
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden space-y-2 py-2">
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 3
                  </a>
                </li>
              </ul>
            </li>

            {/* <li>
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay/>
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 2
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden space-y-2 py-2">
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay/>
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 3
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden space-y-2 py-2">
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MonitorPlay/>
                <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                  Chapter Name 4
                </span>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden space-y-2 py-2">
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Topic Name 3
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="mt-20 p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4">
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div className="col-span-2 flex h-[25rem] items-center justify-center rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div>
              <h1 className="my-3 text-2xl font-bold ">Course Name</h1>
              <p>Course Description</p>
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
              <ChevronLeft />
              Previous Topic
            </div>
            <div className="flex w-full rounded-md border border-black px-5 py-2 text-black hover:-translate-y-1 hover:translate-x-1 hover:rounded-lg hover:border-b-4 hover:border-l-4 hover:bg-white hover:font-semibold ">
              Next Topic
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGen;
