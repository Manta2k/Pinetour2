import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedid, setEditedid] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addData = async () => {
    if (name === "" || age === "") {
      alert("Ner esvel nas hooson bn boglono uu");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, id: uuidv4() }),
      });
      const newData = await response.json();
      setData(newData);
      setName("");
      setAge("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const boxDelete = async (el) => {
    console.log("id:", el.id);
    try {
      const response = await fetch(`http://localhost:3001/${el.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (el) => {
    console.log("open id: ", el.id);
    setName(el.name);
    setAge(el.age);
    setEditedid(el.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setAge("");
    setEditedid(null);
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:3001/${editedid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, id: uuidv4() }),
      });
      const newData = await response.json();
      console.log("new data: ", newData);
      setData(newData);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <form className="p-6 w-96 mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Age"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-black-400 flex items-center justify-center"
            onClick={addData}
          >
            <i className="icon ion-md-lock mr-2"></i>
            SUBMIT
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-8 flex-wrap">
        <div className="flex flex-col bg-blue-500 text-white w-[30%] p-8 gap-[15px] rounded-2xl">
          <div className="flex *:text-center *:text-gray-400">
            <div className="w-[39%]">NAME</div>
            <div className="w-[39%]">AGE</div>
            <div className="flex justify-between w-[22%]">
              <div>DELETE</div>
              <div>EDIT</div>
            </div>
          </div>
          {data.map((el, id) => (
            <div
              key={id}
              className="flex justify-center *:hover:bg-slate-300 h-[50px]"
            >
              <div className=" w-[40%] text-center">
                <div>{el.name}</div>
              </div>
              <div className=" w-[40%] text-center">
                <div>{el.age}</div>
              </div>
              <div className="flex justify-between cursor-pointer w-[20%]">
                <div onClick={() => boxDelete(el)}>
                  <MdDelete className="fill-red-500 h-[25px] w-[25px]" />
                </div>
                <div onClick={() => openModal(el)}>
                  <CiEdit className="h-[25px] w-[25px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Age"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-400 mr-4"
                onClick={saveChanges}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-gray-300"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
