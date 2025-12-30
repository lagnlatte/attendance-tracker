import { useState } from 'react'
import "../../styles/Avatar.css"
import ProfileDropdown from "./ProfileDropdown"

function ProfileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div id="avatar" onClick={() => setOpen((prev) => !prev)}>
                A
            </div>
            
            {open && <ProfileDropdown />}
        </div>
    )
}

export default ProfileMenu