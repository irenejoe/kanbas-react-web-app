import ModuleList from "../Modules/ModuleList";
import { BsThreeDotsVertical } from "react-icons/bs"

function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Status</h2>
        </div>
    </div>
  );
}
export default Home;

// function Home() {
//   return (
//     <div className="row">
//       <div className="col-10">
//         <button class="mx-1 float-end btn btn-secondary"><BsThreeDotsVertical /></button>
//         <button class="mx-1 float-end btn btn-danger"> Module</button>
//         <button class="mx-1 float-end btn btn-secondary dropdown-toggle" type="button">
//           Publish All</button>
//         <button class="mx-1 float-end btn btn-secondary">View Progress</button>
//         <button class="mx-1 float-end btn btn-secondary">Collapse All</button>
//         <hr />
//         <ModuleList />
//       </div>
//       <div class="col">
//             <button class="btn btn-secondary">Import Existing Content</button>
//             <button class="btn btn-secondary">Import from Commons</button>
//             <button class="btn btn-secondary">Choose Home Page</button>
//             <button class="btn btn-secondary">View Course Stream</button>
//             <button class="btn btn-secondary">New Announcement</button>
//             <button class="btn btn-secondary">New Analytics</button>
//             <button class="btn btn-secondary">View Course Notifications</button>
//           </div>
      
//       <div className="col-2">Status</div>
//       <div class="col-12 col-xl-9 col-xxl-6">
//         <div class="clearfix">
//           <button class="mx-1 float-end btn btn-secondary"><BsThreeDotsVertical /></button>
//           <button class="mx-1 float-end btn btn-danger"> Module</button>
//           <div class="dropdown mx-1">
//             <button class="float-end btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
//               Publish All
//             </button>
//             <ul class="dropdown-menu">

//             </ul>
//           </div>

//         </div>
//         <hr />
//         <ModuleList />
//       </div>
//       <div class="d-none d-xxl-block col-xxl-3">
//         <div class="float-end">
//           <p>Course Status</p>
//           <button class="mx-2 btn btn-secondary">Unpublish</button>
//           <button class="mx-0 btn btn-success" disabled>Published</button>
//           <div class="col">
//             <button class="btn btn-secondary">Import Existing Content</button>
//             <button class="btn btn-secondary">Import from Commons</button>
//             <button class="btn btn-secondary">Choose Home Page</button>
//             <button class="btn btn-secondary">View Course Stream</button>
//             <button class="btn btn-secondary">New Announcement</button>
//             <button class="btn btn-secondary">New Analytics</button>
//             <button class="btn btn-secondary">View Course Notifications</button>
//           </div>
//           <h6>To Do</h6>
//           <hr />
//           <span className='anchor'>Assignment 1</span>
//           <br />
//           <br />
//           <h6>Coming Up</h6>
//           <hr />
//           <span className='anchor'>Lecture</span>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default Home;