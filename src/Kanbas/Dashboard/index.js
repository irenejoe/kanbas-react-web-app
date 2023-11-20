//import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css"
import { BsPencilSquare } from "react-icons/bs";
import { React, useState } from "react";

function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse
}) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //   {
  //     ...course,
  //     _id: new Date().getTime()
  //   }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };


  return (
    <div>
      <div className='container'>
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button className="btn btn-success mx-2" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-primary mx-2" onClick={
          (event) => {
            event.preventDefault();
            updateCourse(course);}} >
          Update
        </button>
        <hr />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 wd-course-grid">
        {courses.map((course, index) => (
          <div className="col">
          <div className="card h-100">
            <img src="/images/react-logo.png" className="card-img-top" alt="..." />
            <div className="card-body wd-dash-card">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
              >
                <h5 className="card-title">{course.name}</h5>
              </Link>
              <h6 className="card-text wd-card-subtitle">{course.number}</h6>
              <p className="card-text wd-card-text">{course.number}_2 2023 Fall Semester Full Term</p>
              <button className="btn btn-warning mx-2"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>
              <button className="btn btn-danger mx-2"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}>
                Delete
              </button>
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