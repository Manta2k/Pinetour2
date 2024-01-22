export const Intro = () => {
  return (
    <>
      <div className="container mb-[70px]">
        <div className="flex justify-center group *:mr-[30px] *:text-[20px] mt-[20px] text-gray-600 h-[40px]">
          <div className="">About</div>
          <div className="">Work</div>
          <div className="">Testimonials</div>
          <div className="">Contact</div>
          <img src="darkmode.png" alt="" className="h-[25px]" />

          <div className="flex justify-center items-center bg-black text-white w-[150px] rounded-lg">
            Download CV
          </div>
        </div>
        <div className="flex justify-around mt-[100px]">
          <div className="pt-[60px] pl-[100px]">
            <div>
              <h1 className="text-[55px] font-bold ">
                {" "}
                HI &#128513; Bayar-Erdene
              </h1>
              <p className="w-[1000px] leading-7 text-gray-700 mt-[35px]">
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
                <div className="flex h-[30px] items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500 mr-[10px] ml-[6px]"></div>
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
          <img src="profile.png" alt="" className="w-[500px]" />
        </div>
      </div>
    </>
  );
};
