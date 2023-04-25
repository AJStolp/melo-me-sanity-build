import { getTable, getHero } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";
import Table from "./components/table/table";

export default async function Home() {
  const hero = await getHero();
  const table = await getTable();

  return (
    <>
      <Hero data={hero} />
      <Table data={table} />
    </>
  );
}
