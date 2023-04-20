import { hero } from "@/types/hero";
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
            className="md:flex items-center md:container md:m-auto"
          >
            <section key={val._id} className="p-4 hidden md:block">
              {" "}
              <h1 className="text-4xl text-white">{val.heading}</h1>
              <button className={ctaStyles}>{val.cta}</button>
            </section>
            {val.image && (
              <Image
                fill
                className="relative -top-[50px] homepage-hero-image -z-[10]"
                src={val.image}
                alt={"trimming cannabis"}
                priority
                key={val._id}
              />
            )}

            <section
              key={val._id}
              className="p-4 relative -top-[78px] md:hidden"
            >
              {" "}
              <h1 className="text-4xl text-white">{val.heading}</h1>
              <button className={ctaStyles}>{val.cta}</button>
            </section>
          </div>
        );
      })}
    </>
  );
}
