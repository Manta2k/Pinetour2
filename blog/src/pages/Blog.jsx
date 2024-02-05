import { useContext } from "react";
import { AllDataContext } from "@/context/firstContext";
import { Header } from "@/homePage/Header";
import { BlogSection } from "@/component/BlogSection";
import { Footer } from "@/homePage/Footer";
export default function Blog() {
  const { handleLoadMore } = useContext(AllDataContext);
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70%] container">
          <Header />
          <div className="text-[30px] font-bold mt-[100px]">All Blog Post</div>
          <div className=" flex flex-col items-center w-full mt-[100px] ">
            <div className=" flex flex-wrap gap-[2%] container">
              <BlogSection />
            </div>
            <div className="flex justify-center mt-[150px]">
              <div
                onClick={handleLoadMore}
                className=" flex justify-center items-center border-solid border-[2px] border-gray-300 rounded-md w-[100px] h-[30px] cursor-pointer"
              >
                Load More
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
