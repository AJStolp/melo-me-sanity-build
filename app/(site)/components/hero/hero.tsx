import { hero } from "@/types/hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { Dongle } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IHero {
  data: hero[];
}

const dongleFont = Dongle({ weight: ["700"], subsets: ["latin"] });

const ctaStyles = `${dongleFont.className} text-xl rounded bg-melo py-2 px-2.5 text-white hover:underline hover:bg-transparent hover:text-white mdHero:mt-8`;

export default function Home(props: IHero) {
  return (
    <>
      {props.data.map((val) => {
        return (
          <div
            key={val._id}
            className="md:flex items-center md:m-auto pt-2 container"
          >
            <section className="p-4 hidden md:block md:w-1/2">
              <h1 className="md:text-2xl lg:text-5xl text-white">
                {val.heading}
              </h1>
              <section className="flex flex-row gap-4 justify-center">
                <section className="hero-icon">
                  <FontAwesomeIcon
                    height={25}
                    width={25}
                    icon={faCannabis}
                    aria-hidden="true"
                    style={{ color: "#586F56", marginTop: "35px" }}
                  />
                </section>
                <section className="yaya">
                  <p className="text-xl text-white py-8">{val.description}</p>
                </section>
              </section>
              <section>
                <button className={ctaStyles}>{val.cta}</button>
              </section>
            </section>
            {val.image && (
              <Image
                fill
                // className="relative -top-[88px] homepage-hero-image -z-[10] mdHero:fixed mdHero:left-auto mdHero:top-0 mdHero:w-1/2 mdHero:h-[45%] lg:h-auto"
                className="relative -top-[79px] mdHero:top-0 right-0 homepage-hero-image mdHero:w-1/2 -z-[10]"
                src={val.image}
                alt={"trimming cannabis"}
                priority
              />
            )}

            <section className="p-4 relative mdHero:top[0px] -top-[78px] md:hidden mdHero:w-1/2">
              <h1 className="text-4xl text-white">{val.heading}</h1>
              <p className="text-xl text-white py-8">{val.description}</p>
              <button className={ctaStyles}>{val.cta}</button>
            </section>
          </div>
        );
      })}
    </>
  );
}
