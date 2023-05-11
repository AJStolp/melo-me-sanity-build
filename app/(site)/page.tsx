import { getTable, getHero, getHome } from "@/sanity/sanity-utils";
import Hero from "./components/hero/hero";
import Table from "./components/table/table";

export default async function Home() {
  const table = await getTable();
  const home = await getHome();

  return (
    <>
      <Hero data={home} />
      <Table data={table} />
    </>
  );
}
