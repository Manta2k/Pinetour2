import { DivImage, Paragraph, Goystyle } from "@/exammock/test";
import { MainContainer } from "@/exammock/exammock";
import { mockData } from "../Mockdatas.jsx/mocksdata";
import { styles } from "@/exammock/comp1";
import { Onoff } from "@/exammock/off-on";
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
        <MainContainer data={mockData} />
      </div>
      <div>
        <div onClick={() => Onoff} style={styles.onoff}>
          <Onoff></Onoff>
        </div>
      </div>
    </div>
  );
}
