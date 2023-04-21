import { hero } from "@/types/hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { Dongle } from "next/font/google";
import Image from "next/image";

interface IHero {
  data: hero[];
}

const dongleFont = Dongle({ weight: ["700"], subsets: ["latin"] });
const ctaStyles = `${dongleFont.className} text-3xl rounded bg-melo py-1 px-2.5 text-white hover:underline hover:bg-transparent hover:text-white mt-8`;

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
              {" "}
              <h1 className="md:text-2xl lg:text-5xl text-white">
                {val.heading}
              </h1>
              <section className="flex flex-row gap-4 justify-center ">
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
              // relative -top-[80px] homepage-hero-image -z-[10] md:w-1/2 lg:h-50 xl:h-full xl:-top-[88px] xl:left-[31px]

              // md:fixed md:left-auto md:top-0
              <Image
                fill
                // className="relative -top-[88px] homepage-hero-image -z-[10] md:w-1/2 lg:h-50 xl:h-full -top-[88px] xl:left-[31px]"
                className="relative -top-[88px] homepage-hero-image -z-[10] md:fixed md:left-auto md:top-0 md:w-1/2 md:h-[45%] lg:h-auto"
                src={val.image}
                alt={"trimming cannabis"}
                priority
              />
            )}

            <section className="p-4 relative -top-[78px] md:hidden">
              {" "}
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
