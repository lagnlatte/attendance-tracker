import { useState } from "react";
import "../styles/RoleTab.css"

function RoleTab() {
    const [selectedRole, setSelectedRole] = useState("participant");

    const handleSelect = (role) => {
        setSelectedRole(role);
    }

    return (
        <div className = "role-tab">
            <div 
                className={`tab ${selectedRole === "participant" ? "active" : ""}`}
                onClick={() => handleSelect("participant")}
            >
                Participant
            </div>
            <div 
                className={`tab ${selectedRole === "host" ? "active" : ""}`}
                onClick={() => handleSelect("host")}
            >
                Host
            </div>
        </div>
    )
}

export default RoleTab