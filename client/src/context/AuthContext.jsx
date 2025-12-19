import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("authToken");
            const userData = localStorage.getItem("user");

            if (token && userData) {
                try {
                    // Validate token expiration
                    const payload = JSON.parse(atob(token.split('.')[1]));
                    const isExpired = payload.exp * 1000 < Date.now();

                    if (isExpired) {
                        // Token expired, clear storage
                        localStorage.removeItem("authToken");
                        localStorage.removeItem("user");
                        setUser(null);
                    } else {
                        setUser(JSON.parse(userData));
                    }
                } catch (error) {
                    console.error("Error parsing auth data:", error);
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("user");
                    setUser(null);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
    };

    const isAuthenticated = () => {
        if (!user || !localStorage.getItem("authToken")) {
            return false;
        }

        // Check token expiration
        try {
            const token = localStorage.getItem("authToken");
            const payload = JSON.parse(atob(token.split('.')[1]));
            const isExpired = payload.exp * 1000 < Date.now();

            if (isExpired) {
                logout();
                return false;
            }

            return true;
        } catch (error) {
            return false;
        }
    };

    const getToken = () => {
        return localStorage.getItem("authToken");
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
        getToken,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthContext;
