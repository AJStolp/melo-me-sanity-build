import { hero } from "@/types/hero";
import Image from "next/image";

interface IHero {
  data: hero[];
}

export default function Home(props: IHero) {
  return (
    <>
      {props.data.map((val) => {
        return (
          <div
            key={val._id}
            // className="main-hero"
            className="bg-no-repeat bg-cover w-auto aspect-auto min-h-screen object-cover main-hero bg-center"
            style={{
              backgroundImage: `url(${val.image})`,
            }}
          >
            {/* {val.image && (
              <Image
                priority
                src={val.image}
                alt={val.heading}
                fill
                // style={{ width: "auto", height: "auto" }}
                className="bg-transparent"
              />
            )} */}
            <h1>{val.heading}</h1>
          </div>
        );
      })}
    </>
  );
}
