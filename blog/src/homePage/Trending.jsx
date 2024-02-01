export const Trending = ({ trend }) => {
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <div className="flex flex-col w-[70%] container">
        <div className="font-semibold text-[25px]">Trending</div>
        <div className="flex h-[450px] w-[100%] gap-[30px]">
          {trend.map((el, i) => (
            <LoopTrend key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const LoopTrend = ({ cover_image, description, tags }) => {
  return (
    <div
      className=" flex w-[25%] h-[80%] rounded-2xl  mt-[30px] p-[20px]"
      style={{ backgroundImage: `url(${cover_image})` }}
    >
      <div className="flex flex-col items-start justify-end rounded-2xl mt-[80px]">
        <div className="flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white px-[10px]">
          {tags}
        </div>
        <div className="text-white font-semibold mt-[20px]">{description}</div>
      </div>
    </div>
  );
};
