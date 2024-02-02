import { Logo } from "@/DataBlog/DataOficon";
import Link from "next/link";
export const Header = ({ search }) => {
  return (
    <div className="flex flex-row justify-center items-center h-[80px] w-full">
      <div className="flex justify-between container">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-x-[45px] *:cursor-pointer">
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/Blog">
            <div>Blog</div>
          </Link>
          <Link href="/Contact">
            <div>Contact</div>
          </Link>
        </div>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-[190px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onChange={search}
        />
      </div>
    </div>
  );
};
