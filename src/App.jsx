import { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { authContext } from "./Context/AuthProvider";
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData, loading] = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loading && userData) {
          const loggedInUser = localStorage.getItem("loggedInUser");

          if (loggedInUser) {
            const { role, id } = JSON.parse(loggedInUser);
            if (role === "employee") {
              const currEmployee = userData.find((emp) => emp.id === id);

              if (currEmployee) {
                setUser("employee");
                setloggedInUserData(currEmployee);
              }
            }

            if (role == "admin") {
              setUser("admin");
              setloggedInUserData({ role: "admin" });
            }
          }
        }
      } catch (err) {
        console.log("missing data", err);
      }
    };
    fetchData();
  }, [loading, userData]);

  const handleLogin = async (userEmail, userPassword) => {
    const res = await fetch("http://localhost:5000/employees");
    const employees = await res.json();

    const resAdmin = await fetch("http://localhost:5000/admin");
    const admins = await resAdmin.json();

    const admin = admins.find(
      (e) => e.email === userEmail && e.password === userPassword,
    );

    if (admin) {
      setUser("admin");
      setloggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", id: admin.id }),
      );
      return;
    }
    const employee = employees.find(
      (emp) => emp.email === userEmail && emp.password === userPassword,
    );

    if (employee) {
      setUser("employee");
      setloggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", id: employee.id }),
      );
    } else {
      alert("Invalid credentials:");
    }
  };
  if (loading) return <h2>loading....</h2>;
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
