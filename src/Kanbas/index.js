import KanbasNavigation from "../Kanbas/KanbasNavgation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
//import db from "./Database";
import { React, useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios"

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Course Number",
    startDate: new Date(),
    endDate: new Date(),
  });
  
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  // };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  const deleteCourse = async (course) => {
    await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

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

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
      <div className="row">
        <KanbasNavigation />
        <div className="col px-0">
          <Routes>
            <Route path="/" element={
              <Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
            <Route path="Courses/*" element={<Navigate to="RS101" />} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Account" element={<h1>Account</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;