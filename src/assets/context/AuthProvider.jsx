import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage';


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    setLocalStorage()
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const { admin, employee } = getLocalStorage();

        setUserData({admin, employee});
    }, [] )
    return (
       
            <AuthContext.Provider value={userData} >
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;