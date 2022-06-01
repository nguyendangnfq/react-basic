import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { Login, Register } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="App__auth-ctn">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
