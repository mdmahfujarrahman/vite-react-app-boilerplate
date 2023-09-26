import { useState } from "react";
import { Link } from "react-router-dom";

// style 
import "./Navbar.css";
import { warpleImage } from "../../../assets";
import CustomButton from "../../../ui/Button/CustomButton";
import Arrow from "../Arrow/Arrow";

// images


// UI Componnests


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="navbarWrapper">
            <div className="navbarLergeWrapper">
                <nav className="navbarLerge">
                    <Link className="navbarLergeLogoLink" href="/">
                        <img
                            className="navbarLergeLogo"
                            src={warpleImage.logo}
                            alt="warple logo"
                        />{" "}
                    </Link>
                    <ul className="navbarLergeLinks">
                        <li className="navbarLergeLink">
                            <small>ABOUT</small>
                            <p>warpleについて</p>
                        </li>
                        <li className="navbarLergeLink">
                            <small>ABOUT</small>
                            <p>warpleについて</p>
                        </li>
                        <li className="navbarLergeLink">
                            <small>ABOUT</small>
                            <p>warpleについて</p>
                        </li>
                        <li>
                            <CustomButton btnStyle="navbarLergeBtn">
                                <p> ログイン・新規会員登録</p>
                                <Arrow />
                            </CustomButton>
                        </li>
                    </ul>
                    <ul className="navbarMobileLinks">
                        <li>
                            <CustomButton btnStyle="navbarLergeBtn">
                                <p>登録</p>
                                <Arrow />
                            </CustomButton>
                        </li>
                        <li onClick={() => setToggle(!toggle)}>
                            <img
                                src={
                                    toggle
                                        ? warpleImage.crossIcon
                                        : warpleImage.menuIcon
                                }
                                alt="toogle Icon"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
