import { Minititle } from "./Minititle";
import { Paragraph } from "./Paragraph";
export const Aboutme = () => {
  return (
    <>
      <div className="h-screen bg-slate-50">
        <div className="flex flex-col items-center">
          <Minititle></Minititle>
        </div>
        <div className="flex justify-around">
          <div>
            <img src="fullpic.png" alt="" />
          </div>
          <div className="w-[700px]">
            <h1 className="text-[30px] font-bold">
              Curious about me? Here you have it:
            </h1>
            <p className="w-[1000px] leading-7 text-gray-700 mt-[35px]">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="w-[1000px] leading-7 text-gray-700 mt-[35px]">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="w-[1000px] leading-7 text-gray-700 mt-[35px]">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="w-[1000px] leading-7 text-gray-700 mt-[35px]">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="w-[1000px] leading-7 text-gray-700 mt-[55px]">
              Finally, some quick bits about me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
