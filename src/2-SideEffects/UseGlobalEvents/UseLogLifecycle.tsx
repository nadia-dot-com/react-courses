import { useEffect } from "react";

export function App() {
    useLogLifecycle('App');

    return <h1>Hello, world</h1>
}

function useLogLifecycle(tag: string) {
    console.log(`[${tag}] Render`);
    
    useEffect(() =>{
        console.log(`[${tag}] Mounted`)

        return () => {
            console.log(`[${tag}] Unmounted`)
        }
    }, [])
}