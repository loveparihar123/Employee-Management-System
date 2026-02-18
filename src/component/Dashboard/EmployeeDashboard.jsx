import { useContext } from "react";
import Headers from "../others/Headers";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { authContext } from "../../Context/AuthProvider";
const EmployeeDashboard = (props) => {
  console.log("data dikhao :", props.data);
  const [userData, setUserData, loading] = useContext(authContext);
  if (loading) {
    return <div>loading...</div>;
  }
  const currentEmployee = userData?.find((e) => e.id === props.data?.id);
  console.log(currentEmployee);
  return (
    <div className="min-h-screen p-5 md:p-10 bg-[#1C1C1C] text-white overflow-x-hidden">
      <Headers data={props.data} user={props.user}></Headers>
      <TaskListNumber data={currentEmployee}></TaskListNumber>
      <TaskList data={currentEmployee} setUserData={setUserData} />
    </div>
  );
};

export default EmployeeDashboard;
