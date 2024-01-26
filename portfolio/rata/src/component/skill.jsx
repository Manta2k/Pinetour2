import { Icons } from "@/datas/IconsData";
import { LoopedIcon } from "./LoopedIcon";
import { Minititle } from "./Minititle";
export const Skills = () => {
  return (
    <>
      <div
        id="skill"
        className="flex flex-col items-center container mb-[140px]"
      >
        <div className="mt-[80px]">
          <Minititle />
        </div>
        <h1 className=" text-gray-600 text-[25px] mt-[80px]">
          The skills, tools and technologies I am really good at:
        </h1>
        <div className="grid-cols-8 grid-rows-2 grid gap-y-[40px] gap-x-[40px] mt-[60px] max-md:flex max-md:flex-wrap">
          <LoopedIcon iconData={Icons} />
        </div>
      </div>
    </>
  );
};
