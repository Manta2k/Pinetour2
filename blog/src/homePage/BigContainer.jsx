import { LeftSlide, RightSlide } from "@/DataBlog/DataOficon";
import { useContext } from "react";
import { AllDataContext } from "@/context/firstContext";
import Link from "next/link";
export const BigContainer = () => {
  const { topArticles } = useContext(AllDataContext);
  return (
    <div className="flex flex-col items-center w-full h-[700px] mt-[50px] gap-y-[15px] mb-[150px]">
      <div className="flex justify-center w-[70%] h-[100%] container">
        <div className="w-[100%] carousel ">
          {topArticles.map((el, i) => (
            <LoopImgBig key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const LoopImgBig = ({
  cover_image,
  tag_list,
  title,
  readable_publish_date,
  id,
}) => {
  return (
    <>
      <div
        className="flex justify-start items-end w-[100%] h-[100%] rounded-2xl carousel-item bg-cover"
        style={{
          backgroundImage: `url(${cover_image})`,
        }}
      >
        <div className="flex flex-col items-start h-[30%] w-[47%] bg-white rounded-2xl ml-[25px] mb-[25px]  p-[25px]">
          <div className="flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white px-[10px]">
            {tag_list}
          </div>
          <Link href={{ pathname: "/SinglePost", query: { id } }}>
            <div className="text-[35px] font-semibold cursor-pointer hover:text-blue-600">
              {title}
            </div>
          </Link>
          <div className=" text-slate-300">{readable_publish_date}</div>
        </div>
      </div>
    </>
  );
};
