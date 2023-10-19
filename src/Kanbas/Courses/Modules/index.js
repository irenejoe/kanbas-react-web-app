import ModuleList from "./ModuleList";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import "./index.css"

function Modules() {
  return (
    <div className="col-12">
      <div className="clearfix">
        <button className="mx-1 float-end btn btn-secondary"><BsThreeDotsVertical /></button>
        <button className="mx-1 float-end btn btn-danger"><AiOutlinePlus /> Module</button>
        <div className="dropdown mx-1">
          <button className="float-end btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineCheckCircle /> Publish All
          </button>
          <ul className="dropdown-menu">
            <li>Option One</li>
            <li>Option Two</li>
          </ul>
        </div>
        <button className="mx-1 float-end btn btn-secondary">View Progress</button>
        <button className="mx-1 float-end btn btn-secondary">Collapse All</button>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;