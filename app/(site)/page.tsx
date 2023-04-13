import { getHero } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";

export default async function Home() {
  const hero = await getHero();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero data={hero} />
    </div>
  );
}
