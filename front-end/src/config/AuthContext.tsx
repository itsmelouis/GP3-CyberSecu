import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextProps {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    user: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const decodeToken = (token: string): any => {
    try {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        return decoded;
    } catch (e) {
        throw new Error('Invalid token');
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (token) {
            const decoded = decodeToken(token);
            setUser(decoded);
        }
    }, [token]);

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem('token', token);
        const decoded = decodeToken(token);
        setUser(decoded);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
