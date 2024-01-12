import { DivImage, Paragraph, Goystyle } from "@/exammock/test";
import { Maincontainer } from "@/exammock/exammock";
import { Name } from "@/exammock/ExampleOn";
import { Age } from "@/exammock/comp2";
import arr from "@/Mockdatas.jsx/Anydata";
import { Job } from "@/exammock/comp1";
const styles = {
  flex: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
};
export default function Home() {
  return (
    <div style={Goystyle.all}>
      <div style={Goystyle.zurag}>
        <DivImage />
        <DivImage />
        <DivImage />
      </div>
      <div style={Goystyle.pps}>
        <Paragraph />
        <Paragraph />
      </div>
      <div style={styles.flex}>
        <Maincontainer />
      </div>
      <div>
        {arr.map((props) => (
          <Name name={props.name} gender={props.gender}></Name>
        ))}
        {arr.map((el) => (
          <Age age={el.age}></Age>
        ))}
        {arr.map((kkk) => (
          <Job job={kkk.job} place={kkk.place}></Job>
        ))}
      </div>
    </div>
  );
}
