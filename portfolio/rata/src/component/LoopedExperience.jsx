export const LoopedExperience = ({ Edata }) => {
  return Edata.map((el, i) => <ExperienceDiv key={i} {...el} />);
};
export const ExperienceDiv = ({ Logo, Header, List, Date }) => {
  return (
    <div className="flex bg-white">
      <div>{Logo}</div>
      <div>
        <h3>{Header}</h3>
        <li>{List}</li>
      </div>
      <div>{Date}</div>
    </div>
  );
};
