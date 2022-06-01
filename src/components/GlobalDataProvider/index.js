import React, { createContext, useEffect, useState } from "react";
import userApi from "../../api/user";

const GlobalDataContext = createContext();
const GlobalDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const propsValues = { status, userInfo, loading, setLoading };

  const fetchUserdata = async () => {
    const userStatus = await userApi.register();
    const userInfo = await userApi.login();
    setStatus(userStatus.status);
    setUserInfo({ ...userInfo });
    console.log(userStatus, userInfo);
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
