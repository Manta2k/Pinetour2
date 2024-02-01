export const Allblog = ({ content, handleLoadMore }) => {
  return (
    <>
      <AllblogHeader />
      <div className=" flex justify-center w-full mt-[100px] ">
        <div className=" flex flex-wrap gap-[2%] w-[70%] container">
          {content.map((el) => (
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
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[20%]">
        <div
          onClick={handleLoadMore}
          className=" flex justify-center items-center border-solid border-[2px] border-gray-300 rounded-md w-[100px] h-[30px] cursor-pointer"
        >
          Load More
        </div>
      </div>
    </>
  );
};
export const AllblogHeader = () => {
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <div className="w-[70%] container">
        <div className="text-[30px] font-bold">All Blog Post</div>
        <div className="flex justify-between mt-[50px]">
          <div className="flex *:mr-[40px] *:text-gray-500 *:font-bold *:cursor-pointer">
            <div className=" hover:text-amber-600">All</div>
            <div className=" hover:text-amber-600">Design</div>
            <div className=" hover:text-amber-600">Travel</div>
            <div className=" hover:text-amber-600">Fashion</div>
            <div className=" hover:text-amber-600">Technology</div>
            <div className=" hover:text-amber-600">Branding</div>
          </div>
          <div className="text-gray-500 font-bold  hover:text-amber-600 cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};
