import Logo from "../Logo"
import ProfileMenu from "./ProfileMenu"
import "../../styles/Navbar.css"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Button from "../Button"

function Navbar() {
    const { role } = useContext(UserContext); // get role
    
    return (
        <nav>
            <Logo />

            { role === "host" ? (
                <div className="host-menu">
                    <div className="links">
                        <a href="/dashboard" className="menu-link">Dashboard</a>
                        <a href="/event-groups" className="menu-link">Event Groups</a>
                    </div>
                    <Button className="create-btn" text="Create new event group"></Button>
                </div>
            ) : null}

            <ProfileMenu />
        </nav>
    )
}

export default Navbar