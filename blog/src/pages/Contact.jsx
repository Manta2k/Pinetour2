import { Header } from "@/homePage/Header";
import { Footer } from "@/homePage/Footer";
export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-[70%] container">
          <Header />
        </div>
        <div className="w-[40%] container">
          <div className="flex flex-col gap-[40px]">
            <div className="font-bold text-[37px]">Contact Us</div>
            <div className="text-[17px] text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nemo
              illo suscipit a deleniti alias consectetur, quibusdam eligendi id
              voluptates ullam dolor, quam tenetur veniam perferendis
              consequuntur incidunt magni odit! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Distinctio at doloribus minima,
              eaque nemo ad magni quaerat repellendus cupiditate velit animi
              iste esse necessitatibus accusamus officia quis numquam,
              aspernatur sint.
            </div>
            <div className="flex justify-between">
              <div className=" border-[1px] border-solid border-gray-300 p-[20px] rounded-xl">
                <div className=" font-semibold text-[25px]">Adress</div>
                <div className=" text-gray-400 text-[20px] mt-[20px]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </div>
              </div>
              <div className=" border-[1px] border-solid border-gray-300 p-[20px] rounded-xl">
                <div className=" font-semibold text-[25px]">Contact</div>
                <div className=" text-gray-400 text-[20px] mt-[20px]">
                  313-332-8662 info@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] bg-gray-200 rounded-lg p-[40px] mt-[100px]">
            <div className="text-[20px] font-semibold">Leave a Message</div>
            <div className="flex gap-[5%]">
              <input
                type="text"
                placeholder="Your name"
                className=" flex flex-wrap border-[1px] border-solid border-gray-300 rounded-md w-[40%] p-[5px]"
              />
              <input
                type="text"
                placeholder="Your Email"
                className=" flex flex-wrap border-[1px] border-solid border-gray-300 rounded-md w-[40%] p-[5px]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className=" flex flex-wrap border-[1px] border-solid border-gray-300 rounded-md w-[85%] p-[5px]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Write a Message"
                className=" flex flex-wrap border-[1px] border-solid border-gray-300 rounded-md w-[85%] p-[5px] h-[150px]"
              />
            </div>
            <div className=" flex justify-center items-center h-[35px] bg-indigo-700 rounded-lg text-white p-[8px] w-[20%] mt-[15px]">
              Send Message
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
