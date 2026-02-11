import React from "react";

const AcceptTask = ({ data, onComplete, onFailed }) => {
  return (
    <div>
      <div className="rounded-lg shrink-0 h-full w-75 bg-green-400 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-semibold  mt-5">{data.title}</h2>
        <p className="mt-5 text-sm">{data.description}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="py-1 px-2 bg-green-600 rounded-sm text-sm cursor-pointer"
            onClick={() => {
              onComplete(data.id);
            }}
          >
            mark as completed
          </button>
          <button
            className="py-1 px-2 bg-red-500 rounded-sm text-sm cursor-pointer"
            onClick={() => {
              onFailed(data.id);
            }}
          >
            mark as failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
