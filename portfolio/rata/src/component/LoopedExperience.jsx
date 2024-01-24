export const LoopedExperience = ({ Edata }) => {
  return Edata.map((el, i) => <ExperienceDiv key={i} {...el} />);
};
export const ExperienceDiv = ({ Logo, Header, List, Date }) => {
  return (
    <div className="flex bg-white w-[80%] justify-between mt-[80px] rounded-lg p-[30px] shadow-lg">
      <div className="flex justify-center w-[20%]">{Logo}</div>
      <div className="w-[60%]">
        <h3 className="text-[20px] text-slate-500 text-center">{Header}</h3>
        <li className="flex flex-wrap">{List}</li>
      </div>
      <div className="w-[20%] text-center">{Date}</div>
    </div>
  );
};
