import { Header } from "@/homePage/Header";
import { BigContainer } from "@/homePage/BigContainer";
import { Trending } from "@/homePage/Trending";
import { Allblog } from "@/homePage/Allblog";
import { Footer } from "@/homePage/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BigContainer />
      <Trending />
      <Allblog />
      <Footer />
    </div>
  );
}
