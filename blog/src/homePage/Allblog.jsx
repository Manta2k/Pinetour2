import { useContext, useState } from "react";
import { AllDataContext } from "@/context/firstContext";
import Link from "next/link";
export const Allblog = () => {
  const { filteredArray, handleLoadMore } = useContext(AllDataContext);
  const [loading, setLoading] = useState(false);

  const handleLoadMoreClick = async () => {
    setLoading(true);
    await handleLoadMore();
    setLoading(false);
  };
  return (
    <>
      <AllblogHeader />
      <div className=" flex flex-col items-center w-full mt-[100px] ">
        <div className=" flex flex-wrap gap-[2%] w-[70%] container">
          {filteredArray.map((el) => (
            <div className=" flex flex-col w-[32%] border-solid border-[2px] border-gray-300 rounded-2xl p-[10px] mb-[2%]">
              <img
                src={el.cover_image}
                className="w-[100%] h-[55%] rounded-2xl"
                alt=""
              />
              <div className="flex flex-col w-[100%] h-[60%] mt-[5%] p-[10px] gap-y-[20px]">
                <div className="h-[30px] rounded-lg bg-slate-200 text-indigo-600 p-[5px]">
                  {el.tags}
                </div>
                <Link href={{ pathname: "/SinglePost", query: { id: el.id } }}>
                  <div className="text-[25px] font-semibold cursor-pointer hover:text-blue-600">
                    {el.title}
                  </div>
                </Link>
                <div className="text-slate-300">{el.readable_publish_date}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-between w-[100%]">
              <div className="skeleton w-96 h-96"></div>
              <div className="skeleton w-96 h-96"></div>
              <div className="skeleton w-96 h-96"></div>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-[200px]">
          <div
            onClick={handleLoadMoreClick}
            className=" flex border-solid border-[2px] border-black rounded-md w-[150px] h-[40px] cursor-pointer p-[30px] text-white bg-indigo-600 shadow-2xl btn btn-primary"
          >
            Load More
          </div>
        </div>
      </div>
    </>
  );
};
export const AllblogHeader = () => {
  const { handleSearchTag, selectedTag } = useContext(AllDataContext);
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <div className="w-[70%] container">
        <div className="text-[30px] font-bold">All Blog Post</div>
        <div className="flex justify-between mt-[50px]">
          <div className="flex *:mr-[40px] *:text-gray-500 *:font-bold *:cursor-pointer">
            <div
              className={`hover:text-amber-600 ${
                selectedTag === "all" ? "text-amber-600" : ""
              }`}
              onClick={() => handleSearchTag("all")}
            >
              All
            </div>
            <div
              className={`hover:text-amber-600 ${
                selectedTag === "javascript" ? "text-amber-600" : ""
              }`}
              onClick={() => handleSearchTag("javascript")}
            >
              JavaScript
            </div>
            <div
              className={`hover:text-amber-600 ${
                selectedTag === "typescript" ? "text-amber-600" : ""
              }`}
              onClick={() => handleSearchTag("typescript")}
            >
              TypeScript
            </div>
            <div
              className={`hover:text-amber-600 ${
                selectedTag === "programming" ? "text-amber-600" : ""
              }`}
              onClick={() => handleSearchTag("programming")}
            >
              Programming
            </div>
          </div>
          <div className="text-gray-500 font-bold  hover:text-amber-600 cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};
