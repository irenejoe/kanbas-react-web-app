import React from "react";
import db from "../../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <button className="mx-1 float-end btn btn-secondary"><BsThreeDotsVertical /></button>
      <span className="m-2 text-success float-end"><AiFillCheckCircle /> Published</span>
      <label for="assignmentName">Assignment Name</label>
      <input className="form-control" id="assignmentName" defaultValue={assignment.title} />
      <button onClick={handleSave} className="m-2 btn btn-success float-end">
        Save
      </button>
      <Link
        className="m-2 btn btn-secondary float-end"
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;