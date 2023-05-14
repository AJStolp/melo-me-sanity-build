import { getEarn } from "@/sanity/sanity-utils";
import {
  faCannabis,
  faJoint,
  faBong,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Earn() {
  const earn = await getEarn();

  return (
    <section className="container mx-auto my-16 container-max-width">
      {earn.map((val) => {
        return (
          <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              {val.heading}
            </h1>
            <p className="text-lg font-normal text-slate-50 lg:text-xl dark:text-gray-400 mt-8 mb-12">
              {val.copy}
            </p>
            <p className="text-lg font-normal text-slate-50 lg:text-xl dark:text-gray-400 mt-8 mb-12">
              {val.scale}
            </p>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faCannabis}></FontAwesomeIcon>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-indigo-500 dark:text-white">
                  {val.step1}
                </h3>
                <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
                  {val.subcopy1}
                </p>
              </li>
              <li className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faJoint}></FontAwesomeIcon>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-indigo-500 dark:text-white">
                  {val.step2}
                </h3>
                <p className="text-base font-normal text-white dark:text-gray-400">
                  {val.subcopy2}
                </p>
              </li>
              <li className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faBong}></FontAwesomeIcon>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-indigo-500 dark:text-white">
                  {val.step3}
                </h3>
                <p className="text-base font-normal text-white dark:text-gray-400">
                  {val.subcopy3}
                </p>
              </li>
              <li className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-indigo-500 dark:text-white">
                  {val.step4}
                </h3>
                <p className="text-base font-normal text-white dark:text-gray-400">
                  {val.subcopy4}
                </p>
              </li>
            </ol>
          </>
        );
      })}
    </section>
  );
}
