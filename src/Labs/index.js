import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import Assignment6 from "./a6"
import Nav from "../Nav"
import { Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a6" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4/*" element={<Assignment4 />} />
          <Route path="a5/*" element={<Assignment5 />} />
          <Route path="a6/*" element={<Assignment6 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Labs;