import { useState, useEffect } from "react";
import { Header } from "@/homePage/Header";
import { BlogSection } from "@/component/BlogSection";
import { Footer } from "@/homePage/Footer";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?page=3&per_page=9`
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70%] container">
          <Header />
          <div className="text-[30px] font-bold mt-[100px]">All Blog Post</div>
          <div className=" flex justify-center w-full mt-[100px] ">
            <div className=" flex flex-wrap gap-[2%] container">
              <BlogSection content={articles} />
            </div>
          </div>
          <div className="flex justify-center mt-[150px]">
            <div className=" flex justify-center items-center border-solid border-[2px] border-gray-300 rounded-md w-[100px] h-[30px]">
              Load More
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
