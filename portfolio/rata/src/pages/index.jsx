import { Intro } from "@/component/Intro";
import { Aboutme } from "@/component/Aboutme";
import { Skills } from "@/component/Skill";
export default function Home() {
  return (
    <div className="w-[100%]">
      <Intro />
      <Aboutme />
      <Skills />
    </div>
  );
}
