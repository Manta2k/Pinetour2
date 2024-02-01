export const BlogSection = ({ content }) => {
  return content.map((el) => {
    return (
      <div className=" flex flex-col w-[32%] border-solid border-[2px] border-gray-300 rounded-2xl p-[10px]">
        <img
          src={el.cover_image}
          className="w-[100%] h-[55%] rounded-2xl"
          alt=""
        />
        <div className="flex flex-col w-[100%] h-[40%] mt-[5%] p-[10px] gap-y-[20px]">
          <div className="h-[30px] rounded-lg bg-slate-200 text-indigo-600 p-[5px]">
            {el.tags}
          </div>
          <div className="text-[25px] font-semibold">{el.title}</div>
          <div className="text-slate-300">{el.readable_publish_date}</div>
        </div>
      </div>
    );
  });
};
