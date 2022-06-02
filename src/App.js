import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  DashBoard,
  Home,
  Login,
  Register,
  NotFound,
  Setting,
} from "./containers";

import { GlobalDataContext } from "./components/GlobalDataProvider";
import { useContext } from "react";
function App() {
  const { userInfo } = useContext(GlobalDataContext);
  console.log(userInfo);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        {userInfo === "admin" && <Route path="setting" element={<Setting />} />}
        <Route path=":id" element={<DashBoard />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
