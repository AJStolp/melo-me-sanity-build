import { getPage } from "@/sanity/sanity-utils";

type IProps = {
  params: { slug: "earn" };
};

export default async function Page(props: IProps) {
  const page = await getPage(props.params.slug);

  // const page = await getPages();

  // return (
  //   <div className="text-white">
  //     {page.map((val) => {
  //       return <div>{val.heading}</div>;
  //     })}
  //   </div>
  // );
  // {
  //   console.log(page, "page");
  // }
  return <div className="text-white">{page.heading}</div>;
}
