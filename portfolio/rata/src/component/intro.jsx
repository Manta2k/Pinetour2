import { useState, useEffect } from "react";
export const Intro = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDark);
    document.documentElement.classList.toggle("dark", savedDark);
  }, []);
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };
  return (
    <>
      <div id="top" className={`mb-[70px] `}>
        <div className="flex justify-center items-center group *:mr-[30px] *:text-[20px] text-gray-600 h-[70px] fixed backdrop-blur-lg top-0 w-[100%] container">
          <div
            onClick={() => {
              const top = document.getElementById("top");
              top.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-bold cursor-pointer dark:text-white"
          >
            &lt;SS/&gt;
          </div>
          <div
            className="cursor-pointer dark:text-white"
            onClick={() => {
              const about = document.getElementById("about");
              about.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </div>
          <div
            onClick={() => {
              const work = document.getElementById("work");
              work.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white"
          >
            Work
          </div>
          <div
            onClick={() => {
              const skill = document.getElementById("skill");
              skill.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white"
          >
            Skill
          </div>
          <div
            onClick={() => {
              const experience = document.getElementById("experience");
              experience.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white"
          >
            Experience
          </div>
          <div
            onClick={() => {
              const contact = document.getElementById("contact");
              contact.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white"
          >
            Contact
          </div>
          <img
            src={isDarkMode ? "darkmode-off.png" : "darkmode-on.png"}
            alt="Dark Mode"
            className="h-[25px] cursor-pointer"
            onClick={handleDarkModeToggle}
          />

          <div className="flex justify-center items-center bg-black text-white w-[150px] rounded-lg cursor-pointer dark:bg-slate-100 dark:text-black">
            Download CV
          </div>
        </div>
        <div className="flex justify-around mt-[100px] h-[50%] container">
          <div className="pt-[60px] w-[70%] pl-[120px]">
            <div className="mb-[80px]">
              <h1 className="text-[55px] font-bold ">
                HI &#128513; Bayar-Erdene
              </h1>
              <p className="flex flex-wrap leading-7 text-gray-700 mt-[35px]">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                odit fugiat doloribus porro minus nemo numquam earum adipisci
                repellendus iusto vel laborum natus, ab tenetur quod voluptates
                doloremque molestias aliquam?
              </p>
              <div className="">
                <div className="flex mt-[50px]">
                  <img src="location.png" alt="" className="mr-[5px]" />
                  Ulaanbaatar, Mongolia
                </div>
                <div className="flex h-[30px] items-center ml-[6px]">
                  <span class="relative flex h-3 w-3 mr-[9px]">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                  </span>
                  Available for new projects
                </div>
                <div className="flex gap-x-[10px] mt-[50px]">
                  <img src="github.png" alt="" />
                  <img src="twitter.png" alt="" />
                  <img src="figma.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <img src="profile.png" alt="" className="w-[25%] mt-[60px]" />
        </div>
      </div>
    </>
  );
};
