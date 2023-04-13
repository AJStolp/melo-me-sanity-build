import { getNavigation } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Navigation() {
  const navigation = await getNavigation;

  return (
    <nav>
      {navigation.map((value) => {
        return <Link href={"#"}>{value.navigation}</Link>;
      })}
    </nav>
  );
}
