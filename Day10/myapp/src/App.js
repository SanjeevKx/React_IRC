import { Route, Routes } from "react-router-dom";
import Adduser from "./Pages/Adduser";
import Edituser from "./Pages/Edituser";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<User />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit" element={<Edituser />} />
      </Routes>
    </div>
  );
}

export default App;