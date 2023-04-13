import { navigation } from "@/types/navigation";
import Link from "next/link";

interface INavigationProps {
  data: navigation[];
}

export default function Navigation(props: INavigationProps) {
  return (
    <nav>
      {props.data.map((val) => {
        return (
          <Link key={val._id} href={val.slug}>
            {val.linkname}
          </Link>
        );
      })}
    </nav>
  );
}
