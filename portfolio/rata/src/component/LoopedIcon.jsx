export const LoopedIcon = ({ iconData }) => {
  return iconData.map((el, i) => <SkillsIcon key={i} {...el} />);
};
export const SkillsIcon = ({ Name, Logo }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">{Logo}</div>
        <div className="flex justify-center">{Name}</div>
      </div>
    </>
  );
};
