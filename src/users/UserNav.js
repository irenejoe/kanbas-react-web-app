import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserNav() {
    const links = ["Home", "Signin", "Signup", "Account"];

    const { pathname } = useLocation();
    return (
        <div className="list-group">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Users/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    <div>
                        {link}
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default UserNav;