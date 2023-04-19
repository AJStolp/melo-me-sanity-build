import { hero } from "@/types/hero";
import { Dongle } from "next/font/google";

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
            // className="main-hero"
            className="bg-no-repeat bg-cover w-auto aspect-auto min-h-screen object-cover main-hero bg-center text-nunito container mx-auto p-4"
            style={{
              backgroundImage: `url(${val.image})`,
            }}
          >
            <section>
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
