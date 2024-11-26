import { SignupButton } from "../SignupButton/SignupButton";
import "./Navbar.css";
import ParseSpyLogo from "../../assets/parse-spy.svg";
import MenuSearchLogo from "../../assets/menu-search-fill.svg";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();
    function navbarLogoClickHandler() {
        navigate("/");
    }
    return (
        <nav>
            <div id="navbar-logo" onClick={navbarLogoClickHandler}>
                <img src={MenuSearchLogo} alt="Parse Spy Logo" id="menuSearchIcon" />
                <img src={ParseSpyLogo} alt="Parse Spy" id="parseSpyIcon" />
            </div>
            {/* <div>Index(if any)</div> */}
            <div>
                <SignupButton />
            </div>
        </nav>
    );
};
