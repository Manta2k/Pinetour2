export const LoopedWork = ({ wData }) => {
  console.log(wData);
  return wData.map((el, i) => <WorkDiv key={i} {...el} />);
};
export const WorkDiv = ({ img, header, p, icon, box }) => {
  console.log(box);
  return (
    <>
      <div className="flex rounded-lg shadow-lg w-[80%] h-[45%] mt-[50px] max-md:flex max-md:flex-col">
        <div className="flex justify-center items-center bg-slate-100 w-[50%] p-[5%] dark:bg-slate-700 max-md:w-full">
          {img}
        </div>
        <div className="flex flex-col items-start p-[30px] w-[50%] max-md:w-full dark:bg-slate-800">
          <h1 className="font-bold text-[25px]">{header}</h1>
          <p className="flex flex-wrap text-[20px] text-slate-700 dark:text-slate-400">
            {p}
          </p>
          <div className="flex flex-wrap gap-x-[10px] gap-y-[10px] mt-[20px]">
            {box.map((el, index) => (
              <div
                key={index}
                className=" bg-gray-200 text-slate-800 rounded-full px-[25px] py-[3px]"
              >
                {el}
              </div>
            ))}
          </div>
          <div className="mt-[20px]">{icon}</div>
        </div>
      </div>
    </>
  );
};
