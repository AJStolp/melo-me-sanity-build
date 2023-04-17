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
          <div key={val._id} className="h-full w-full">
            <h1>{val.heading}</h1>
            {val.image && (
              <Image
                priority
                src={val.image}
                alt={val.heading}
                height={1000}
                width={1200}
                style={{ width: "auto", height: "auto" }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
