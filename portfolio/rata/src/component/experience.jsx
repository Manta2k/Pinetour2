import { DataExprience } from "@/datas/DataofExperience";
import { LoopedExperience } from "./LoopedExperience";
import { Minititle } from "@/component/Minititle";
export const Experience = () => {
  return (
    <div className="flex justify-center w-full bg-slate-50 dark:bg-slate-900">
      <div
        id="experience"
        className="flex flex-col items-center bg-slate-50 container w-[100%] dark:bg-slate-900"
      >
        <div className="mt-[80px]">
          <Minititle />
        </div>
        <h1 className="text-gray-600 text-[25px] mt-[100px]">
          Here is a quick summary of my most recent experiences:
        </h1>
        <div className="flex flex-col items-center mb-[70px] dark:bg-slate-900">
          <LoopedExperience Edata={DataExprience} />
        </div>
      </div>
    </div>
  );
};
