import { getAccordion, getHero } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";
import Accordion from "./components/accordion/accordion";

export default async function Home() {
  const hero = await getHero();
  const accordion = await getAccordion();

  return (
    <>
      <Hero data={hero} />
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Accordion data={accordion} />
      </section>
    </>
  );
}
