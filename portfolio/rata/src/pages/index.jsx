import { Intro } from "@/component/Intro";
import { Aboutme } from "@/component/Aboutme";
import { Skills } from "@/component/Skill";
import { Experience } from "@/component/Experience";
export default function Home() {
  return (
    <div className="w-[100%]">
      <Intro />
      <Aboutme />
      <Skills />
      <Experience />
    </div>
  );
}
