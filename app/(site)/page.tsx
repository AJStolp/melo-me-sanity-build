import { getTable, getHero, getJumbotron } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";
import Table from "./components/table/table";
import Jumbotron from "./components/jumbotron/jumbotron";

export default async function Home() {
  const hero = await getHero();
  const table = await getTable();
  // const jumbotron = await getJumbotron();

  return (
    <>
      <Hero data={hero} />
      <Table data={table} />
    </>
  );
}
