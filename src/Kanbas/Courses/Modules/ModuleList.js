import db from "../../Database";
import { useParams } from "react-router";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  //const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <input className="form-control" value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />
          <textarea className="form-control" value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />
          <button className="btn btn-success mx-1"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add</button>
          <button className="btn btn-primary mx-1"
            onClick={() => dispatch(updateModule(module))}>Update</button>
        </li>

        {modules.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index} className="list-group-item">
            <span className="wd-module-title list-group-item list-group-item-secondary">{module.name}
              <button class="btn btn-sm btn-success mx-1 float-end"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button class="btn btn-sm btn-danger mx-1 float-end"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </span>
            <span className="list-group-item list-group-item-secondary">
              {module._id} : {module.description}
            </span>
            {module.lessons && module.lessons.length > 0 && (
              <ul className="list-group wd-modules">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    {lesson.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;