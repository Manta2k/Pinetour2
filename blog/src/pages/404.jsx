import { Header } from "@/homePage/Header";
import { Footer } from "@/homePage/Footer";
import Link from "next/link";
export default function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-[70%] container">
          <Header />
        </div>
        <div className="flex gap-[150px] mt-[200px]">
          <div className=" font-bold text-[120px]">404</div>
          <div className="flex flex-col gap-[20px]">
            <div className=" font-semibold text-[30px]">Page Not Found</div>
            <div className=" text-gray-500">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </div>
            <Link href="/">
              <div className=" bg-indigo-600 text-white p-[10px] rounded-lg cursor-pointer">
                Back to home
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
