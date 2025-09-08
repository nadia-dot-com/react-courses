import { useState, useEffect, JSX } from "react";

export function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log(counter)
    }, [counter])

    const randomize = () => {
        setCounter(Math.random() * 1000);
    };

    return <button onClick={randomize}>randomize</button>
}