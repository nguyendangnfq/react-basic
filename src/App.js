import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { Login, Register } from "./containers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
