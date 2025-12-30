import { Link } from 'react-router-dom'
import "../../styles/ProfileDropdown.css"

function ProfileDropdown() {
    return (
        <div id="dropdown">
            <p>Alexandra Tomescu</p>
            <Link to="/" className="info">Log out</Link>
        </div>
    )
}

export default ProfileDropdown