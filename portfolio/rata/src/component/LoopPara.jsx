import { Paragraph } from "./Paragraph";
export const LoopPara = ({ data }) => {
  return data.map((el, i) => <Paragraph key={i} {...el} />);
};
