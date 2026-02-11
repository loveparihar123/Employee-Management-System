import React from "react";

const Faileddata = ({ data }) => {
  return (
    <div>
      <div
        className="rounded-lg shrink-0 h-full w-75 bg-neutral-700
 p-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-semibold  mt-5">{data.title}</h2>
        <p className="mt-5 text-sm">{data.description}</p>
        <div className="mt-4">
          <button className="bg-red-500 py-1 px-2 w-full cursor-pointer text-sm rounded-sm">
            failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faileddata;
