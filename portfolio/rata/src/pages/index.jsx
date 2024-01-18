import { Intro } from "@/component/Intro";
import { Aboutme } from "@/component/Aboutme";
export default function Home() {
  return (
    <div className="w-[100%]">
      <Intro />
      <Aboutme />
    </div>
  );
}
