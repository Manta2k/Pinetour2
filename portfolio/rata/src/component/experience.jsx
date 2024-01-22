import { DataExprience } from "@/datas/DataofExperience";
import { LoopedExperience } from "./LoopedExperience";
import { Minititle } from "@/component/Minititle";
export const Experience = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center bg-slate-50">
        <div>
          <Minititle />
        </div>
        <h1 className="text-gray-600 text-[25px] mt-[130px]">
          Here is a quick summary of my most recent experiences:
        </h1>
        <LoopedExperience Edata={DataExprience} />
      </div>
    </div>
  );
};
