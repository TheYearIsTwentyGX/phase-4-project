import React, { useContext, ContextProvider, useState, Children } from "react";

const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({});
    const [permissions, setPermissions] = useState(null);
    const [accessProfiles, setAccessProfiles] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    return (<UserContext.Provider value={{ username, setUsername, user, setUser, permissions, setPermissions, accessProfiles, setAccessProfiles, editedUser, setEditedUser }}>{children}</UserContext.Provider>);
}

export { UserContext }