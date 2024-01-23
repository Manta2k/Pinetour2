import { DataExprience } from "@/datas/DataofExperience";
import { LoopedExperience } from "./LoopedExperience";
import { Minititle } from "@/component/Minititle";
export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center bg-slate-50 container"
    >
      <div className="mt-[80px]">
        <Minititle />
      </div>
      <h1 className="text-gray-600 text-[25px] mt-[100px]">
        Here is a quick summary of my most recent experiences:
      </h1>
      <div className="mb-[70px]">
        <LoopedExperience Edata={DataExprience} />
      </div>
    </div>
  );
};
