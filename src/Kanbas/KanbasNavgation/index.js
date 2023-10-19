import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import "@fortawesome/fontawesome-free";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaEnvelopeOpenText, FaClock, FaDesktop, FaQuestionCircle } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsBoxArrowRight } from "react-icons/bs";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <FaEnvelopeOpenText className="wd-icon" />,
        History: <FaClock className="wd-icon" />,
        Studio: <FaDesktop className="wd-icon" />,
        Commons: <BsBoxArrowRight className="wd-icon" />,
        Help: <FaQuestionCircle className="wd-icon" />,
    };
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigator">
            <h1 className='wd-N'>N</h1>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkToIconMap[link]}
                    <div>
                        {link}
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;