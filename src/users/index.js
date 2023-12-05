import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import UserNav from "./UserNav";
import Signup from "./signup";
import Account from "./account";
import UserTable from "./table";

function Users() {
  return (
    <div className="row">
      <div className="col-2">
        <UserNav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/Users/Signin" />} />
          <Route path="/Home" element={<Signin />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Users;