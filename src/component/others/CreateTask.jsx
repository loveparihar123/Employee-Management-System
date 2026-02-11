import React, { useContext } from "react";
import { useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import { calculateTaskCount } from "../../utils/taskUtils";
import { TASK_STATUS } from "../../../../constants/taskStatus";

const CreateTask = () => {
  const [userData, setUserData] = useContext(authContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTask, setAssignTask] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      date,
      assignTask,
      category,
      description,
      status: TASK_STATUS.NEW,
      history: [
        {
          action: TASK_STATUS.NEW,
          at: new Date().toISOString(),
          by: "admin",
        },
      ],
    };

    setTitle("");
    setDate("");
    setAssignTask("");
    setCategory("");
    setDescription("");

    const data = userData;
    console.log(data);
    const updateData = data.map((emp) => {
      if (emp.name === assignTask) {
        const updateTask = [...emp.tasks, newTask];
        return {
          ...emp,
          tasks: updateTask,
          taskCount: calculateTaskCount(updateTask),
        };
      }
      return { ...emp };
    });
    console.log(updateData);
    setUserData(updateData);

    localStorage.setItem("Employees", JSON.stringify(updateData));
  };
  return (
    <div className="bg-[#1C1C1C] w-full text-white rounded-md">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
        className="flex flex-col lg:flex-row gap-8 mt-7 p-4 md:p-7"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="font-medium">Task Title</h3>
            <input
              className="bg-transparent border border-gray-300 py-1.5 mt-2 w-full font-medium rounded-md"
              type="text"
              placeholder="make a UI design"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="font-medium">Date</h3>
            <input
              className="bg-transparent border border-gray-300 py-1.5 mt-2 w-full font-medium rounded-md"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="font-medium">Assign to</h3>
            <input
              type="text"
              className="bg-transparent border border-gray-300 py-1.5 mt-2 w-full font-medium rounded-md"
              placeholder="employee name"
              value={assignTask}
              onChange={(e) => {
                setAssignTask(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="font-medium">Category</h3>
            <input
              className="mt-2 border border-gray-300 py-1.5 bg-transparent w-full font-medium rounded-md"
              placeholder="design,dev,etc"
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <h3 className="">Description</h3>
            <textarea
              className="w-full min-h-30 lg:min-h-62 bg-transparent border border-gray-300 mt-2 font-medium rounded-md resize-none"
              name=""
              id=""
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <button
              type="submit"
              className="bg-green-400 w-full py-3 px-3 rounded-md font-semibold mt-4 cursor-pointer "
              disabled={
                !title || !date || !assignTask || !category || !description
              }
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
