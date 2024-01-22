import { Intro } from "@/component/Intro";
import { Aboutme } from "@/component/Aboutme";
import { Skills } from "@/component/Skill";
import { Experience } from "@/component/Experience";
import { Work } from "@/component/Work";
import { GetInTouch } from "@/component/GetinTouch";
import { Footer } from "@/component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <Intro />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </div>
  );
}
