export const SkillsIcon = ({ Name, Logo }) => {
  console.log(Name);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">{Logo}</div>
        <div className="flex justify-center">{Name}</div>
      </div>
    </>
  );
};
