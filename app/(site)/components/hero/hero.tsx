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
          <div key={val._id}>
            <h1>{val.heading}</h1>
            {val.image && (
              <Image
                priority
                src={val.image}
                alt={val.alt}
                width={500}
                height={500}
                style={{ width: "auto" }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
