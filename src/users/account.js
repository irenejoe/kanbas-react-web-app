import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const save = async () => {
        await client.updateUser(account);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/users/signin");
    };

    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input className="form-control my-1" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input className="form-control my-1" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input className="form-control my-1" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input className="form-control my-1" value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input className="form-control my-1" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select className="form-control my-1" onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save} className="btn btn-success w-100 my-1">
                        Save
                    </button>
                    <Link to="/Users/admin/users" className="btn btn-warning w-100 my-1">
                        Users
                    </Link>
                    <button onClick={signout} className="btn btn-danger w-100 my-1">
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
export default Account;