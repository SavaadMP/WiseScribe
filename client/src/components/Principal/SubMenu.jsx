import {Link} from "react-router-dom";

function SubMenu({item, setShowSideBar}) {
    const {icon, title} = item

    return (
        <li className="list" onClick={() => setShowSideBar(!setShowSideBar)}>
            <Link to="/" className="nav-link">
                <i className={`${icon} icon`}></i>
                <span className="link">{title}</span>
            </Link>
        </li>
    )
}

export default SubMenu