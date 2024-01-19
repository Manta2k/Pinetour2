import { Icons } from "@/datas/IconsData";
import { LoopedIcon } from "./LoopedIcon";
export const Skills = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[700px]">
        <div></div>
        <h1 className=" text-gray-600 text-[25px] mt-[130px]">
          The skills, tools and technologies I am really good at:
        </h1>
        <div className="grid-cols-8 grid-rows-2 grid">
          <LoopedIcon iconData={Icons} />
        </div>
      </div>
    </>
  );
};
