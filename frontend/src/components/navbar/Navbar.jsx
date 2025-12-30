import Logo from "../Logo"
import ProfileMenu from "./ProfileMenu"
import "../../styles/Navbar.css"

function Navbar() {
    return (
        <nav>
            <Logo />
            <ProfileMenu />
        </nav>
    )
}

export default Navbar