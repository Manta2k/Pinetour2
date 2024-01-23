import { Minititle } from "./Minititle";
import { LoopPara } from "./LoopPara";
import { MockParagraph } from "@/datas/ParagraphData";
export const Aboutme = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center h-full w-[100%] bg-slate-50 container p-[100px]"
      >
        <div>
          <Minititle />
        </div>
        <div className="flex w-[100%] mt-[40px]">
          <div className="w-[50%] ml-[50px]">
            <img src="fullpic.png" alt="" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-[30px] font-bold">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col flex-wrap">
              <LoopPara data={MockParagraph} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
