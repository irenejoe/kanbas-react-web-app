import db from "../../Database";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <ul className="list-group wd-modules">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            <span className="wd-module-title list-group-item list-group-item-secondary">{module.name}</span>
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