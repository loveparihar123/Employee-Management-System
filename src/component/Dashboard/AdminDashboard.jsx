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
  return (
    <div className="min-h-screen w-full px-4 py-6 md:p-10 text-white bg-black overflow-y-auto">
      {selectEmployeeId && showHistory ? (
        <>
          <TaskHistoryHeader data={selectEmployeeId} onBack={handleBack} />
          <TaskHistory employeeId={selectEmployeeId} />
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
