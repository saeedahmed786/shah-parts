import { isAuthenticated } from '@/components/Commons/Auth/Auth';
import { createContext, useContext, useEffect, useState } from 'react';


const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [userAuth, setUserAuth] = useState({});


    useEffect(() => {
        setUserAuth(isAuthenticated());

        return () => {

        }
    }, []);


    return (
        <GlobalContext.Provider
            value={{
                userAuth,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}