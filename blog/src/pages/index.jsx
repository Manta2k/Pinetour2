import { useEffect, useState } from "react";
import { Header } from "@/homePage/Header";
import { BigContainer } from "@/homePage/BigContainer";
import { Trending } from "@/homePage/Trending";
import { Allblog } from "@/homePage/Allblog";
import { Footer } from "@/homePage/Footer";

export default function Home() {
  const [topArticles, setTopArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [blogArticles, setBlogArticles] = useState([]);
  const [perPage, setPerPage] = useState(9);
  const fetchData = async () => {
    try {
      const topResponse = await fetch(
        `https://dev.to/api/articles?page=1&per_page=4`
      );
      const trendingResponse = await fetch(
        `https://dev.to/api/articles?page=5&per_page=4`
      );
      const blogResponse = await fetch(
        `https://dev.to/api/articles?page=3&per_page=${perPage}`
      );

      const topData = await topResponse.json();
      const trendingData = await trendingResponse.json();
      const blogData = await blogResponse.json();

      setTopArticles(topData);
      setTrendingArticles(trendingData);
      setBlogArticles((prevArticles) => [...prevArticles, ...blogData]);
      setPerPage(blogData);
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
  return (
    <div>
      <Header />
      <BigContainer bigData={topArticles} />
      <Trending trend={trendingArticles} />
      <Allblog content={blogArticles} handleLoadMore={handleLoadMore} />
      <Footer />
    </div>
  );
}
