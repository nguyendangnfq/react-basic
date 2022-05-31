import React, { createContext, useEffect, useState } from "react";
import userApi from "../../api/user";

const GlobalDataContext = createContext();
const GlobalDataProvider = ({ children }) => {
  const [value, setValue] = useState("");

  const fetchUserdata = async () => {
    const userData = await userApi.register();
    setValue(userData.status);
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
