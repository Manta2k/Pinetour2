import { Header } from "@/homePage/Header";
import { Footer } from "@/homePage/Footer";

export default function SinglePost() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-[70%] container">
          <Header />
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
