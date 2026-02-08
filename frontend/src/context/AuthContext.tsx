import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type UserType = "traveler" | "owner" | "agent";
export type TravelerType = "solo" | "new" | "experienced" | "group";

export interface User {
    name: string;
    email: string; // Added email
    location: string;
    address: string;
    number: string;
    country: string;
    userType: UserType;
    travelerType?: TravelerType;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem("guide_us_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem("guide_us_user", JSON.stringify(userData));
        // Navigate will be handled by the component calling login usually, 
        // but we can default to dashboard if needed.
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("guide_us_user");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
