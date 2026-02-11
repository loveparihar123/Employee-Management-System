import React, { useContext } from "react";
import Headers from "./Headers";
import { authContext } from "../../Context/AuthProvider";

const TaskHistory = ({ employeeId }) => {
  const [userData, setUserData] = useContext(authContext);
  const employee = userData.find((emp) => emp.id === employeeId);
  const tasks = employee.tasks || [];
  return (
    <div>
      <div className="mt-6 bg-[#1D1D1D] p-5 rounded-md h-full">
        <h2 className="text-xl font-semibold mb-4 ">
          Task-History - <span className="text-2xl">{employee.name}</span>
        </h2>
        {/* 3️⃣ map lagao */}
        {tasks.length === 0 ? (
          <p className="text-gray-400">No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div key={task.taskId} className="mb-3 p-4 bg-[#2A2A2A] rounded-md">
              <div className="flex justify-between">
                <h3 className="font-medium">{task.title}</h3>
                {task.status === "failed" && (
                  <span className="text-sm text-red-500">{task.status}</span>
                )}
                {task.status === "completed" && (
                  <span className="text-sm text-blue-400">{task.status}</span>
                )}
                {task.status === "new" && (
                  <span className="text-sm text-yellow-400">{task.status}</span>
                )}
                {task.status === "active" && (
                  <span className="text-sm text-green-400">{task.status}</span>
                )}
              </div>

              <p className="text-sm mt-2 text-gray-300">{task.description}</p>

              {/* 🔥 TASK HISTORY */}
              <div className="mt-3 border-t border-gray-600 pt-3">
                <p className="text-sm font-semibold text-gray-400 mb-2">
                  History
                </p>

                {task.history?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-sm text-gray-300 mb-1"
                  >
                    <span>{item.action}</span>
                    <span className="">{item.by}</span>
                    <span>
                      {new Date(item.at).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskHistory;
