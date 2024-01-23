import { Icons } from "@/datas/IconsData";
import { LoopedIcon } from "./LoopedIcon";
import { Minititle } from "./Minititle";
export const Skills = () => {
  return (
    <>
      <div
        id="skill"
        className="flex flex-col items-center h-[700px] container"
      >
        <div className="mt-[80px]">
          <Minititle />
        </div>
        <h1 className=" text-gray-600 text-[25px] mt-[80px]">
          The skills, tools and technologies I am really good at:
        </h1>
        <div className="grid-cols-8 grid-rows-2 grid gap-y-[40px] gap-x-[40px] mt-[60px]">
          <LoopedIcon iconData={Icons} />
        </div>
      </div>
    </>
  );
};
