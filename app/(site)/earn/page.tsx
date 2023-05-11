import { getPage } from "@/sanity/sanity-utils";
import Jumbotron from "../components/jumbotron/jumbotron";

export default async function Earn() {
  const page = await getPage();

  return (
    <div className="mt-8 container mx-auto">
      {/* <Jumbotron data={jumbotron} /> */}
    </div>
  );
}
