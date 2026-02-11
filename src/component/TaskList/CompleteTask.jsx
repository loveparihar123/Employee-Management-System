import React from "react";

const Completedata = ({ data }) => {
  return (
    <div>
      <div className="rounded-lg shrink-0 h-full w-75 bg-blue-400 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>

        <h2 className="text-2xl font-semibold  mt-5">{data.title}</h2>
        <p className="mt-5 text-sm">{data.description}</p>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Completedata;
