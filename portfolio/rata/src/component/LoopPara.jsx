export const LoopPara = ({ data }) => {
  return data.map((el, i) => <Paragraph key={i} {...el} />);
};
export const Paragraph = ({ About_P1 }) => {
  return (
    <p className="leading-7 text-gray-700 mt-[35px] max-md:w-full dark:text-slate-300">
      {About_P1}
    </p>
  );
};
