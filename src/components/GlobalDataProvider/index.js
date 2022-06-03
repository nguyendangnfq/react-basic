import React, { createContext, useState } from "react";

const GlobalDataContext = createContext();
const GlobalDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [animalInfo, setAnimalInfo] = useState([]);
  const propsValues = {
    loading,
    setLoading,
    token,
    setToken,
    userInfo,
    setUserInfo,
    animalInfo,
    setAnimalInfo,
  };

  return (
    <GlobalDataContext.Provider value={propsValues}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
