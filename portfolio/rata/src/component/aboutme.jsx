import { Minititle } from "./Minititle";
import { LoopPara } from "./LoopPara";
import { MockParagraph } from "@/datas/ParagraphData";
export const Aboutme = () => {
  return (
    <>
      <div className="container">
        <div className="h-screen bg-slate-50">
          <div className="flex flex-col items-center">
            <Minititle></Minititle>
          </div>
          <div className="flex justify-around">
            <div>
              <img src="fullpic.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-[30px] font-bold">
                Curious about me? Here you have it:
              </h1>
              <div className="flex flex-col flex-wrap">
                <LoopPara data={MockParagraph} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
