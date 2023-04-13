import Image from "next/image";
import { getLandingPage } from "@/sanity/sanity-utils";

export default async function Home() {
  const landingpage = await getLandingPage();

  return (
    <>
      {landingpage.map((val) => {
        return (
          <div key={val._id}>
            <h1>{val.heading}</h1>
            {val.image && (
              <Image src={val.image} alt={val.alt} width={500} height={500} />
            )}
          </div>
        );
      })}
    </>
  );
}
