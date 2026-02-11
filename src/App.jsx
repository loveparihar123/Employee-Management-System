import { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/Localstorage";
import { authContext } from "./Context/AuthProvider";
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(authContext);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const usersData = JSON.parse(loggedInUser);
      setUser(usersData.role);
      setloggedInUserData(usersData.data);
    }
  }, []);
  const handleLogin = (userEmail, userPassword) => {
    if (userEmail === "admin1@company.com" && userPassword === "123") {
      const admin = {
        name: "love parihar",
        email: "admin1@company.com",
      };

      setUser("admin");
      setloggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin }),
      );
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email == userEmail && e.password == userPassword,
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid credentials:");
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? (
        <AdminDashboard user={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard user={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
