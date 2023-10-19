import KanbasNavigation from "../Kanbas/KanbasNavgation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router"
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
  return (
    <div className="row">
      <KanbasNavigation />
      <div className="col px-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<Navigate to="RS101" />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;