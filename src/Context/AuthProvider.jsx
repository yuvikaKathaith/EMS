import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState('');
    
    useEffect(() => {
        setLocalStorage();
        const {empData, adminData} = getLocalStorage();
        setUserData({empData, adminData});
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider