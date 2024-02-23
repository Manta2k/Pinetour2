import { useEffect, useState } from "react";
export default function Home() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [data, setData] = useState([]);
  const createData = async () => {
    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const addData = async () => {
    await createData();
  };
  const boxDelete = async (index) => {
    try {
      const response = await fetch(`http://localhost:3001/${index}`, {
        method: "DELETE",
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const boxEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[20px] items-center mt-[50px] ">
        <div className="">
          NAME:
          <input
            type="text"
            placeholder="Name"
            className=" border-solid border-[1px] border-black"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          AGE:
          <input
            type="text"
            placeholder="age"
            className="border-solid border-[1px] border-black"
            onChange={(event) => setAge(event.target.value)}
          ></input>
        </div>
        <button
          className="w-[100px] h-[50px] bg-blue-700 rounded-lg text-white"
          onClick={addData}
        >
          submit
        </button>
      </div>
      <div className="flex justify-center mt-[100px] flex-wrap">
        {data?.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-[1px] border-solid border-black w-[200px] m-2 rounded-md"
          >
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div className="flex gap-[10px] cursor-pointer">
              <div className="" onClick={() => boxDelete(index)}>
                delete
              </div>
              <div className="" onClick={() => boxEdit(index)}>
                edit
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
