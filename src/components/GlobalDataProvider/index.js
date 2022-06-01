import React, { createContext, useEffect, useState } from "react";
import userApi from "../../api/user";

const GlobalDataContext = createContext();
const GlobalDataProvider = ({ children }) => {
  const [status, setStatus] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const propsValues = { status, userInfo };

  const fetchUserdata = async () => {
    const userStatus = await userApi.register();
    const userInfo = await userApi.login();
    // console.log(userStatus);
    console.log(userInfo);
    setStatus(userStatus.status);
    setUserInfo({ ...userInfo });
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  return (
    <GlobalDataContext.Provider value={propsValues}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
