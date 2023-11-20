//import db from "../../Database";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId, dispatch]);

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = async (module) => {
    const newModule = await client.createModule(courseId, module);
    dispatch(addModule(newModule));
    dispatch(setModule({ name: "", description: "" }));
  };


  const handleUpdateModule = async (module) => {
    await client.updateModule(module);
    dispatch(updateModule(module));
    dispatch(setModule({ name: "", description: "" }));
  };


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
            onClick={() => handleAddModule(module)}>
            Add</button>
          <button className="btn btn-primary mx-1"
            onClick={() => handleUpdateModule(module)}>Update</button>
        </li>

        {modules.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index} className="list-group-item">
            <span className="wd-module-title list-group-item list-group-item-secondary">{module.name}
              <button class="btn btn-sm btn-success mx-1 float-end"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button class="btn btn-sm btn-danger mx-1 float-end"
                onClick={() => handleDeleteModule(module._id)}>
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