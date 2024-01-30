import { Logo } from "@/DataBlog/DataOficon";
export const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[80px] w-full">
      <div className="flex justify-between container">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center items-center gap-x-[45px] *:cursor-pointer">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-[190px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
    </div>
  );
};
