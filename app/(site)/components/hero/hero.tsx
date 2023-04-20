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
          <div key={val._id}>
            {val.image && (
              <Image
                fill
                className="relative -top-[50px] homepage-hero-image"
                src={val.image}
                alt={"trimming cannabis"}
                priority
                key={val._id}
              />
            )}
            <section key={val._id}>
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
