import { Minititle } from "./Minititle";
import { LoopPara } from "./LoopPara";
import { MockParagraph } from "@/datas/ParagraphData";
export const Aboutme = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-slate-50  dark:bg-slate-900">
        <div
          id="about"
          className={`flex flex-col items-center h-full w-[100%] bg-slate-50 mt-[50px] container p-[100px] dark:bg-slate-900 dark:text-white dark:p-0`}
        >
          <div className="max-md:mt-[50px]">
            <Minititle />
          </div>
          <div className="flex justify-between w-[100%] mt-[40px] max-md:flex max-md:flex-col max-md:items-center max-md:mb-[80px]">
            <div className=" ml-[50px] max-md:mb-[50px] ">
              <img
                src="man.gif"
                alt=""
                className="shadow-lg dark:shadow-indigo-500 rounded-lg"
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <h1 className="text-[30px] font-bold">
                Curious about me? Here you have it:
              </h1>
              <div className="flex flex-col mb-[50px]">
                <LoopPara data={MockParagraph} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
