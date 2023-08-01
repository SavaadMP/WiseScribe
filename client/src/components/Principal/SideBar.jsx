import "./SideBar.scss"
import {Link} from "react-router-dom";
import {SideBarData} from "../../data/SideBarData.jsx";
import {useState} from "react";

import logo from "../../assets/images/logo.png"
import SubMenu from "./SubMenu.jsx";

function SideBar() {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <nav>
            {/* ================= LOGO DESIGN ==================== */}
            <div className="header">
                <div className="logo">
                    <i className="bx bx-menu menu-icon" onClick={() => setShowSideBar(true)}></i>
                    <img className="logo-img" src={logo} alt="logo_wiseScribe"/>
                </div>

                <div className="profile">
                    <img src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
                         alt="profile_image"/>
                    <div className="profile_info">
                        <h3>Muhammed Savaad MP</h3>
                        <p>Principal</p>
                    </div>
                </div>
            </div>
            {/* ================= END LOGO DESIGN ==================== */}

            {/* =================== SIDEBAR DESIGN ==================== */}
            <div className={`sidebar ${showSideBar ? "active" : ""}`}>
                {/* ================= LOGO DESIGN ==================== */}
                <div className="logo">
                    <i className="bx bx-x menu-icon" onClick={() => setShowSideBar(false)}></i>
                    <img className="logo-img" src={logo} alt="logo_wiseScribe"/>
                </div>
                {/* ================= END LOGO DESIGN ==================== */}

                <div className="sidebar-content">
                    <ul className="lists">
                        {SideBarData.map((item, index) => {
                            return <SubMenu setShowSideBar={setShowSideBar} key={index} item={item}/>
                        })}
                    </ul>

                    <div className='bottom-content'>
                        <li className="list">
                            <Link to="/" className="nav-link">
                                <i className='bx bx-log-out icon'></i>
                                <span className="link">Logout</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
            {/* ========================= END SIDEBAR DESIGN ==================== */}
        </nav>
    )
}

export default SideBar