import { SkillsIcon } from "./SkillsIcon";
export const LoopedIcon = ({ iconData }) => {
  return iconData.map((el, i) => <SkillsIcon key={i} {...el} />);
};
