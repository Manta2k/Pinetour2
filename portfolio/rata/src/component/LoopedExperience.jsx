export const LoopedExperience = ({ Edata }) => {
  return Edata.map((el, i) => <ExperienceDiv key={i} {...el} />);
};
export const ExperienceDiv = ({ Logo, Header, List, Date }) => {
  return (
    <div className="flex bg-white w-[1200px] justify-between mt-[80px] rounded-lg p-[30px] shadow-lg">
      <div>{Logo}</div>
      <div>
        <h3 className="text-[20px] text-slate-500 ">{Header}</h3>
        <li className="flex flex-wrap w-[700px]">{List}</li>
      </div>
      <div>{Date}</div>
    </div>
  );
};
