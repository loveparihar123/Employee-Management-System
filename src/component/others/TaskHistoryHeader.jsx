import React from "react";

const TaskHistoryHeader = (props) => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello <br />{" "}
          <span className="text-3xl font-semibold">{props.data.name}👋</span>
        </h1>
        <button
          className="bg-red-500 px-4 py-2 rounded cursor-pointer text-lg font-medium"
          onClick={props.onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TaskHistoryHeader;
