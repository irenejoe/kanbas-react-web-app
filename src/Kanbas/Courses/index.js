import { useParams, useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css"
import { AiOutlineBars } from "react-icons/ai"

function Courses({courses}) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  let pathList = pathname.split('/')
  let page = pathList[pathList.length - 1]
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="row p-2">
        <div className="col-1">
          <AiOutlineBars className="wd-icon" />
        </div>
        <div className="col">
          <nav className="wd-breadcrumb" style={{ "--bs-breadcrumb-divider": '>' }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">{course.number} FA23 02</li>
              <li className="breadcrumb-item">&gt; {page}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <CourseNavigation />
        <div className="col">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
          </Routes>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
export default Courses;