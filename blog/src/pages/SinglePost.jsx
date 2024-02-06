import { Header } from "@/homePage/Header";
import { Footer } from "@/homePage/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await responsive.json();
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-[70%] container">
          <Header />
          {article && (
            <div className="flex flex-col gap-[30px]">
              <div className="font-bold text-[40px] mt-[50px]">
                {article.title}
              </div>
              <div>{article.profile_image_90}</div>
              <img src={article.cover_image} alt="" />
              <div>{article.url}</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
