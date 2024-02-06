import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Logo,
} from "@/DataBlog/DataOficon";
export const Footer = () => {
  return (
    <div className="flex justify-center w-full bg-gray-100 mt-[150px]">
      <div className="w-[70%] container">
        <div className="flex justify-between w-[100%] mt-[100px]">
          <div className="flex flex-col w-[30%] gap-[30px]">
            <div className="font-semibold text-[25px]">
              About {`MADE BY BAYAR-ERDENE`}
            </div>
            <div className=" text-gray-500 text-[20px] leading-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="text-gray-700 text-[20px]">
              Email : info@jstemplate.net
            </div>
            <div className="text-gray-700 text-[20px]">
              Phone : 880 123 456 789
            </div>
          </div>
          <div className="w-[30%] text-center *:text-[20px] *:text-gray-800">
            <div>Home</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex w-[30%] gap-[70px]">
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
        </div>
        <div className=" border-solid border-[2px] border-gray-200 mt-[50px]"></div>
        <div className="flex justify-between mt-[50px] mb-[80px]">
          <div>
            <Logo />
          </div>
          <div className="flex gap-[20px]">
            <div>Terms of Use</div>
            <div className="border-solid border-[1px] border-gray-200"></div>
            <div>Privacy Policy</div>
            <div className="border-solid border-[1px] border-gray-200"></div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
