import { useState } from "react";
import "../../styles/Avatar.css";
import ProfileDropdown from "./ProfileDropdown";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <div>
      <div id="avatar" onClick={() => setOpen((prev) => !prev)}>
        {initial}
      </div>

      {open && <ProfileDropdown />}
    </div>
  );
}

export default ProfileMenu;
