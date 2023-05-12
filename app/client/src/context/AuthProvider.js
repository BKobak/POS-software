import { createContext, useState } from "react";

const AuthContext = createContext({});

// Create a provider for components to consume and subscribe to changes
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;