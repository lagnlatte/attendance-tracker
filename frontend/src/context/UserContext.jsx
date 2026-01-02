import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    // store role globally
    const [role, setRole] = useState("participant");

    return (
        <UserContext.Provider value={{ role, setRole }}>
        {children}
        </UserContext.Provider>
    );
}
