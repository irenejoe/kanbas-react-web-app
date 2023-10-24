import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const screen = "labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;