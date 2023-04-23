import { accordion } from "@/types/accordion";
import { PortableText } from "@portabletext/react";
import { Nunito, Lato } from "next/font/google";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IProps = {
  data: accordion[];
};

const nunitoFont = Nunito({ subsets: ["latin"] });
const latoFont = Lato({ weight: ["900"], subsets: ["latin"] });

export default function Accordion(props: IProps) {
  return (
    <>
      {props.data.map((val, index) => {
        const headerId = `accordion-open-heading-${index + 1}`;
        const bodyId = `accordion-open-body-${index + 1}`;
        return (
          <div
            id="accordion-open"
            data-accordion="open"
            className="mb-8 p-4"
            key={val._id}
          >
            <h2
              id={headerId}
              className={`text-3x ${latoFont.className} font-bold`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 text-xl text-left text-white bg-sky-600 rounded-xl focus:ring-2 focus:ring-white"
                data-accordion-target={`#${bodyId}`}
                aria-expanded="true"
                aria-controls={bodyId}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    height={30}
                    width={30}
                    icon={faMoneyCheckDollar}
                    aria-hidden="true"
                    style={{ color: "black", marginRight: " 10px" }}
                  />
                  {val.heading}
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id={bodyId}
              className="text-white open-body show"
              aria-labelledby={bodyId}
            >
              <PortableText value={val.content} />
            </div>
          </div>
        );
      })}
    </>
  );
}
