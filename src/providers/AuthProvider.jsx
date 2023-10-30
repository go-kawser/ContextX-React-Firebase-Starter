 import React, { createContext } from 'react';
 
 const AuthContext = createContext(null);
 
 const AuthProvider = () => {
    const user = {displayName: 'Muhammad Kawser'}
    return (
        <AuthContext.Provider value={user}>
            
        </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;