import { useContext } from "react";
import Headers from "../others/Headers";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { authContext } from "../../Context/AuthProvider";
const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(authContext);
  const currentEmployee = userData.find((e) => e.id === props.data.id);
  return (
    <div className="min-h-screen p-5 md:p-10 bg-[#1C1C1C] text-white overflow-x-hidden">
      <Headers data={props.data} user={props.user}></Headers>
      <TaskListNumber data={currentEmployee}></TaskListNumber>
      <TaskList data={currentEmployee} setUserData={setUserData} />
    </div>
  );
};

export default EmployeeDashboard;
