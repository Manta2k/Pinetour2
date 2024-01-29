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
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);
  };

  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };
  return (
    <>
      <div id="top" className={`mb-[70px] `}>
        <div className="flex justify-center items-center group *:mr-[30px] *:text-[20px] text-gray-600 h-[70px] fixed backdrop-blur-lg top-0 w-[100%] container max-md:flex max-md:justify-between max-md:*:m-0">
          <div
            onClick={() => {
              const top = document.getElementById("top");
              top.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-bold cursor-pointer dark:text-white"
          >
            &lt;SS/&gt;
          </div>
          <div></div>
          <div
            className="cursor-pointer dark:text-white max-md:hidden"
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
            className="cursor-pointer dark:text-white max-md:hidden"
          >
            Work
          </div>
          <div
            onClick={() => {
              const skill = document.getElementById("skill");
              skill.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white max-md:hidden"
          >
            Skill
          </div>
          <div
            onClick={() => {
              const experience = document.getElementById("experience");
              experience.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white max-md:hidden"
          >
            Experience
          </div>
          <div
            onClick={() => {
              const contact = document.getElementById("contact");
              contact.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer dark:text-white max-md:hidden"
          >
            Contact
          </div>
          <img
            src={isDarkMode ? "darkmode-off.png" : "darkmode-on.png"}
            alt="Dark Mode"
            className="animate-spin h-[25px] cursor-pointer max-md:hidden"
            onClick={handleDarkModeToggle}
          />

          <div className="flex justify-center items-center bg-black text-white w-[150px] rounded-lg cursor-pointer dark:bg-slate-100 dark:text-black shadow-lg dark:shadow-indigo-500 max-md:hidden">
            Download CV
          </div>
          <div className=" invisible h-[100%] flex justify-between items-center relative max-md:visible">
            <div onClick={handleOpen} className="">
              {"Pinecone "}
            </div>
          </div>
          {showMenu && (
            <div>
              <div
                onClick={handleClose}
                className={` ${
                  showSideBar && "bg-black"
                }  bg-opacity-30 w-[100vw] h-[100vh] absolute left-0 top-0 transition-all duration-300  ease-in-out`}
              ></div>

              {/* Side barnii tsagaan contenttei heseg */}
              <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
                <div
                  className={`bg-white h-[100%] w-[100%] p-5 absolute top-0 right-0 ${
                    showSideBar ? "translate-x-0" : "translate-x-[100vw]"
                  } transition-all duration-300  ease-in-out`}
                >
                  <div className="flex justify-between">
                    <h2>Pinecone</h2>
                    <button
                      onClick={handleClose}
                      className="h-[40px] w-[40px] border-red-300 rounded-md border-[2px]"
                    >
                      X
                    </button>
                  </div>
                  <div>
                    <h4>Hello</h4>
                    <h4>Pinecone</h4>
                    <h4>Admin</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-around mt-[100px] h-[50%] container max-md:flex-col-reverse max-md:items-center">
          <div className="pt-[60px] w-[65%] pl-[120px] max-md:w-[80%] max-md:p-0">
            <div className="mb-[80px]">
              <h1 className="text-[55px] font-bold max-md:text-[30px]">
                HI &#128513; Bayar-Erdene
              </h1>
              <p className="flex flex-wrap leading-7 text-gray-700 mt-[35px] dark:text-slate-300">
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
                  <img
                    src="location.png"
                    alt=""
                    className="animate-bounce mr-[5px]"
                  />
                  Ulaanbaatar, Mongolia
                </div>
                <div className="flex h-[30px] items-center ml-[6px]">
                  <span class="relative flex h-3 w-3 mr-[9px]">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-100"></span>
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
          <div className="flex justify-center box-content w-[35%] max-md:w-[75%]">
            <img
              src="profile.gif"
              alt=""
              className=" mt-[60px] size-[75%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
