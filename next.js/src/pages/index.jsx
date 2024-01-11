import { DivImage, Paragraph, Goystyle } from "@/exammock/test";
import { Maincontainer } from "@/exammock/exammock";
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
    </div>
  );
}
