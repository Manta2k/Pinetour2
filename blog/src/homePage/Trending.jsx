import { useContext } from "react";
import { AllDataContext } from "@/context/firstContext";
import Link from "next/link";
export const Trending = () => {
  const { trendingArticles } = useContext(AllDataContext);
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <div className="flex flex-col w-[70%] container">
        <div className="font-semibold text-[25px]">Trending</div>
        <div className="flex h-[450px] w-[100%] gap-[30px]">
          {trendingArticles.map((el, i) => (
            <LoopTrend key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const LoopTrend = ({ cover_image, description, tags, id }) => {
  return (
    <div
      className=" flex w-[25%] h-[80%] rounded-2xl  mt-[30px] p-[20px]"
      style={{ backgroundImage: `url(${cover_image})` }}
    >
      <div className="flex flex-col items-start justify-end rounded-2xl mt-[80px]">
        <div className="flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white px-[10px]">
          {tags}
        </div>
        <Link href={{ pathname: "/SinglePost", query: { id } }}>
          <div className="text-white font-semibold mt-[20px] cursor-pointer hover:text-indigo-500 backdrop-blur-md rounded-xl">
            {description}
          </div>
        </Link>
      </div>
    </div>
  );
};
