import React, { useContext } from "react";
import "../../entire.css";
import { authContext } from "../../Context/AuthProvider";
import { calculateTaskCount } from "../../utils/taskUtils";
import Headers from "./Headers";
const AllTask = ({ data, onHistory }) => {
  const handleClick = () => {
    <Headers />;
  };
  return (
    <div id="all-list" className="bg-[#1D1D1D] p-5 rounded-md">
      <div className="grid grid-cols-2 md:grid-cols-6 bg-red-400 py-5 px-4 rounded-md text-white font-semibold text-sm md:text-lg gap-2">
        <h2 className="text-left">Employee Name</h2>
        <h3 className="text-center">NewTask</h3>
        <h5 className="text-center">Active</h5>
        <h5 className="text-center">Completed</h5>
        <h5 className="text-center">Failed</h5>
      </div>
      <div className="overflow-auto">
        {data?.map((elem, idx) => {
          const counts = calculateTaskCount(elem.tasks);
          return (
            <div
              className="grid grid-cols-2 md:grid-cols-6 items-center border border-green-400 p-4 rounded-md mt-3 text-sm md:text-lg gap-2"
              key={idx}
            >
              <h2 className=" text-white text-left truncate">{elem.name}</h2>
              <h3 className="text-center text-yellow-400">{counts.newTask}</h3>
              <h5 className="text-center text-green-400">{counts.active}</h5>
              <h5 className="text-center text-blue-400">{counts.completed}</h5>
              <h5 className="text-center text-red-400">{counts.failed}</h5>
              <button
                className="py-2 px-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium rounded-sm cursor-pointer"
                onClick={() => {
                  onHistory(elem.id);
                }}
              >
                View Task
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
