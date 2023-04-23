import { dailydeals } from "@/types/daily-deals";

type IProps = {
  data: dailydeals[];
};

export default function DailyDeals(props: IProps) {
  return (
    <>
      <div className="grid grid">
        {props.data.map((val) => {
          return <div>{/* <h2>{val.day}</h2> */}</div>;
        })}
      </div>
    </>
  );
}
