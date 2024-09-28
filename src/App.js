import { Outlet } from "react-router-dom";
import "./App.css";

import { NAvbar } from "./componet/NAvbar";
function App() {
  return (
    <div>
      <NAvbar />
      <Outlet />
    </div>
  );
}

export default App;
