import { LeftSlide, RightSlide } from "@/DataBlog/DataOficon";
export const BigContainer = ({ bigData }) => {
  return (
    <div className="flex flex-col items-center w-full h-[700px] mt-[50px] gap-y-[15px]">
      {bigData.map((el, i) => (
        <LoopImgBig key={i} {...el} />
      ))}
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
  cover_image,
  tags,
  title,
  readable_publish_date,
}) => {
  return (
    <>
      <div className="w-[60%] h-[100%] rounded-2xl relative container">
        <img
          src={cover_image}
          className="w-[100%] h-[100%] rounded-2xl"
          alt=""
        />
        <div className="flex flex-col items-start h-[250px] w-[47%] bg-white rounded-2xl ml-[10px] mb-[10px] absolute bottom-[15px] left-[15px] p-[25px]">
          <div className="flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white px-[10px]">
            {tags}
          </div>
          <div className="text-[30px] font-semibold">{title}</div>
          <div className=" text-slate-300">{readable_publish_date}</div>
        </div>
      </div>
    </>
  );
};
