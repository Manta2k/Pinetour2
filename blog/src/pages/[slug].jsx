import { Header } from "@/homePage/Header";
import { Footer } from "@/homePage/Footer";

export default function SinglePost({ article }) {
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
              <div className="w-[70%] text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit labore magni in molestiae explicabo! Esse veniam facere
                sed, ea nam, recusandae aliquid maiores, tempora autem velit
                accusamus laudantium voluptatibus quis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloribus, maiores tempore?
                Cumque, nostrum voluptatem aliquam quis in voluptatum fugiat
                eius laudantium similique incidunt repellat ipsum quae ducimus
                saepe a unde. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolore neque consequuntur magni accusamus saepe, non
                perferendis, enim reprehenderit ea quis nemo provident dolores.
                Tenetur est illo quaerat alias similique iusto?
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://dev.to/api/articles/gereltuyamz/${slug}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles?username=gereltuyamz`);
  const article = await res.json();
  const slugs = article.map((article) => article.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
