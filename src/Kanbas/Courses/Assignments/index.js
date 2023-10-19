import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <input type="text" placeholder="Search for Assignment" />
      <button className="mx-1 btn btn-secondary float-end"><BsThreeDotsVertical /></button>
      <button className="mx-1 btn btn-danger float-end"><AiOutlinePlus />Assignment</button>
      <button className="mx-1 btn btn-secondary float-end"><AiOutlinePlus />Group</button>
      <hr />
      <div className="list-group wd-assignments">
        <li className="list-group-item list-group-item-secondary">
          <h4 className="d-inline">Assignments</h4>
          <p className="float-end p-2"><BsThreeDotsVertical /></p>
          <p className="float-end p-2"><AiOutlinePlus /></p>
          <p className="d-inline float-end p-2">40% of Total</p>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <span className="wd-assign-title">{assignment.title}</span>
            <p className="mb-0"><span className="text-danger">Multiple Modules </span> | <b>Due:</b> {assignment.due} | 100pts
              <span className="mx-1 float-end"><BsThreeDotsVertical /></span>
              <span className="mx-1 float-end text-success"><AiFillCheckCircle /></span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;