import { getPage } from "@/sanity/sanity-utils";

type IProps = {
  params: { slug: string };
};

export default async function Page(props: IProps) {
  const page = await getPage(props.params.slug);

  return <div className="text-white">{page?.heading}</div>;
}
