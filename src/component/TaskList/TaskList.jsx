import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import "./ListNumber.css";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { TASK_STATUS } from "../../../../constants/taskStatus";
import { authContext } from "../../Context/AuthProvider";

const TaskList = ({ data, setUserData }) => {
  const handleAccept = async (taskId) => {
    const updateTasks = data?.tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: TASK_STATUS.ACTIVE,
            history: [
              ...(Array.isArray(task.history) ? task.history : []),
              {
                action: TASK_STATUS.ACTIVE,
                at: new Date().toISOString(),
                by: "employee",
              },
            ],
          }
        : task,
    );

    const updateEmployee = {
      ...data,
      tasks: updateTasks,
    };

    try {
      await fetch(`http://localhost:5000/employees${data.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          tasks: updateTasks,
        }),
      });

      setUserData((prev) =>
        prev.map((emp) => (emp.id === data.id ? updateEmployee : emp)),
      );
    } catch (err) {
      console.log("data error:", err);
    }
  };

  const handleCompleted = async (taskId) => {
    const updateTasks = data?.tasks?.map((task) =>
      taskId === task.id
        ? {
            ...task,
            status: TASK_STATUS.COMPLETED,
            history: [
              ...(Array.isArray(task.history) ? task.history : []),
              {
                action: TASK_STATUS.COMPLETED,
                at: new Date().toISOString(),
                by: "employee",
              },
            ],
          }
        : task,
    );

    const updateEmployee = {
      ...data,
      tasks: updateTasks,
    };

    try {
      await fetch(`http://localhost:5000/employees/${data.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tasks: updateTasks,
        }),
      });

      setUserData((prev) =>
        prev.map((emp) => (emp.id === data?.id ? updateEmployee : emp)),
      );
    } catch (err) {
      console.log("data error :", err);
    }
  };

  const handleFailed = async (taskId) => {
    const updateData = data?.tasks?.map((task) =>
      taskId === task.id
        ? {
            ...task,
            status: TASK_STATUS.FAILED,
            history: [
              ...(Array.isArray(task.history) ? task.history : []),
              {
                action: TASK_STATUS.FAILED,
                at: new Date().toISOString(),
                by: "employee",
              },
            ],
          }
        : task,
    );

    const updateEmployee = {
      ...data,
      tasks: updateData,
    };

    try {
      await fetch(`http://localhost:5000/employees/${data.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tasks: updateData,
        }),
      });

      setUserData((prev) =>
        prev.map((emp) => (emp.id === data?.id ? updateEmployee : emp)),
      );
    } catch (err) {
      console.log("data error:", err);
    }
  };

  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto no-scrollbar auto flex  items-center justify-start flex-nowrap gap-5 w-full mt-10"
    >
      {data?.tasks?.map((task, idx) => {
        if (task.status === TASK_STATUS.NEW) {
          return <NewTask key={task.id} data={task} onAccept={handleAccept} />;
        }
        if (task.status === TASK_STATUS.ACTIVE) {
          return (
            <AcceptTask
              key={task.id}
              data={task}
              onComplete={handleCompleted}
              onFailed={handleFailed}
            />
          );
        }
        if (task.status === TASK_STATUS.COMPLETED) {
          return <CompleteTask key={task.id} data={task} />;
        }
        if (task.status === TASK_STATUS.FAILED) {
          return <FailedTask key={task.id} data={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
