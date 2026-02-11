import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/Localstorage";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { Employees } = getLocalStorage();
    setUserData(Employees);
  }, []);

  //to update the userdata that should be reflect in local storage.
  useEffect(() => {
    if (userData) {
      localStorage.setItem("Employees", JSON.stringify(userData));
    }
  }, [userData]);
  return (
    <div>
      <authContext.Provider value={[userData, setUserData]}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
