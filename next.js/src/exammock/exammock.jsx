import { InnerContainer } from "@/exammock/comp1";
export const MainContainer = ({ data }) => {
  return data.map((el, i) => <InnerContainer key={i} {...el} />);
};
