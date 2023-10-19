import { useParams, useLocation } from "react-router";
import CourseNavigation from "./CourseNavigation";
import db from "../Database";
import { Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css"
import { AiOutlineBars } from "react-icons/ai"

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  let pathList = pathname.split('/')
  let page = pathList[pathList.length - 1]
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div class="row p-2">
        <div class="col-1">
          <AiOutlineBars className="wd-icon" />
        </div>
        <div class="col-1">
        </div>
        <div class="col">
          <nav class="wd-breadcrumb" style={{ "--bs-breadcrumb-divider": '>' }}>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><span className='anchor' href="#">{course.number} FA23 02</span></li>
              <li class="breadcrumb-item">&gt; {page}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <CourseNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Home />} />
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