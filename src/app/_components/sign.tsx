import {
  CheckCircle,
  Gamepad2,
  LayoutDashboard,
  LogOut,
  PowerOff,
  User2,
  Waypoints,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const Navbar = async () => {
  const session = getServerAuthSession();

  const sessionValue = await session;

  // const [userType, setUserType] = useState(false);

  // const toggleUserType = () => {
  //   setUserType(!userType);
  // }

  return (
    <div>
      <nav className="fixed top-0 z-20 w-full bg-transparent backdrop-blur-3xl">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <a
            href="/"
            className="flex items-center space-x-3 text-black rtl:space-x-reverse"
          >
            <Image
              src="/Eddie/eddieNoBg.png"
              className="my-auto rounded-full"
              height={40}
              width={40}
              alt="logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
              ThinkLabs
            </span>
          </a>

          {/* UI for a Small Device - Phone */}
          <ul className="flex flex-row gap-3 md:hidden">
            {(await session) ? (
              <>
                <li>
                  <a
                    href="/organization/dashboard"
                    className="block rounded px-1 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                  >
                    <LayoutDashboard />
                  </a>
                </li>

                <li>
                  <a
                    href="/organization/dashboard"
                    className="block rounded px-1 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                  >
                    <Gamepad2 />
                  </a>
                </li>
                <div className="">
                  <Link
                    href={
                      (await session) ? "/api/auth/signout" : "/api/auth/signin"
                    }
                    className="block rounded p-2 text-gray-900 md:border-0 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    <PowerOff />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="relative inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50"
                >
                  <User2 />
                  Sign In
                </button>
              </>
            )}
          </ul>

          {/* UI for a Large Device - Laptop */}
          <div
            className="hidden w-full text-white md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link
                  href="/organization/dashboard"
                  className="my-2 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/organization/dashboard"
                  className="my-2 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  <Gamepad2 />
                </Link>
              </li>

              <Link
                href={
                  (await session) ? "/api/auth/signout" : "/api/auth/signin"
                }
                className="block rounded px-3 text-gray-900 hover:bg-gray-100 md:border-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                {(await session) ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50"
                  >
                    <User2 />
                    Sign Out
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 "
                    >
                      <User2 />
                      Sign In
                    </button>
                  </>
                )}
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
