import React, { createContext, useEffect, useMemo, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("http://localhost:5000/employees");
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.log("missing data :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const value = useMemo(() => {
    return [userData, setUserData, loading];
  }, [userData, loading]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
