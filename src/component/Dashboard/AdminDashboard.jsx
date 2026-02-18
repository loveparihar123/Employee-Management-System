import React, { useContext, useState } from "react";
import Headers from "../others/Headers";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { authContext } from "../../Context/AuthProvider";
import TaskHistory from "../others/TaskHistory";
import TaskHistoryHeader from "../others/TaskHistoryHeader";

const AdminDashboard = (props) => {
  const [userData, setUserData] = useContext(authContext);
  const [selectEmployeeId, setSelectEmployeeId] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const handleHistory = (empId) => {
    setSelectEmployeeId(empId);
    setShowHistory(true);
  };
  const handleBack = () => {
    console.log("button click");
    setSelectEmployeeId(null);
    setShowHistory(false);
  };

  const handleDelete = async (taskId) => {
    console.log("delete click", taskId);
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    const employee = userData.find((emp) => emp.id === selectEmployeeId);

    try {
      // 1️⃣ Remove task locally
      console.log(employee.tasks);
      const updatedTasks = (employee.tasks || []).filter(
        (task) => task.id !== taskId,
      );

      const updatedEmployee = {
        ...employee,
        tasks: updatedTasks,
      };

      // 2️⃣ Update json-server
      await fetch(`http://localhost:5000/employees/${employee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      // 3️⃣ Update context state
      const updatedData = userData.map((emp) =>
        emp.id === employee.id ? updatedEmployee : emp,
      );

      setUserData(updatedData);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full px-4 py-6 md:p-10 text-white bg-black overflow-y-auto">
      {selectEmployeeId && showHistory ? (
        <>
          <TaskHistoryHeader data={selectEmployeeId} onBack={handleBack} />
          <TaskHistory employeeId={selectEmployeeId} onDelete={handleDelete} />
        </>
      ) : (
        <>
          <Headers data={props.data} user={props.user} />
          <CreateTask />
          <div className="mt-10 lg:mt-14">
            <AllTask data={userData} onHistory={handleHistory} />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
