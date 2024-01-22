import { Minititle } from "./Minititle";
import { LoopedWork } from "./LoopedWork";
import { Data_Work } from "@/datas/DataOfWork";
export const Work = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center bg-white">
        <Minititle />
        <h3 className="text-gray-600 text-[25px] mt-[100px]">
          Some of the noteworthy projects I have built:
        </h3>
        <LoopedWork wData={Data_Work} />
        <LoopedWork wData={Data_Work} />
        <LoopedWork wData={Data_Work} />
      </div>
    </div>
  );
};
