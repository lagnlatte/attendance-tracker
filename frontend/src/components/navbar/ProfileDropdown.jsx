import { Link, useNavigate } from "react-router-dom";
import "../../styles/ProfileDropdown.css";

function ProfileDropdown() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div id="dropdown">
      <p>{user?.name || "User"}</p>
      <Link to="/" className="info">
        Log out
      </Link>
    </div>
  );
}

export default ProfileDropdown;
