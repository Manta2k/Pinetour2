import { Minititle } from "./Minititle";
import { LoopedWork } from "./LoopedWork";
import { Data_Work } from "@/datas/DataOfWork";
export const Work = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center bg-white container dark:bg-slate-900 dark:text-white"
    >
      <div className="mt-[80px]">
        <Minititle />
      </div>
      <h3 className="text-gray-600 text-[25px] mt-[80px]">
        Some of the noteworthy projects I have built:
      </h3>
      <LoopedWork wData={Data_Work} />
      <LoopedWork wData={Data_Work} />
      <LoopedWork wData={Data_Work} />
    </div>
  );
};
