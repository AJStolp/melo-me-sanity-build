import { table } from "@/types/table";
import { PortableText } from "@portabletext/react";

type IProps = {
  data: table[];
};

export default function Table(props: IProps) {
  return (
    <div>
      <section className="container p-4 m-auto">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:m-auto xl:w-3/4">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Day of the Week
                </th>
                <th scope="col" className="px-6 py-3">
                  Deal
                </th>
                {/* <th scope="col" className="px-6 py-3">
                      Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Price
                  </th> */}
              </tr>
            </thead>
            {props.data.map((val) => {
              return (
                <tbody key={val._id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.heading}
                    </th>
                    <td className="px-6 py-4">{val.content}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
}
