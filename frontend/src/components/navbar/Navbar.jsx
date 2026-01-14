import Logo from "../Logo";
import ProfileMenu from "./ProfileMenu";
import "../../styles/Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { role } = useContext(UserContext); // get role
  const navigate = useNavigate();

  // decide where the logo should navigate
  const logoTarget = role === "host" ? "/dashboard" : "/home";

  return (
    <nav>
      <div className="navbar-container">
        <Link to={logoTarget}>
          <Logo />
        </Link>

        {role === "host" ? (
          <div className="host-menu">
            <div className="links">
              <Link to="/dashboard" className="menu-link hide-mobile">
                Dashboard
              </Link>
              <Link to="/event-groups" className="menu-link hide-mobile">
                Event Groups
              </Link>
            </div>
            <Button
              className="create-btn hide-mobile"
              text="Create new event group"
              onClick={() => navigate("/create")}
            ></Button>
          </div>
        ) : null}

        <ProfileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
