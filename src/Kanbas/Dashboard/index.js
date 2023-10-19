import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css"
import { BsPencilSquare } from "react-icons/bs";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div class='container'>
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 wd-course-grid">
        {courses.map((course, index) => (
          <div className="col">
            <div class="card h-100">
              <img src="/images/react-logo.png" class="card-img-top" alt="..." />
              <div class="card-body wd-dash-card">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                >
                  <h5 class="card-title">{course.name}</h5>
                </Link>
                <h6 class="card-text wd-card-subtitle">{course._id}.{course.number}</h6>
                <p class="card-text wd-card-text">{course.number}_2 2023 Fall Semester Full Term</p>
                <BsPencilSquare className="wd-card-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;