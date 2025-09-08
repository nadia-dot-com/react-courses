import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

const FirstContext = createContext<string | null>(null);

const CONTEXT_VALUE = 'Hello from FirstContentProvider';

export function FirstContextProvider({children}: {children: ReactNode}) {
    const [date, setDate] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return ()=> clearInterval(interval)
    }, [])
    
    return <FirstContext.Provider value={date.toLocaleTimeString()}>{children}</FirstContext.Provider>
}

export function useFirstContext() {
    const contextValue = useContext(FirstContext);
    if(contextValue === null){
        throw new Error('useFirstContext must be used within a FirstContextProvider');
    }

    return contextValue;
}