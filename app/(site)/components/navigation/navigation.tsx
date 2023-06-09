"use client";

import { navigation } from "@/types/navigation";
import Link from "next/link";
import { Nunito } from "next/font/google";
import useSetScroll from "@/app/hooks/set-scroll";

interface INavigationProps {
  data: navigation[];
}

const nunitoFont = Nunito({ subsets: ["latin"] });

const navStyles = `container m-auto z-10 top-0 right-0 bottom-0 left-0 text-white text-2xl font-bold ${nunitoFont.className} container-max-width`;

export default function Navigation(props: INavigationProps) {
  const { scroll } = useSetScroll();

  return (
    <div
      aria-label="Main menu"
      role="region"
      // className="container mx-auto p-4 sticky top-0"
      className={
        scroll
          ? `mx-auto sticky top-0 bg-black bg-opacity-75 rounded z-20`
          : `mx-auto sticky top-0 z-20`
      }
    >
      <nav className={navStyles}>
        <div className="flex flex-wrap items-baseline justify-between mx-auto">
          <Link href="/" className="flex items-center text-2xl">
            Melo
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden bg-black bg-opacity-75 w-full md:bg-transparent rounded md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8">
              {props.data.map((val) => {
                return (
                  <li key={val._id} className="my-2">
                    <Link
                      href={val.slug}
                      className="hover:text-white hover:underline hover:text-[#499b4a]"
                    >
                      {val.linkname}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
