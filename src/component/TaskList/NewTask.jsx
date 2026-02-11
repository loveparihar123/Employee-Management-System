import React from "react";

const Newdata = ({ data, onAccept }) => {
  return (
    <div>
      <div className="rounded-lg shrink-0 h-full w-80 bg-red-400 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-semibold  mt-5">{data.title}</h2>
        <p className="mt-5 text-sm">{data.description}</p>
        <div className="mt-4">
          <button
            className="bg-yellow-500 py-1 px-2 w-full text-sm rounded-sm cursor-pointer text-black"
            onClick={() => {
              onAccept(data.id);
            }}
          >
            Accept data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newdata;
