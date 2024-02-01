import { LeftSlide, RightSlide } from "@/DataBlog/DataOficon";
import { useState } from "react";
export const BigContainer = ({ bigData }) => {
  return (
    <div className="flex flex-col items-center w-full h-[700px] mt-[50px] gap-y-[15px]">
      <div className="flex justify-center w-[70%] h-[100%]">
        <div className="w-[100%] carousel">
          {bigData.map((el, i) => (
            <LoopImgBig key={i} {...el} />
          ))}
        </div>
      </div>
      <div className="flex gap-x-[30px]">
        <div className="flex justify-center items-center w-[50px] h-[50px] border-solid border-[1px] border-black rounded-lg hover:bg-slate-300">
          <LeftSlide />
        </div>
        <div className="flex justify-center items-center w-[50px] h-[50px] border-solid border-[1px] border-black rounded-lg hover:bg-slate-300">
          <RightSlide />
        </div>
      </div>
    </div>
  );
};
export const LoopImgBig = ({
  social_image,
  tags,
  title,
  readable_publish_date,
}) => {
  return (
    <>
      <div
        className="flex justify-start items-end w-[100%] h-[100%] rounded-2xl p-[20px] container carousel-item "
        style={{ backgroundImage: `url(${social_image})` }}
      >
        <div className="flex flex-col items-start h-[250px] w-[47%] bg-white rounded-2xl ml-[10px] mb-[10px]  p-[25px]">
          <div className="flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white px-[10px]">
            {tags}
          </div>
          <div className="text-[35px] font-semibold">{title}</div>
          <div className=" text-slate-300">{readable_publish_date}</div>
        </div>
      </div>
    </>
  );
};
