import { useState, useEffect } from "react";
import { Header } from "@/homePage/Header";
import { BlogSection } from "@/component/BlogSection";
import { Footer } from "@/homePage/Footer";
export default function Blog() {
  const [blogArticles, setBlogArticles] = useState([]);
  const [perPage, setPerPage] = useState(30);
  const [filteredArray, setFilteredArray] = useState(blogArticles);

  const fetchData = async () => {
    try {
      const blogResponse = await fetch(
        `https://dev.to/api/articles?page=3&per_page=${perPage}`
      );
      const blogData = await blogResponse.json();
      setBlogArticles(blogData);
      setFilteredArray(blogData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [perPage]);

  const handleLoadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 3);
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    const filteredArticles = blogArticles.filter((blogArticles) =>
      blogArticles.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    console.log(filteredArticles);
    setFilteredArray(filteredArticles);
  };
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[70%] container">
          <Header search={handleSearch} />
          <div className="text-[30px] font-bold mt-[100px]">All Blog Post</div>
          <div className=" flex flex-col items-center w-full mt-[100px] ">
            <div className=" flex flex-wrap gap-[2%] container">
              <BlogSection content={filteredArray} />
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
