import ModuleList from "../Modules/ModuleList";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import "./index.css"

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <div className="clearfix">
          <button className="mx-1 float-end btn btn-secondary"><BsThreeDotsVertical /></button>
          <button className="mx-1 float-end btn btn-danger"><AiOutlinePlus /> Module</button>
          <div className="dropdown mx-1">
            <button className="float-end btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineCheckCircle /> Publish All</button>
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
      <div className="col-2 wd-status">
        <button className="my-1 btn btn-secondary">Import Existing Content</button>
        <button className="my-1 btn btn-secondary">Import from Commons</button>
        <button className="my-1 btn btn-secondary">Choose Home Page</button>
        <button className="my-1 btn btn-secondary">View Course Stream</button>
        <button className="my-1 btn btn-secondary">New Announcement</button>
        <button className="my-1 btn btn-secondary">New Analytics</button>
        <button className="my-1 btn btn-secondary">View Course Notifications</button>
        <h2>ToDo</h2>
        <hr />
        <ul className="wd-todo list-group">
          <li className="list-group-item">Grade A1 - ENV + HTML</li>
          <li className="list-group-item">Grade A2 - CSS + BOOTSTRAP</li>
        </ul>
      </div>
    </div>
  );
}
export default Home;