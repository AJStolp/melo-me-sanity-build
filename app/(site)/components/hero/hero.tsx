import { home } from "@/types/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import { Lato, Karla, Nunito } from "next/font/google";
import Image from "next/image";

interface IHero {
  data: home[];
}

const latoFont = Lato({ weight: ["900"], subsets: ["latin"] });
const karlaFont = Karla({ weight: ["400"], subsets: ["latin"] });
const nunitoFont = Nunito({ weight: ["700"], subsets: ["latin"] });

// const ctaStyles = `${nunitoFont.className} text-xl rounded bg-emerald-500 py-2 px-2.5 text-white hover:underline hover:bg-transparent hover:text-white mdHero:mt-8`;

const ctaStyles = `${nunitoFont.className} text-white text-xl bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`;

export default function Home(props: IHero) {
  return (
    <>
      {props.data.map((val) => {
        return (
          <div key={val._id} className="mdHero:flex md:m-auto pt-2 container">
            <section className="p-4 hidden md:block md:w-1/2m xl:p-2 lg: mt-8">
              <h1
                className={`md:text-2xl lg:text-5xl text-white ${latoFont.className}`}
              >
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
                <section>
                  <p
                    className={`text-xl text-white py-8 ${karlaFont.className}`}
                  >
                    {val.copy}
                  </p>
                </section>
              </section>
              <section>
                <button type="button" className={ctaStyles}>
                  {val.cta}
                </button>
              </section>
            </section>
            {val.image && (
              <Image
                fill
                className="relative -top-[79px] mdHero:top-0 right-0 homepage-hero-image mdHero:w-1/2 -z-[10]"
                src={val.image}
                alt={"trimming cannabis"}
                priority
              />
            )}
            <section className="p-4 relative mdHero:top[0px] -top-[78px] md:hidden mdHero:w-1/2">
              <h1 className={`text-4xl text-white ${latoFont.className}`}>
                {val.heading}
              </h1>
              <p className={`text-xl text-white py-8 ${karlaFont.className}`}>
                {val.copy}
              </p>
              <button className={ctaStyles}>{val.cta}</button>
            </section>
          </div>
        );
      })}
    </>
  );
}
