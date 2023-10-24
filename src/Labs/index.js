// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import Assignment3 from "./a3";
// import Assignment4 from "./a4";
// import Assignment5 from "./a5";
// import Nav from "../Nav";

// function Labs() {
//   return (
//     <div className="container">
//       <Nav />
//       <h1>Labs</h1>
//       <Link to="a3">Assignment 3</Link>
//       <Link to="a4">Assignment 4</Link>
//       <Link to="a5">Assignment 5</Link>
//       <Routes>
//         <Route path="/" element={<Navigate to="a3" />} />
//         <Route path="a3/*" element={<Assignment3 />} />
//         <Route path="a4" element={<Assignment4 />} />
//         <Route path="a5" element={<Assignment5 />} />
//       </Routes>
//       {/* <Assignment3 />
//       <Assignment4 />
//       <Assignment5 /> */}
//     </div>
//   );
// }

// export default Labs;

import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav"
import { Routes, Route, Navigate } from "react-router-dom";
function Labs() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="a4" />} />
        <Route path="a3/*" element={<Assignment3 />} />
        <Route path="a4/*" element={<Assignment4 />} />
      </Routes>
    </div>
  );
}
export default Labs;