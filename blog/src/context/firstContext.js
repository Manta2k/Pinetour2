import { createContext } from "react";
import { useEffect, useState } from "react";
export const AllDataContext = createContext([]);
export const AllData = ({ children }) => {
  const [topArticles, setTopArticles] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [blogArticles, setBlogArticles] = useState([]);
  const [perPage, setPerPage] = useState(9);
  const [filteredArray, setFilteredArray] = useState(blogArticles);

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
    setFilteredArray(filteredArticles);
  };
  return (
    <AllDataContext.Provider
      value={{
        topArticles,
        trendingArticles,
        blogArticles,
        handleLoadMore,
        filteredArray,
        handleSearch,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};
