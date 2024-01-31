import { useEffect, useState } from "react";
import { Header } from "@/homePage/Header";
import { BigContainer } from "@/homePage/BigContainer";
import { Trending } from "@/homePage/Trending";
import { AllblogHeader } from "@/homePage/AllblogHeader";
import { Footer } from "@/homePage/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=1`
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
      <Header />
      <BigContainer bigData={articles} />
      <Trending trend={articles} />
      <AllblogHeader content={articles} />
      <Footer />
    </div>
  );
}
