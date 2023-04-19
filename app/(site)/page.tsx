import { getHero } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";

export default async function Home() {
  const hero = await getHero();

  return (
    <>
      <Hero data={hero} />
      {/* <div>I am the new div</div> */}
    </>
  );
}
