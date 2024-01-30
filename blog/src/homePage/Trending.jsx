export const Trending = ({ trend }) => {
  return (
    <div className="flex justify-center w-full mt-[100px]">
      <div className="flex flex-col w-[60%] h-[450px] container">
        <div className="font-semibold text-[25px]">Trending</div>
        {trend.map((el, i) => (
          <LoopTrend key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
export const LoopTrend = ({ social_image }) => {
  return (
    <div className=" w-[23%] h-[80%] rounded-2xl  mt-[50px] mr-[15px] overscroll-x-contain">
      <img
        src={social_image}
        className="h-[100%] w-[100%] rounded-2xl"
        alt=""
      />
    </div>
  );
};
